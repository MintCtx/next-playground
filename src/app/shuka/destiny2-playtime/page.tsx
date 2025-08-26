import styles from './_css/page.module.css';
import SearchGuardian from './_components/search-guardian';
import Image from 'next/image';
import titleImg from './assets/imgs/raid-icon.png';

const Destiny2PlayTime = () => {
  return (
    <div className={styles.body}>
      <div className={styles.title}>
        <h1>
          <Image src={titleImg} alt="Deep Stats Crypt" width={50} height={50} />
          Deep Stats Crypt
        </h1>
        <h5>The chains of legacy must be broken.</h5>
        <h6>
          Shatter the legacy and uncover the hours the Guardian has burned.
        </h6>
      </div>
      <SearchGuardian />
    </div>
  );
};

export default Destiny2PlayTime;
