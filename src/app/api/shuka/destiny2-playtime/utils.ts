import { HTTP_METHOD } from 'next/dist/server/web/http';

/**
 * Bungie API keyを取得
 * @returns BUNGIE_API_KEY
 */
const getBungieAPIkey = () => {
  const API_KEY = process.env.BUNGIE_API_KEY;

  if (API_KEY) {
    return API_KEY;
  }

  throw new Error('BUNGIE_API_KEY is undefined');
};

/**
 * Bungie APIのベースURLを取得
 * @returns BUNGIE_BASE_URL
 */
export const getBungieApiBaseUrl = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BUNGIE_BASE_URL;

  if (BASE_URL) {
    return BASE_URL;
  }

  throw new Error('NEXT_PUBLIC_BUNGIE_BASE_URL is undefined');
};

/**
 * Headersを取得
 * @returns headers
 */
const getBungieHeaders = (): { 'X-API-Key': string } => {
  return {
    'X-API-Key': getBungieAPIkey(),
  };
};

/**
 * Bungie API 要請関数のパラメータタイプ
 */
type BungieApiParams<T> = {
  endPoint: string;
  method: HTTP_METHOD;
  requestBody?: T;
};

/**
 * Bungie API 要請
 * @param param0 BungieApiParams<T>
 * @returns Promise<Response> API Response
 */
export const requestBungieApi = <T>({
  endPoint,
  method,
  requestBody,
}: BungieApiParams<T>): Promise<Response> => {
  const url = new URL(endPoint, getBungieApiBaseUrl());

  const requestOptions: RequestInit = {
    method,
    headers: getBungieHeaders(),
  };

  if (requestBody) {
    requestOptions.body = JSON.stringify(requestBody);
  }

  return fetch(url, requestOptions);
};
