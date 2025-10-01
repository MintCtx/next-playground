import { UserProfile } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/profile/display-types';
import { getBffApiUrl } from '@/app/api/utils';

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

  return (
    <div>
      画面3
      <p>last played: {userDetailProfile.user.profile.dateLastPlayed}</p>
      <p>clan: {userDetailProfile.clan.name}</p>
    </div>
  );
};

export default UserDetailPage;
