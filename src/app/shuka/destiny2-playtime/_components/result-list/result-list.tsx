import styles from './result-list.module.css';
import PlatformList from '../platform-list/platform-list';
import NamePlate from './result-item/name-plate/name-plate';
import ResultItem from './result-item/result-item';
import { UserDetailInfo } from '@/app/api/shuka/destiny2-playtime/users/types';

type ResultListProps = {
  userList: UserDetailInfo[];
};

/**
 * ResultItemをレンダリングする
 */
const renderResultItem = (user: UserDetailInfo) => {
  const { displayName, code, destinyMemberships } = user;
  const membershipId = destinyMemberships[0].id;

  return (
    <ResultItem
      key={code ?? membershipId}
      code={code}
      namePlate={<NamePlate name={displayName} code={code} />}
      platformList={<PlatformList memberships={destinyMemberships} />}
      memberships={destinyMemberships}
    />
  );
};

const ResultList = ({ userList }: ResultListProps) => {
  const filteredUserList = userList.filter(
    (user) => user.destinyMemberships.length > 0
  );

  return (
    <ul className={styles.resultList}>
      {filteredUserList.map((user) => renderResultItem(user))}
    </ul>
  );
};

export default ResultList;
