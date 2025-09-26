import {
  CharactersDataForDisplay,
  ProfileDataForDisplay,
  UserProfile,
} from '@/app/api/shuka/destiny2-playtime/user/types/display-types';
import { GroupForDisplay } from '@/app/api/shuka/destiny2-playtime/user/clan/types/display-types';
import { getBffApiUrl } from '@/app/api/utils';

/**
 * ユーザー情報を取得するAPI要請
 * @param queryString
 * @returns
 */
const getProfile = async (
  queryString: string
): Promise<{
  profile: ProfileDataForDisplay;
  characters: CharactersDataForDisplay;
}> => {
  const response = await fetch(
    `${getBffApiUrl()}/api/shuka/destiny2-playtime/user?${queryString}`,
    {
      method: 'GET',
    }
  );

  return response.json();
};

/**
 * ユーザーのクラン情報を取得するAPI要請
 */
const getClanInfo = async (queryString: string): Promise<GroupForDisplay> => {
  const response = await fetch(
    `${getBffApiUrl()}/api/shuka/destiny2-playtime/user/clan?${queryString}`,
    {
      method: 'GET',
    }
  );

  return response.json();
};

type Params = {
  params: {
    id: string;
    type: string;
  };
};

const UserDetailPage = async ({ params }: Params) => {
  const { id, type } = await params;

  const searchParams = new URLSearchParams({
    id,
    type,
  }).toString();

  const [userDetail, clanInfo] = await Promise.all([
    getProfile(searchParams),
    getClanInfo(searchParams),
  ]);

  const userProfile: UserProfile = {
    profile: {
      user: userDetail.profile,
      characters: userDetail.characters,
    },
    clan: clanInfo,
  };

  return <div>画面3{userProfile.clan.name}</div>;
};

export default UserDetailPage;
