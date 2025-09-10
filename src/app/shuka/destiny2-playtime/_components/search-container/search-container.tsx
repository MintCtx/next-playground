'use client';

import { ReactNode, useEffect, useState } from 'react';
import { UserDetailInfo } from '../../../../api/shuka/destiny2-playtime/users/types';
import SearchForm from './search-form/search-form';
import styles from './search-container.module.css';
import ResultList from '../result-list/result-list';
import Loading from '../loading/loading';

/**
 * userListがある場合、ResultListをレンダーリング
 * @param userList ユーザー検索結果リスト
 * @returns 結果リストコンポーネント
 */
const renderResultList = (
  isLoading: boolean,
  userList: UserDetailInfo[]
): ReactNode => {
  const hasResult = Array.isArray(userList) && userList.length > 0;

  if (!isLoading && hasResult) {
    return <ResultList userList={userList} />;
  } else {
    return null;
  }
};

const SearchContainer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useState('');
  const [userList, setUserList] = useState<UserDetailInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Chrome拡張機能により、Hydrate失敗の改善コード
   * TODO：React Hookを考慮
   */
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  /**
   * テキストボックスの入力イベントハンドラー
   * @param e userName
   */
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  /**
   * ユーザー名検索のAPI要請
   * @returns
   */
  const searchByName = async (): Promise<UserDetailInfo[]> => {
    const queryParams: { name: string } = {
      name: value,
    };
    const queryString: string = new URLSearchParams(queryParams).toString();

    const response = await fetch(
      `../api/shuka/destiny2-playtime/users?${queryString}`,
      {
        method: 'GET',
      }
    );

    const data = await response.json();

    return data;
  };

  /**
   * FormのSubmitイベントハンドラー
   * @param e submit
   */
  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await searchByName();
    setUserList(res);
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <SearchForm onSearch={onSearch} onInputChange={onInputChange} />
      {isLoading && <Loading />}
      {renderResultList(isLoading, userList)}
    </div>
  );
};

export default SearchContainer;
