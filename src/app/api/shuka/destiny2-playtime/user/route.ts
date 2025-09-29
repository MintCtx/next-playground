import { NextRequest, NextResponse } from 'next/server';
import { getRequestBungieApi } from '../utils';
import { DestinyProfileResponse } from './types/profile/bff-types';
import {
  toCharactersDataForDisplay,
  toProfileDataForDisplay,
} from './types/profile/utils';
import { UserProfile, UserProfileDetail } from './types/profile/display-types';
import { DestinyGroupResponse } from './types/clan/bff-types';
import { GroupForDisplay } from './types/clan/display-types';
import { toGroupForDisplay } from './types/clan/utils';

/**
 * 取得する情報タイプ
 * Destiny.DestinyComponentType
 * 100: Profile
 * 200: Characters
 */
const COMPONENT_TYPES = [100, 200];

/**
 * ユーザーの詳細情報を取得
 * @param type Destiny Membership type
 * @param id Destiny Membership id
 * @returns Promise ユーザー詳細情報
 */
const getProfile = async (
  type: string,
  id: string
): Promise<UserProfileDetail> => {
  const params = new URLSearchParams({
    components: COMPONENT_TYPES.join(','),
  });

  const profileEndPoint = `/Platform/Destiny2/${type}/Profile/${id}?${params.toString()}`;
  const response = await getRequestBungieApi(profileEndPoint);

  const result = (await response.json()) as DestinyProfileResponse;
  const userDetail: UserProfileDetail = {
    profile: toProfileDataForDisplay(result.Response.profile.data),
    characters: toCharactersDataForDisplay(result.Response.characters.data),
  };

  return userDetail;
};

/**
 * ユーザーのClan情報を取得
 * @param type Destiny Membership type
 * @param id Destiny Membership id
 * @returns Promise ユーザーのClan情報
 */
const getClanInfo = async (
  type: string,
  id: string
): Promise<GroupForDisplay> => {
  const clanEndPoint = `/Platform/GroupV2/User/${type}/${id}/0/1`;
  const response = await getRequestBungieApi(clanEndPoint);
  const result = (await response.json()) as DestinyGroupResponse;

  // clan 未所属の場合
  if (!Array.isArray(result.Response.results) || !result.Response.results[0]) {
    const init: GroupForDisplay = { name: '', avatarPath: '', bannerPath: '' };
    return init;
  }

  const groupForDisplay: GroupForDisplay = toGroupForDisplay(
    result.Response.results[0].group
  );

  return groupForDisplay;
};

/**
 * 選択したユーザーの詳細情報取得
 * @param req
 * @returns ユーザー情報とClan情報
 */
export const GET = async (
  req: NextRequest
): Promise<NextResponse<UserProfile>> => {
  const { searchParams } = req.nextUrl;
  const type = searchParams.get('type');
  const id = searchParams.get('id');

  if (!type || !id) {
    return new NextResponse('Missing type or id in searchParams', {
      status: 400,
    });
  }

  const [userDetail, clanInfo] = await Promise.all([
    getProfile(type, id),
    getClanInfo(type, id),
  ]);

  const userProfile: UserProfile = {
    user: {
      profile: userDetail.profile,
      characters: userDetail.characters,
    },
    clan: clanInfo,
  };

  return NextResponse.json(userProfile);
};
