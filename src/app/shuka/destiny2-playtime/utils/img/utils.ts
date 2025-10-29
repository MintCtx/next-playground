import { getBungieApiBaseUrl } from '@/app/api/shuka/destiny2-playtime/utils';

/**
 * 外部ドメインとイメージパス合成し、返還する
 * @param iconPath レスポンスから取得したプラットフォームのアイコンパス
 * @returns 外部ドメインを合わせたアイコンパス|空白
 */
export const makeIconPath = (iconPath: string): string => {
  const basePath = getBungieApiBaseUrl();

  return iconPath ? new URL(iconPath, basePath).toString() : '';
};
