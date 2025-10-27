'use client';

import styles from './error.module.css';

const Error = ({ error }: { error: Error }) => {
  return (
    <div className={styles.container}>
      <p className={styles.main}>
        Something went wrong... Please try again later.
      </p>
      <p className={styles.sub}>{error && error.message} </p>
    </div>
  );
};

export default Error;
