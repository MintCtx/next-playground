import Image from 'next/image';
import styles from './platform-item.module.css';
import { DestinyMembership } from '@/app/api/shuka/destiny2-playtime/users/types';
import { getBaseUrl } from '@/app/api/shuka/destiny2-playtime/config';

/**
 * イメージのベースパス
 */
const basePath = getBaseUrl();

type PlatformItemProps = {
  membership: DestinyMembership;
};

/**
 * 外部ドメインとイメージパス合成し、返還する
 * @param iconPath レスポンスから取得したプラットフォームのアイコンパス
 * @returns 外部ドメインを合わせたアイコンパス|空白
 */
const makeIconPath = (iconPath: string): string => {
  return iconPath ? `${basePath}${iconPath}` : '';
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
