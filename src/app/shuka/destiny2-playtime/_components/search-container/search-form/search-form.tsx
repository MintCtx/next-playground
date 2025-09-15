'use client';

import ImageButton from '../../button/image-button';
import styles from './search-form.module.css';
import OperatorImg from '../../../assets/imgs/operator-icon.png';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
  const router = useRouter();

  const onSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userName = formData.get('userName');
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
