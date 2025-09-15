import styles from './result-list.module.css';
import PlatformList from '../platform-list/platform-list';
import NamePlate from './result-item/name-plate/name-plate';
import ResultItem from './result-item/result-item';
import { UserDetailInfo } from '@/app/api/shuka/destiny2-playtime/users/types';
import Link from 'next/link';

type ResultListProps = {
  userList: UserDetailInfo[];
};

/**
 * ResultItemをレンダリングする
 */
const renderResultItem = (user: UserDetailInfo) => {
  const { displayName, code, destinyMemberships: memberships } = user;

  return (
    <Link
      href={
        memberships[0] ? `../shuka/destiny2-playtime/${memberships[0].id}` : '#'
      }
    >
      <ResultItem
        key={code}
        namePlate={<NamePlate name={displayName} code={code} />}
        platformList={<PlatformList memberships={memberships} />}
      />
    </Link>
  );
};

const ResultList = ({ userList }: ResultListProps) => {
  return (
    <ul className={styles.resultList}>
      {userList.map((user) => renderResultItem(user))}
    </ul>
  );
};

export default ResultList;
