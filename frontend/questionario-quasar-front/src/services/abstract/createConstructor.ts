import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { createUrlParams, IUrlParams } from './utils/axios';
import { IServiceConfig } from './IServiceConfig';
import { addHeaders } from './utils/headers';

export interface ICreateConfig extends IServiceConfig {
  urlParams?: IUrlParams;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ICreateArgs<REQUEST, RESPONSE> {
  model?: REQUEST;
  urlParams?: IUrlParams;
}
export const createConstructor = <REQUEST, RESPONSE>(
  axios: AxiosInstance,
  config: ICreateConfig
) => {
  return {
    create: async (args: ICreateArgs<REQUEST, RESPONSE>) => {
      console.log('[CreateConstructor] tableRequest', args.model);

      const params = {};
      let lheaders = {};
      lheaders = await addHeaders(config, lheaders);
      const urlParams = Object.assign({}, config.urlParams, args.urlParams);
      const requestConfig: AxiosRequestConfig = {
        method: 'put',
        url: createUrlParams(config.contextPath, urlParams),
        params: params,
        data: args.model,
        headers: lheaders,
      };
      const response: AxiosResponse<RESPONSE> = await axios.request(
        requestConfig
      );
      const data = response.data;
      console.log('[CreateConstructor] data', data);
      return data;
    },
  };
};

export interface ICreateConstructor<REQUEST, RESPONSE> {
  create(args: ICreateArgs<REQUEST, RESPONSE>): Promise<RESPONSE>;
}
