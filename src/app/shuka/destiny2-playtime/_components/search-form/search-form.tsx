'use client';

import styles from './search-form.module.css';
import OperatorImg from '../../assets/imgs/operator-icon.png';
import ImageButton from '../button/image-button';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  // iPad Chrome hydrate error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get('userName') as string;
    const encodedUserName = encodeURIComponent(userName);

    router.push(`/shuka/destiny2-playtime/search/${encodedUserName}`);
  };

  return (
    <form
      className={styles.search}
      action="submit"
      onSubmit={(e) => onSearch(e)}
    >
      <div className={styles.searchBox}>
        <input
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
