'use client';

import styles from '../_css/search-guardian.module.css';
import OperatorImg from '../assets/imgs/operator-icon.jpg';
import ImageButton from '@/app/shuka/destiny2-playtime/_components/image-button';
import { useEffect, useState } from 'react';
import DetailInfo from './detail-info/detail-info';

const SearchGuardian = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div className={styles.search}>
        <form action="submit" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search for a Guardian..." />
          <ImageButton src={OperatorImg} alt="operator" type="submit" />
        </form>
      </div>
      <DetailInfo />
    </div>
  );
};

export default SearchGuardian;
