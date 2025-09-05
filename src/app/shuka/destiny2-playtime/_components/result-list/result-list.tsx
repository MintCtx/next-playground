import styles from './result-list.module.css';
import PlatformList from '../platform-list/platform-list';
import NamePlate from './result-item/name-plate/name-plate';
import ResultItem from './result-item/result-item';

type ResultListProps = {
  userList: Array<any>;
};

const ResultList = ({ userList }: ResultListProps) => {
  const renderResultItem = (user: any) => {
    const { name, code, memberships } = user;
    return (
      <ResultItem
        key={code}
        namePlate={<NamePlate name={name} code={code} />}
        platformList={<PlatformList memberships={memberships} />}
      />
    );
  };

  return (
    <ul className={styles.resultList}>
      {userList.map((user) => renderResultItem(user))}
    </ul>
  );
};

export default ResultList;
