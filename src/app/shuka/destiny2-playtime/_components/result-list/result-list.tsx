import ResultItem from './result-item/result-item';
import styles from './result-list.module.css';

const tmpArr = [
  {
    name: 'mock1',
    code: 123,
    memberships: [
      { id: '1', type: 1, iconpath: '/img/theme/bungienet/icons/psnLogo.png' },
      {
        id: '2',
        type: 2,
        iconpath: '/img/theme/bungienet/icons/xboxLiveLogo.png',
      },
      { id: '3', type: 3, iconpath: '' },
    ],
  },
  {
    name: 'mock2',
    code: 2879,
    memberships: [{ id: '1', type: 1, iconpath: '' }],
  },
  {
    name: 'mock3',
    code: 456,
    memberships: [
      { id: '1', type: 1, iconpath: '' },
      { id: '3', type: 3, iconpath: '/img/theme/bungienet/icons/psnLogo.png' },
    ],
  },
];

type ResultListProps = {
  userList: Array<{
    name: string;
    code: number;
    memberships: Array<{ id: string; type: number; iconpath: string }>;
  }>;
  // UserSearchResponseDetail[], memberships: UserInfoCard
};

const ResultList = ({ userList }: ResultListProps) => {
  return (
    <div className={styles.resultList}>
      <ul>
        {tmpArr.map((user) => (
          <ResultItem key={user.code} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
