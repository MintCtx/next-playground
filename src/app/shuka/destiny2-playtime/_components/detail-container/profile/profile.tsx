import ClanName from './clan-name/clan-name';
import styles from './profile.module.css';
import UserName from './user-name/user-name';

const Profile = () => {
  return (
    <div className={styles.container}>
      <UserName name={'Player Name'} code={1234} />
      <ClanName name={'Clan Name'} />
    </div>
  );
};

export default Profile;
