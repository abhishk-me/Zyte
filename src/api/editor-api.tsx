import { ApiResponse } from 'apisauce';
import { apiGateway } from './api-config';
import { PageDataType } from '../pages/editor/types';

export type SendOtpResponse = { success: boolean, data?: { otp: string } }

export type SignInRequestBody = {
  mobile: string
  otp: string
}
export type SignInResponse = {}

export type UpdateUserRequestBody = {
  firstName: string
  lastName: string
  email?: string
}

export type GetPageQueryParams = {
  id: string
}

export const editorApi = {
  async createPage({
    requestBody,
  }: {
    requestBody?: PageDataType
  }): Promise<ApiResponse<PageDataType>> {
    return apiGateway.post('/pages', requestBody);
  },

  async updatePage({
    pathParams,
    requestBody,
  }: {
    pathParams: {
      id: string
    },
    requestBody: PageDataType
  }): Promise<ApiResponse<PageDataType>> {
    return apiGateway.put(`/pages/${pathParams.id}`, requestBody);
  },

  async getPages(): Promise<ApiResponse<PageDataType[]>> {
    return apiGateway.get('/pages');
  },

  async getPage({
    queryParams
  }: { queryParams: GetPageQueryParams }): Promise<ApiResponse<PageDataType>> {
    return apiGateway.get(`/pages/${queryParams.id}`);
  },

};
