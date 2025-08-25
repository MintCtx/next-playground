'use client';

import ImgButton from '@/app/shuka/destiny2-playtime/_components/img-button';
import styles from '../destiny-styles.module.css';
import OperatorImg from '../assets/imgs/operator-icon.jpg';

const SearchGuardian = () => {
  return (
    <div className={styles.search}>
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search for a Guardian..." />
        <ImgButton
          src={OperatorImg}
          alt="operator"
          onClick={(e) => e.preventDefault()}
        />
      </form>
    </div>
  );
};

export default SearchGuardian;
