import { UserProfile } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/profile/display-types';
import { getBffApiUrl } from '@/app/api/utils';
import DetailContainer from '../../_components/detail-container/detail-container';

/**
 * ユーザー情報を取得するAPI要請
 * @param type Destiny Membership Type
 * @param id Destiny Membership ID
 * @returns Promise ユーザーの詳細プロフィール
 */
const getProfile = async (type: string, id: string): Promise<UserProfile> => {
  const endPoint = `/api/shuka/destiny2-playtime/users/${type}/${id}/profile`;
  const url = new URL(endPoint, getBffApiUrl());
  const response = await fetch(url, {
    method: 'GET',
  });

  if (response.status !== 200) {
    const msg = await response.text();
    throw new Error(`${response.status} | ` + msg);
  }

  return response.json();
};

type UserDetailPageParams = {
  params: Promise<{
    id: string;
    type: string;
  }>;
};

const UserDetailPage = async ({ params }: UserDetailPageParams) => {
  const { type, id } = await params;
  const userDetailProfile = await getProfile(type, id);

  return <DetailContainer />;
};

export default UserDetailPage;
