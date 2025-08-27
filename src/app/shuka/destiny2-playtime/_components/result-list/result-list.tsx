import ResultItem from '../result-item/result-item';
import styles from './result-list.module.css';

const tmpArr = [
  'first',
  'second',
  'third',
  'fourth',
  'second',
  'third',
  'fourth',
  // 'second', 'third', 'fourth', 'second', 'third', 'fourth','second', 'third', 'fourth',
  // 'second', 'third', 'fourth', 'second', 'third', 'fourth'
];

const ResultList = () => {
  return (
    <div className={styles.resultList}>
      <ul>
        {tmpArr.map((item, index) => (
          <ResultItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ResultList;
