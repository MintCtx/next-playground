/**
 * Manifest Response
 */
export type FetchResponse = {
  Response: DestinyManifest;
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: object;
};

/**
 * Destiny Manifest
 */
type DestinyManifest = {
  version: string;
  mobileAssetContentPath: object;
  mobileGearAssetDataBases: [];
  mobileWorldContentPaths: object;
  jsonWorldContentPaths: object;
  jsonWorldComponentContentPaths: WorldComponentContentPath;
  mobileClanBannerDatabasePath: string;
  mobileGearCDN: object;
  iconImagePyramidInfo: [];
};

/**
 * 言語ごとのコンテンツパス
 */
export type WorldComponentContentPath = {
  [key: string]: ComponentContentPath;
};

/**
 * コンテンツパス
 */
type ComponentContentPath = {
  [key: string]: string;
};

/**
 * コンテンツ
 */
export type ContentDefinition = {
  isLastestVersion?: boolean;
  version?: string;
  [key: string]: unknown;
};
