import { ReactNode } from 'react';
import styles from './result-item.module.css';
import Image from 'next/image';
import scannerImg from '../../../assets/imgs/scanner-icon.png';

type ResultItemProps = {
  namePlate: ReactNode;
  platformList: ReactNode;
};

const ResultItem = ({ namePlate, platformList }: ResultItemProps) => {
  return (
    <li className={styles.resultItem}>
      <div className={styles.icon}>
        <Image src={scannerImg} alt="Scan user" width={30} height={30} />
      </div>
      {namePlate}
      {platformList}
    </li>
  );
};

export default ResultItem;
