import { ReactNode } from 'react';
import styles from './result-item.module.css';

type ResultItemProps = {
  namePlate: ReactNode;
  platformList: ReactNode;
  // UserSearchResponseDetail
  // UserInfoCard[]
};

const ResultItem = ({ namePlate, platformList }: ResultItemProps) => {
  return (
    <li className={styles.resultItem}>
      {namePlate}
      {platformList}
    </li>
  );
};

export default ResultItem;
