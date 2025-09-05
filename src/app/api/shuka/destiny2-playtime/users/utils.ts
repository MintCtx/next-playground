import {
  DestinyMembership,
  UserDetailInfo,
  UserInfoCard,
  UserSearchResponseDetail,
} from './types';

/**
 * サーバモデルからコンポーネントモデルに変換
 * @param res UserSearchResponseDetail
 * @returns UserDetailInfoModel
 */
export const toUserDetailInfoModel = (
  res: UserSearchResponseDetail[]
): UserDetailInfo[] => {
  const changedList = res.map(
    ({
      bungieGlobalDisplayName,
      bungieGlobalDisplayNameCode,
      destinyMemberships,
    }) => {
      return {
        displayName: bungieGlobalDisplayName,
        code: bungieGlobalDisplayNameCode,
        destinyMemberships: toDestinyMemebershipModel(destinyMemberships),
      };
    }
  );

  return changedList;
};

/**
 * サーバモデルからコンポーネントモデルに変換
 * @param res UserInfoCard
 * @returns DestinyMembership
 */
const toDestinyMemebershipModel = (
  res: UserInfoCard[]
): DestinyMembership[] => {
  const changedList: DestinyMembership[] = res.map(
    ({
      iconPath,
      crossSaveOverride,
      applicableMembershipTypes,
      membershipType,
      membershipId,
    }) => {
      return {
        iconPath,
        primaryMembershipType: crossSaveOverride,
        applicableMembershipTypes,
        type: membershipType,
        id: membershipId,
      };
    }
  );
  return changedList;
};
