import styles from './result-item.module.css';
import PlatFormList from '../platform-list/platform-list';

const ResultItem = ({ item }: { item: string }) => {
  return (
    <div>
      {/* TODO:liの・はどこに行った */}
      <li className={styles.resultItem}>
        {item} result#1234
        <PlatFormList />
      </li>
    </div>
  );
};

export default ResultItem;
