import { UserDetailInfo } from '@/app/api/shuka/destiny2-playtime/users/types';
import styles from './page.module.css';
import { getBffApiUrl } from '../utils/getBffApiUrl';
import ResultList from './_components/result-list/result-list';

/**
 * ユーザー名検索のAPI要請
 * @returns
 */
const searchByName = async (username: string): Promise<UserDetailInfo[]> => {
  const queryParams: { name: string } = {
    name: username,
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

const Destiny2PlayTimePage = async ({
  searchParams,
}: {
  searchParams: { userName?: string };
}) => {
  const { userName } = await searchParams;
  if (!userName) {
    return <></>;
  }
  const apiResult = await searchByName(userName);
  return <ResultList userList={apiResult} />;
};

export default Destiny2PlayTimePage;
