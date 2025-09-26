/**
 * Bungie API keyを取得
 * @returns BUNGIE_API_KEY
 */
export const getAPIkey = () => {
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
export const getBaseUrl = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BUNGIE_BASE_URL;

  if (BASE_URL) {
    return BASE_URL;
  }

  throw new Error('NEXT_PUBLIC_BUNGIE_BASE_URL is undefined');
};
