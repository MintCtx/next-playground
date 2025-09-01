import styles from './play-info.module.css';

const PlayInfo = () => {
  return (
    <div className={styles.playInfo}>
      <div className={styles.playInfoDetail}>
        <p className={styles.column}>PlayTime</p>
        <p className={styles.value}>1670h 40m</p>
        <p className={styles.column}>Last Played</p>
        <p className={styles.value}>1 minutes ago...</p>
      </div>
      <div className={styles.playInfoDetail}>for more info..</div>
    </div>
  );
};

export default PlayInfo;
