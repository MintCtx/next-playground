import Image from 'next/image';
import styles from './platform-item.module.css';

type PlatformItemProps = {
  membership: {
    type: number;
    id: string;
    iconpath: string;
  };
};

const PlatformItem = ({ membership }: PlatformItemProps) => {
  const { iconpath } = membership;
  const basePath = process.env.NEXT_PUBLIC_BUNGIE_BASE_URL;

  return (
    <div className={styles.platformItem}>
      <Image
        src={
          iconpath
            ? basePath + iconpath
            : `${basePath}/img/theme/bungienet/icons/steamLogo.png`
        }
        alt="platform"
        height={20}
        width={20}
      />
    </div>
  );
};

export default PlatformItem;
