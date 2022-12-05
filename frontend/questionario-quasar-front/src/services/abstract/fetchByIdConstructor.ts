import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { createUrlParams } from './utils/axios';
import { IServiceConfig } from './IServiceConfig';
import { addHeaders } from './utils/headers';

export type IFetchByIdConfig = IServiceConfig;

export interface IFetchByIdArgs {
  id: string;
}
export const fetchByIdConstructor = <RESPONSE>(
  axios: AxiosInstance,
  config: IFetchByIdConfig
) => {
  return {
    fetchById: async (args: IFetchByIdArgs) => {
      console.log('[FetchByIdConstructor]', args);

      const params = {};
      const urlParams = {
        id: args.id,
      };
      let lheaders = {};
      lheaders = await addHeaders(config, lheaders);
      const requestConfig: AxiosRequestConfig = {
        method: 'get',
        url: createUrlParams(config.contextPath, urlParams),
        params: params,
        headers: lheaders,
      };

      const response: AxiosResponse<RESPONSE> = await axios.request(
        requestConfig
      );
      const data: RESPONSE = response.data;
      console.log('[FetchByIdConstructor] data', data);
      return data;
    },
  };
};

export interface IFetchByIdConstructor<RESPONSE> {
  fetchById(args: IFetchByIdArgs): Promise<RESPONSE>;
}
