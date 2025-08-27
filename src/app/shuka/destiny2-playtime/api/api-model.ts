export type UserSearchPrefixRequest = {
  displayNamePrefix: string;
};

export interface PostUserResponse {
  Response: UserSearchResponse;
}

export interface UserSearchResponse {
  searchResults: UserSearchResponseDetail[];
}

export interface UserSearchResponseDetail {
  bungieGlobalDisplayName: string;
  bungieGlobalDisplayNameCode?: number;
  bungieNetMembershipId?: number;
  destinyMemberships: UserInfoCard[];
}

interface UserInfoCard {
  membershipType: string;
  membershipId: string;
  iconPath: string;
}
