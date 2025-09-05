import Image from 'next/image';
import styles from '../result-item.module.css';
import scannerImg from '../../../../assets/imgs/scanner-icon.png';

type NamePlate = {
  name: string;
  code: number;
};

const NamePlate = ({ name, code }: NamePlate) => {
  return (
    <>
      <div className={styles.icon}>
        <Image src={scannerImg} alt="Scan user" width={30} height={30} />
      </div>
      <div className={styles.userName}>
        {name} &#35;{code}
      </div>
    </>
  );
};

export default NamePlate;
