import styles from './result-item.module.css';
import PlatformList from '../../platform-list/platform-list';
import Image from 'next/image';
import scannerImg from '../../../assets/imgs/scanner-icon.jpg';

type ResultItemProps = {
  user: {
    name: string;
    code: number;
    memberships: Array<{ id: string; type: number; iconpath: string }>;
  };
  // UserSearchResponseDetail
  // UserInfoCard[]
};

const ResultItem = ({ user }: ResultItemProps) => {
  const { name, code, memberships } = user;

  return (
    <li className={styles.resultItem}>
      <div className={styles.icon}>
        <Image src={scannerImg} alt="Scan user" width={30} height={30} />
      </div>
      <div className={styles.userName}>
        {name} &#35;{code}
      </div>
      <PlatformList memberships={memberships} />
    </li>
  );
};

export default ResultItem;
