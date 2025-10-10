import { DestinyMembership } from '@/app/api/shuka/destiny2-playtime/users/types';
import PlatformItem from './platform-item/platform-item';
import styles from './platform-list.module.css';

type PlatformListProps = {
  memberships: DestinyMembership[];
};

const PlatformList = ({ memberships }: PlatformListProps) => {
  return (
    <div className={styles.platformList}>
      {memberships.map((membership) => (
        <PlatformItem key={membership.type} membership={membership} />
      ))}
    </div>
  );
};

export default PlatformList;
