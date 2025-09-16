import ResultList from '../../_components/result-list/result-list';
import SearchNotFound from '../../_components/search-not-found/search-not-found';
import { UserDetailInfo } from '@/app/api/shuka/destiny2-playtime/users/types';
import { getBffApiUrl } from '@/app/api/utils';

type Params = {
  params: {
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

const SearchPage = async ({ params }: Params) => {
  const { userName } = await params;
  const decodedUserName = decodeURIComponent(userName);

  if (!decodedUserName) {
    return <></>;
  }

  const userList = await searchByName(decodedUserName);

  if (userList.length === 0) {
    return <SearchNotFound />;
  }

  return <ResultList userList={userList}></ResultList>;
};

export default SearchPage;
