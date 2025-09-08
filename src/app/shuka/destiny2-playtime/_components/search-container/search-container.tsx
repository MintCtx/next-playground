'use client';

import { useEffect, useState } from 'react';
import { UserDetailInfo } from '../../../../api/shuka/destiny2-playtime/users/types';
import SearchForm from './search-form/search-form';

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
    <div>
      <SearchForm onSearch={onSearch} onInputChange={onInputChange} />
      {isLoading ? (
        <div>Loading...</div>
      ) : Array.isArray(userList) && userList.length > 0 ? (
        <div>画面part2</div>
      ) : null}
    </div>
  );
};

export default SearchContainer;
