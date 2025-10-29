import ClanName from './clan-name/clan-name';
import styles from './profile.module.css';
import UserName from './user-name/user-name';
import { ProfileDataForDisplay } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/profile/display-types';
import { GroupForDisplay } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/clan/display-types';

/**
 * ProfileコンポーネントPropsタイプ
 */
type ProfileProps = {
  profile: ProfileDataForDisplay;
  clan: GroupForDisplay;
  definition: any;
};

const Profile = ({ profile, clan, definition }: ProfileProps) => {
  return (
    <div className={styles.container}>
      <UserName profile={profile} definition={definition} />
      <ClanName clan={clan} />
    </div>
  );
};

export default Profile;
