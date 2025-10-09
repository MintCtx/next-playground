import styles from './detail-container.module.css';
import CharactersContainer from './characters-container/characters-container';
import Profile from './profile/profile';
import PlayInfoDetail from './play-info-detail/play-info-detail';

const DetailContainer = () => {
  return (
    <div className={styles.detailInfo}>
      <Profile />

      <>
        <PlayInfoDetail title={'Play Time'} value={'1,675h 49m'} />
        <PlayInfoDetail title={'Last Played'} value={'1 months ago..'} />
      </>

      <CharactersContainer />
    </div>
  );
};

export default DetailContainer;
