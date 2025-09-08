import styles from './title.module.css';
import Image from 'next/image';
import titleImg from '../../assets/imgs/raid-icon.png';

const Title = () => {
  return (
    <div className={styles.title}>
      <h1>
        <div>
          <Image src={titleImg} alt="Deep Stats Crypt" fill={true} />
        </div>
        Deep Stats Crypt
      </h1>
      <h5>The chains of legacy must be broken.</h5>
      <h6>Shatter the legacy and uncover the hours the Guardian has burned.</h6>
    </div>
  );
};

export default Title;
