import styles from './page.module.css';
import SearchContainer from './_components/search-container/search-container';
import Title from './_components/title/title';

const Destiny2PlayTimePage = () => {
  return (
    <div className={styles.body}>
      <Title />
      <SearchContainer />
    </div>
  );
};

export default Destiny2PlayTimePage;
