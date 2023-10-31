import { ApiResponse } from 'apisauce';

export type ApiError =
  /**
   * Times up.
   */
  | { kind: 'timeout'; temporary: true, data?: any }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: 'cannot-connect'; temporary: true, data?: any }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: 'server', data?: any }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: 'unauthorized', data?: any }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: 'forbidden', data?: any }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: 'not-found', data?: any }
  /**
   * All other 4xx series errors.
   */
  | { kind: 'rejected', data: any }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: 'any'; temporary: true, data?: any }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: 'bad-data', data?: any }

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getApiError<Response>(response: ApiResponse<Response>): ApiError {
  switch (response.problem) {
    case 'CONNECTION_ERROR':
      return { kind: 'cannot-connect', temporary: true };
    case 'NETWORK_ERROR':
      return { kind: 'cannot-connect', temporary: true };
    case 'TIMEOUT_ERROR':
      return { kind: 'timeout', temporary: true };
    case 'SERVER_ERROR':
      return { kind: 'server' };
    case 'UNKNOWN_ERROR':
      return { kind: 'any', temporary: true };
    case 'CLIENT_ERROR':
      switch (response.status) {
        case 401:
          return { kind: 'unauthorized' };
        case 403:
          return { kind: 'forbidden' };
        case 404:
          return { kind: 'not-found' };
        default:
          return { kind: 'rejected', data: response.data };
      }
  }
  return { kind: 'any', temporary: true }
}
