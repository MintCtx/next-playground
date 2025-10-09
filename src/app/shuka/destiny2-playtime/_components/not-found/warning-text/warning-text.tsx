import styles from './warning-text.module.css';

const WarningText = () => {
  return (
    <div className={styles.warning}>
      <p>Not Results Found. </p>
      <p>Please try different Guardian's Name.</p>
    </div>
  );
};

export default WarningText;
