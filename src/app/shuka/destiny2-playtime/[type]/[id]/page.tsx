import { UserProfile } from '@/app/api/shuka/destiny2-playtime/user/types/profile/display-types';
import { getBffApiUrl } from '@/app/api/utils';

/**
 * ユーザー情報を取得するAPI要請
 * @param queryString
 * @returns
 */
const getProfile = async (queryString: string): Promise<UserProfile> => {
  const response = await fetch(
    `${getBffApiUrl()}/api/shuka/destiny2-playtime/user?${queryString}`,
    {
      method: 'GET',
    }
  );

  return response.json();
};

type UserDetailPageParams = {
  params: Promise<{
    id: string;
    type: string;
  }>;
};

const UserDetailPage = async ({ params }: UserDetailPageParams) => {
  const { id, type } = await params;

  const searchParams = new URLSearchParams({
    id,
    type,
  }).toString();

  const userDetailProfile = await getProfile(searchParams);

  return (
    <div>
      画面3
      <p>last played: {userDetailProfile.user.profile.dateLastPlayed}</p>
      <p>clan: {userDetailProfile.clan.name}</p>
    </div>
  );
};

export default UserDetailPage;
