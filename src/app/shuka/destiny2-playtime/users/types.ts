/**
 * ユーザー詳細情報
 * サーバ
 */
export type UserSearchResponseDetail = {
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number | null;
  bungieNetMembershipId: number | null;
  destinyMemberships: UserInfoCard[];
};

/**
 * Destinyメンバーシップ情報
 * サーバ
 */
export type UserInfoCard = {
  membershipType: number;
  membershipId: string;
  iconPath: string;
};

/**
 * ユーザー詳細情報
 * 画面
 */
export type UserDetailInfoModel = {
  displayName: string;
  code: number | null;
  bungieMembershipId: number | null;
  destinyMemberships: DestinyMembership[];
};

/**
 * Destinyメンバーシップ情報
 * 画面
 */
export type DestinyMembership = {
  type: number;
  id: string;
  iconPath: string;
};
