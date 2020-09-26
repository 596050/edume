import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import qs from "qs";

export type RequestArgs = {
  body?: object | null;
  opts?: AxiosRequestConfig;
};

type HttpMethods = "GET" | "PUT" | "POST" | "PATCH" | "DELETE";
export type HttpRequestArgs = {
  url: string;
} & RequestArgs;
type HttpRequest = (args: HttpRequestArgs) => Promise<AxiosResponse<any>>;

const requestBuilder = (method: HttpMethods) => ({
  url,
  opts = { headers: {} },
  body,
}: HttpRequestArgs) => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data: body,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
    ...opts,
    headers: {
      ...opts.headers,
    },
  };

  return axios(config)
    .then((res: any) => {
      return res;
    })
    .catch((err) => {
      if (err.response) {
        const errorResponse = err.response.data;

        if (errorResponse.exception) {
          throw new Error(`
          ${err.message},
          ${err.response.status},
          ${errorResponse.exception}
          `);
        } else {
          throw err;
        }
      } else {
        // eslint-disable no-console
        console.error(err);
      }
    });
};

export const get: HttpRequest = requestBuilder("GET");
export const put: HttpRequest = requestBuilder("PUT");
export const post: HttpRequest = requestBuilder("POST");
export const patch: HttpRequest = requestBuilder("PATCH");
export const del: HttpRequest = requestBuilder("DELETE");
