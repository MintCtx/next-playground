import { getBffApiUrl } from '@/app/api/utils';
import { UserDetailInfo } from '@/app/api/shuka/destiny2-playtime/users/types';
import NotFound from './_components/not-found/not-found';
import ResultList from './_components/result-list/result-list';

type Params = {
  searchParams: {
    userName: string;
  };
};

/**
 * ユーザー検索 BFF用API要請
 * @param userName
 * @returns
 */
const searchByName = async (userName: string): Promise<UserDetailInfo[]> => {
  const queryParams: { name: string } = {
    name: userName,
  };
  const queryString: string = new URLSearchParams(queryParams).toString();

  const response = await fetch(
    `${getBffApiUrl()}/api/shuka/destiny2-playtime/users?${queryString}`,
    {
      method: 'GET',
    }
  );

  const data = await response.json();

  return data;
};

const Destiny2PlayTimePage = async ({ searchParams }: Params) => {
  const { userName } = await searchParams;

  if (!userName) {
    return <></>;
  }

  const userList = await searchByName(userName);

  if (userList.length === 0) {
    return <NotFound />;
  }

  return <ResultList userList={userList}></ResultList>;
};

export default Destiny2PlayTimePage;
