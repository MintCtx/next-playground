import Cayde from './cayde/cayde';
import styles from './not-found.module.css';
import WarningText from './warning-text/warning-text';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <WarningText />
      <Cayde />
    </div>
  );
};

export default NotFound;
