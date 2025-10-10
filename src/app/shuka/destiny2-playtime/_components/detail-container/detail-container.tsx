import styles from './detail-container.module.css';
import Characters from './characters/characters';
import Profile from './profile/profile';
import PlayInfoDetail from './play-info-detail/play-info-detail';

const DetailContainer = () => {
  return (
    <div className={styles.detailInfo}>
      <Profile />

      <PlayInfoDetail title={'Play Time'} value={'1,675h 49m'} />
      <PlayInfoDetail title={'Last Played'} value={'1 months ago..'} />

      <Characters />
    </div>
  );
};

export default DetailContainer;
