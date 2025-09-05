/**
 * SSR - ユーザー詳細情報
 */
export type UserSearchResponseDetail = {
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode: number | null;
  bungieNetMembershipId: number | null;
  destinyMemberships: UserInfoCard[];
};

/**
 * SSR - Destinyメンバーシップ情報
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
 * CSR - ユーザー詳細情報
 */
export type UserDetailInfo = {
  displayName: string;
  code: number | null;
  destinyMemberships: DestinyMembership[];
};

/**
 * CSR - Destinyメンバーシップ情報
 */
export type DestinyMembership = {
  iconPath: string;
  primaryMembershipType: number;
  applicableMembershipTypes: number[];
  type: number;
  id: string;
};
