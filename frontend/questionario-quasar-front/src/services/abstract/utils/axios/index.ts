export interface IUrlParams {
  [key: string]: string;
}
export const createUrlParams = (url: string, urlParams: IUrlParams): string => {
  Object.entries(urlParams || {}).forEach(([k, v]) => {
    url = url.replace(`:${k}`, encodeURIComponent(v));
  });
  return url;
};
