import styles from './play-info-detail.module.css';

type PlayInfoProps = {
  title: string;
  value: React.ReactNode;
};

const PlayInfoDetail = ({ title, value }: PlayInfoProps) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default PlayInfoDetail;
