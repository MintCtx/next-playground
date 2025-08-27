import Image from 'next/image';
import platformImg from '../../assets/imgs/raid-icon.png';
import styles from './platform-item.module.css';

const PlatformItem = () => {
  return (
    <span className={styles.platformItem}>
      <Image src={platformImg} alt="platform" height={20} width={20} />
    </span>
  );
};

export default PlatformItem;
