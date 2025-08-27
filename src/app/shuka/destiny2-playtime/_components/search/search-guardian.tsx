'use client';

import styles from './search-guardian.module.css';
import OperatorImg from '../../assets/imgs/operator-icon.jpg';
import ImageButton from '@/app/shuka/destiny2-playtime/_components/button/image-button';
import { useEffect, useState } from 'react';
import {
  PostUserResponse,
  UserSearchPrefixRequest,
  UserSearchResponseDetail,
} from '../../api/api-model';

const SearchGuardian = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [value, setValue] = useState('');
  const [userList, setUserList] = useState<UserSearchResponseDetail[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const searchByName = async (): Promise<PostUserResponse> => {
    const requestBody: UserSearchPrefixRequest = {
      displayNamePrefix: value,
    };

    const response = await fetch('/shuka/destiny2-playtime/api/user', {
      method: 'POST',
      body: JSON.stringify(requestBody),
    });

    const data: Promise<PostUserResponse> = await response.json();

    return data;
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    searchByName().then((res) => {
      setUserList(res.Response.searchResults);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <div className={styles.search}>
        <form action="submit" onSubmit={(e) => onSearch(e)}>
          <input
            type="text"
            placeholder="Search for a Guardian..."
            onChange={(e) => onChange(e)}
          />
          <ImageButton src={OperatorImg} alt="operator" type="submit" />
        </form>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : Array.isArray(userList) && userList.length > 0 ? (
        <div>画面part2</div>
      ) : null}
    </div>
  );
};

export default SearchGuardian;
