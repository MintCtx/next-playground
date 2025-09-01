import styles from './detail-container.module.css';
import DetailProfile from './profile/profile';
import PlayInfo from './play-info/play-info';
import CharactersContainer from './characters-container/characters-container';

const DetailContainer = () => {
  return (
    <div className={styles.detailInfo}>
      {/* <PlatFormList /> */}
      <DetailProfile />
      <PlayInfo />
      <CharactersContainer />
    </div>
  );
};

export default DetailContainer;
