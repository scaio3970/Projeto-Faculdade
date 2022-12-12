import { IServiceConfig } from '../../IServiceConfig';

export const storeAuthorization = async (headers: Record<string, string>) => {
  headers['Authorization'] =
    'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InB1YmxpY0lkIjoiYjkxOWQwZTAtZjY4YS00MWU3LTk5YTItZWFiYzc5OWNiNzEzIiwicmVhbG0iOiI3OTQ5ODhiZi1mYjRhLTQ5MDAtYjdmMS1iM2E2NDBlOTE1YjEifSwiaWF0IjoxNjU4NzgxNTU0fQ.HDKjXTvQq9kA0QlGid5FR9qWZENoxKoaxZ5Amou73VLSEXC3q-r-3_QlI_43UJu5pusavZ193dh_DmosQg2DB3oGn6OysoX8xw2czpRO3S2y_5W8sWBtdSt9H_gauwlbHDaNvHuUfb-GodQ8ylzj14Ro8XmdJhu168_xmh9XoLc';
  return Promise.resolve(headers);
};

export const addHeaders = async (
  config: IServiceConfig,
  headers: Record<string, string>
) => {
  if (!!config.storeAuthorization) {
    await storeAuthorization(headers);
  }
  return headers;
};
