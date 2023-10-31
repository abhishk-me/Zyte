import { useCallback, useEffect, useState } from 'react';
import { ApiResponse } from 'apisauce';
import { ApiError, getApiError } from '../api/api-errors';

export const useMutation = <
  Response,
  PathParams = void,
  RequestBody = void,
>(
  queryFunc: (requestData?: {
    pathParams?: PathParams
    requestBody?: RequestBody
  }) => Promise<ApiResponse<Response>>,
  options?: {
    onSuccess?: (responseData: {
      data: Response
      pathParams?: PathParams
      requestBody?: RequestBody
    }) => void
    onError?: (err: ApiError) => void
  },
) => {
  const [response, setResponse] = useState<Response>();
  const [error, setError] = useState<ApiError>();
  const [loading, setloading] = useState(false);

  const mutate = (requestData?: { pathParams?: PathParams; requestBody?: RequestBody }) => {
    setloading(true);
    return new Promise<Response>((resolve, reject) => {
      queryFunc(requestData).then((res) => {
        if (!res.ok) {
          setError(getApiError(res));
          if (options && options.onError) {
            options.onError(getApiError(res));
          }
          setloading(false);
          reject(getApiError(res));
        } else {
          const data = res.data as Response;
          setResponse(data);
          if (options && options.onSuccess) {
            options.onSuccess({ data, ...requestData });
          }
          setloading(false);
          resolve(data)
        }
      });
    })
  };

  return { mutate, response, error, loading };
};

export const useQuery = <
  Response,
  PathParams = void,
  QueryParams = void,
>(
  queryFunc: (requestData?: {
    pathParams?: PathParams
    queryParams?: QueryParams
  }) => Promise<ApiResponse<Response>>,
  options?: {
    onSuccess?: (responseData: {
      data: Response
      pathParams?: PathParams
      queryParams?: QueryParams
    }) => void
    onError?: (err: ApiError) => void
  },
) => {
  // const [response, setResponse] = useState<Response>();
  const [error, setError] = useState<ApiError>();
  const [loading, setloading] = useState(false);

  const query = (requestData?: { pathParams?: PathParams; queryParams?: QueryParams; }) => {
    setloading(true);
    queryFunc(requestData).then((res) => {
      if (!res.ok) {
        setError(getApiError(res));
        if (options && options.onError) {
          options.onError(getApiError(res));
        }
        setloading(false);
      } else {
        const data = res.data as Response;
        // setResponse(data);
        if (options && options.onSuccess) {
          options.onSuccess({ data, ...requestData });
        }
        setloading(false);
      }
    });
  };

  return { query, error, loading };
};

export const useFastQuery = <
  Response,
  PathParams = void,
  QueryParams = void,
>(
  queryFunc: (requestData?: {
    pathParams?: PathParams
    queryParams?: QueryParams
  }) => Promise<ApiResponse<Response>>,
  requestData: {
    pathParams?: PathParams
    queryParams?: QueryParams
  },
  options?: {
    onSuccess?: (responseData: {
      data: Response
      pathParams?: PathParams
      queryParams?: QueryParams
    }) => void
    onError?: (err: ApiError) => void
  },
) => {
  const [error, setError] = useState<ApiError>();
  const [loading, setloading] = useState(true);

  const query = useCallback((_requestData?: { pathParams?: PathParams; queryParams?: QueryParams; }) => {
    !loading && setloading(true);
    queryFunc(_requestData || requestData).then((res) => {
      if (!res.ok) {
        setError(getApiError(res));
        if (options && options.onError) {
          options.onError(getApiError(res));
        }
      } else {
        const data = res.data as Response;
        if (options && options.onSuccess) {
          options.onSuccess({ data, ...(_requestData || requestData) });
        }
      }
      setloading(false);
    });
  }, []);

  useEffect(() => {
    query(requestData);
  }, []);

  return { query, error, loading };
};
