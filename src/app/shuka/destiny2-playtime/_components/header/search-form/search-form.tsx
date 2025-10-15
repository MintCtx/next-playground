'use client';

import styles from './search-form.module.css';
import OperatorImg from '../../../assets/imgs/operator-icon.png';
import ImageButton from '../../button/image-button';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getManifest } from '../../../lib/getManifest';

const SearchForm = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // iPad Chrome hydrate error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // localStorageからDefinitionを取得
  useEffect(() => {
    const getInitialManifest = async () => {
      const data = await getManifest();

      // 最新バージョンの場合、localStorageに保存しない
      if (!data || data.isLastestVersion === true) {
        return;
      }

      // 最新バージョンではない場合、最新バージョンのDefinitionをlocalStorageに保存
      localStorage.setItem('Definition', JSON.stringify(data));
    };

    getInitialManifest();
  }, []);

  if (!isMounted) {
    return null;
  }

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get('userName') as string;

    router.push(`/shuka/destiny2-playtime?userName=${userName}`);
  };

  return (
    <form
      className={styles.search}
      action="submit"
      onSubmit={(e) => onSearch(e)}
    >
      <div className={styles.searchBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search for a Guardian..."
          name="userName"
        />
        <ImageButton
          src={OperatorImg}
          alt="operator"
          type="submit"
          width={60}
          height={50}
        />
      </div>
    </form>
  );
};

export default SearchForm;
