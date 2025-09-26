import styles from './title.module.css';
import Image from 'next/image';
import titleImg from '../../../assets/imgs/raid-icon.png';

const Title = () => {
  return (
    <div className={styles.title}>
      <h1>
        <Image src={titleImg} alt="Deep Stats Crypt" width={100} height={100} />
        Deep Stats Crypt
      </h1>
      <h5>The chains of legacy must be broken.</h5>
      <h6>Shatter the legacy and uncover the hours the Guardian has burned.</h6>
    </div>
  );
};

export default Title;
