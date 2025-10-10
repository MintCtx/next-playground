import { UserInfoCard } from '../../../../../types';

/**
 * BFF用 - ユーザーのグループ情報取得レスポンス
 */
export type DestinyGroupResponse = {
  Response: GroupSearchResults;
  ErrorCode: number;
  ThrottleSeconds: number;
  ErrorStatus: string;
  Message: string;
  MessageData: object;
  DetailedErrorTrace: string;
};

/**
 * BFF用 - ユーザーのグループ情報
 */
type GroupSearchResults = {
  results: GroupMembership[];
  totalResults: number;
  hasMore: boolean;
  query: {
    itemsPerPage: number;
    currentPage: number;
    requestContinuationToken: string;
  };
  replacementContinuationToken: string;
  useTotalResults: boolean;
};

/**
 * BFF用 - グループ詳細情報
 */
type GroupMembership = {
  member: Member;
  group: Group;
};

/**
 * BFF用 - グループメンバー情報
 */
type Member = {
  potentialStatus: number;
  groupId: number;
  destinyUserInfo: DestinyUserInfo;
  bungieNetUserInfo: UserInfoCard;
  joinDate: string;
};

/**
 * BFF用 - ユーザー情報詳細
 */
type DestinyUserInfo = {
  LastSeenDisplayName: string;
  LastSeenDisplayNameType: number;
  supplementalDisplayName: string;
} & UserInfoCard;

/**
 * BFF用 - ユーザーのグループ情報
 */
export type Group = {
  groupId: number;
  name: string;
  groupType: number;
  membershipIdCreated: number;
  creationDate: string;
  modificationDate: string;
  about: string;
  tags: string[];
  memberCount: number;
  isPublic: boolean;
  isPublicTopicAdminOnly: boolean;
  motto: string;
  allowChat: boolean;
  isDefaultPostPublic: boolean;
  chatSecurity: number;
  locale: string;
  avatarImageIndex: number;
  homepage: number;
  membershipOption: number;
  defaultPublicity: number;
  theme: string;
  bannerPath: string;
  avatarPath: string;
  conversationId: number;
  enableInvitationMessagingForAdmins: boolean;
  banExpireDate: string | null;
  features: GroupFeatures;
  remoteGroupId: number | null;
  clanInfo: GroupClanInfo;
};

/**
 * BFF用 - グループの設定情報
 */
type GroupFeatures = {
  maximumMembers: number;
  maximumMembershipsOfGroupType: number;
  capabilities: number;
  membershipTypes: number[];
  invitePermissionOverride: boolean;
  updateCulturePermissionOverride: boolean;
  hostGuidedGamePermissionOverride: number;
  updateBannerPermissionOverride: boolean;
  joinLevel: number;
};

/**
 * BFF用 - クラン情報
 */
type GroupClanInfo = {
  d2ClanProgressions: { [key: number]: DestinyProgression };
  clanCallsign: string;
  clanBannerData: ClanBannerData;
};

/**
 * BFF用 - 進行度
 */
type DestinyProgression = {
  progressionHash: number;
  dailyProgress: number;
  dailyLimit: number;
  weeklyProgress: number;
  weeklyLimit: number;
  currentProgress: number;
  level: number;
  levelCap: number;
  stepIndex: number;
  progressToNextLevel: number;
  nextLevelAt: number;
  currentResetCount: number | null;
  seasonResets: number;
  rewardItemStates: number[];
  rewardItemSocketOverrideStates: { [key: number]: SocketOverrideState };
};

/**
 * BFF用 - 補償ステート
 */
type SocketOverrideState = {
  rewardItemStats: {
    [key: string]: {
      statHash: number;
      value: number;
    };
  };
  itemState: number;
};

/**
 * BFF用 - クランイメージデータ
 */
type ClanBannerData = {
  decalId: number;
  decalColorId: number;
  decalBackgroundColorId: number;
  gonfalonId: number;
  gonfalonColorId: number;
  gonfalonDetailId: number;
  gonfalonDetailColorId: number;
};
