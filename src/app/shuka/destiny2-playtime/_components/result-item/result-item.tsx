import styles from './result-item.module.css';
import PlatformList from '../platform-list/platform-list';

const ResultItem = ({ item }: { item: string }) => {
  return (
    <div>
      {/* TODO:liの・はどこに行った */}
      <li className={styles.resultItem}>
        {item} result#1234
        <PlatformList />
      </li>
    </div>
  );
};

export default ResultItem;
