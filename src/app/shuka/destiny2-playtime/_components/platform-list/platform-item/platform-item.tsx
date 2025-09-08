import Image from 'next/image';
import styles from './platform-item.module.css';
import { DestinyMembership } from '@/app/api/shuka/destiny2-playtime/users/types';

/**
 * イメージのベースパス
 */
const basePath = process.env.NEXT_PUBLIC_BUNGIE_BASE_URL;

type PlatformItemProps = {
  membership: DestinyMembership;
};

const PlatformItem = ({ membership }: PlatformItemProps) => {
  const { iconPath } = membership;

  return (
    <div className={styles.platformItem}>
      <Image
        src={iconPath ? `${basePath}${iconPath}` : ''}
        alt="platform"
        height={20}
        width={20}
      />
    </div>
  );
};

export default PlatformItem;
