import styles from './play-info-detail.module.css';

type PlayInfoProps = {
  title: string;
  value: React.ReactNode;
};

const PlayInfoDetail = ({ title, value }: PlayInfoProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.column}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default PlayInfoDetail;
