import React, { ReactNode } from 'react';
import styles from './result-item.module.css';
import Image from 'next/image';
import scannerImg from '../../../assets/imgs/scanner-icon.png';
import Link from 'next/link';
import { DestinyMembership } from '@/app/api/shuka/destiny2-playtime/users/types';

type ResultItemProps = {
  code: number | null;
  namePlate: ReactNode;
  platformList: ReactNode;
  memberships: DestinyMembership[];
};

const ResultItem = ({
  code,
  namePlate,
  platformList,
  memberships,
}: ResultItemProps) => {
  const { id, type } = memberships[0];

  return (
    <Link
      className={styles.resultItem}
      href={`/shuka/destiny2-playtime/${type}/${id}`}
      key={code}
    >
      <div className={styles.icon}>
        <Image src={scannerImg} alt="Scan user" width={30} height={30} />
      </div>
      {namePlate}
      {platformList}
    </Link>
  );
};

export default ResultItem;
