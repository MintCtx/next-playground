import Image from 'next/image';
import styles from './clan-name.module.css';
import exImg from '../../../../assets/imgs/raid-icon.png';

type ClanNameProps = {
  name: string;
};

const ClanName = ({ name }: ClanNameProps) => {
  return (
    <div className={styles.clanInfo}>
      <Image src={exImg} alt="clan flag" width={20} height={20} />
      <p>{name}</p>
    </div>
  );
};

export default ClanName;
