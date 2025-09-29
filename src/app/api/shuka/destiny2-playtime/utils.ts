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
 * GET request Bungie API
 * @param endPoint url
 * @returns Promise<Response>
 */
export const getRequestBungieApi = (endPoint: string) => {
  const url = new URL(endPoint, getBungieApiBaseUrl());

  return fetch(url, {
    method: 'GET',
    headers: getBungieHeaders(),
  });
};

/**
 * POST request Bungie API
 * @param endPoint url
 * @param requestBody requestBody
 * @returns Promise<Response>
 */
export const postRequestBungieApi = (
  endPoint: string,
  requestBody: string
): Promise<Response> => {
  const url = new URL(endPoint, getBungieApiBaseUrl());

  return fetch(url, {
    method: 'POST',
    headers: getBungieHeaders(),
    body: requestBody,
  });
};
