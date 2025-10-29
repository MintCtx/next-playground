import Image from 'next/image';
import styles from './platform-item.module.css';
import { DestinyMembership } from '@/app/api/shuka/destiny2-playtime/users/types';
import { makeIconPath } from '../../../utils/img/utils';

type PlatformItemProps = {
  membership: DestinyMembership;
};

const PlatformItem = ({ membership: { iconPath } }: PlatformItemProps) => {
  return (
    <div className={styles.platformItem}>
      <Image
        src={makeIconPath(iconPath)}
        alt="platform"
        height={20}
        width={20}
      />
    </div>
  );
};

export default PlatformItem;
