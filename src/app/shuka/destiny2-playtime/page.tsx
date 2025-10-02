import { getBffApiUrl } from '@/app/api/utils';
import { UserDetailInfo } from '@/app/api/shuka/destiny2-playtime/users/types';
import NotFound from './_components/not-found/not-found';
import ResultList from './_components/result-list/result-list';

/**
 * Destiny2PlayTimePageのParamsタイプ
 */
type Destiny2PlayTimePageParams = {
  searchParams: Promise<{
    userName: string;
  }>;
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
  const url = new URL(
    `/api/shuka/destiny2-playtime/users?${queryString}`,
    getBffApiUrl()
  );

  const response = await fetch(url, {
    method: 'GET',
  });

  const data = await response.json();

  return data;
};

const Destiny2PlayTimePage = async ({
  searchParams,
}: Destiny2PlayTimePageParams) => {
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
