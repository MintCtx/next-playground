import Image from 'next/image';
import styles from './profile.module.css';
import exImg from '../../../assets/imgs/raid-icon.png';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.userInfo}>
        <Image src={exImg} alt="rank" width={35} height={35} />
        <p>PlayerName &#35;1234</p>
      </div>
      <div className={styles.clanInfo}>
        <Image src={exImg} alt="clan flag" width={25} height={25} />
        <p>ClanName</p>
      </div>
    </div>
  );
};

export default Profile;
