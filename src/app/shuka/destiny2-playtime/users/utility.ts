import {
  DestinyMembership,
  UserDetailInfoModel,
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
): UserDetailInfoModel[] => {
  const changedList = res.map((user) => {
    return {
      displayName: user.bungieGlobalDisplayName,
      code: user.bungieGlobalDisplayNameCode,
      bungieMembershipId: user.bungieNetMembershipId,
      destinyMemberships: toDestinyMemebershipModel(user.destinyMemberships),
    };
  });

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
  const changedList: DestinyMembership[] = res.map((user) => {
    return {
      type: user.membershipType,
      id: user.membershipId,
      iconPath: user.iconPath,
    };
  });
  return changedList;
};
