/**
 * BFF用 - ユーザー詳細情報
 */
export type UserSearchResponseDetail = {
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number | null;
  bungieNetMembershipId: number | null;
  destinyMemberships: UserInfoCard[];
};

/**
 * BFF用 - Destinyメンバーシップ情報
 */
export type UserInfoCard = {
  iconPath: string;
  crossSaveOverride: number;
  applicableMembershipTypes: number[];
  isPublic: boolean;
  membershipType: number;
  membershipId: string;
  displayName: string;
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number | null;
};

/**
 * 画面用 - ユーザー詳細情報
 */
export type UserDetailInfo = {
  displayName: string;
  code: number | null;
  destinyMemberships: DestinyMembership[];
};

/**
 * 画面用 - Destinyメンバーシップ情報
 */
export type DestinyMembership = {
  iconPath: string;
  primaryMembershipType: number;
  applicableMembershipTypes: number[];
  type: number;
  id: string;
};
