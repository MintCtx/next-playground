import Image from 'next/image';
import styles from './user-name.module.css';
import exImg from '../../../../assets/imgs/raid-icon.png';

type UserNameProps = {
  name: string;
  code: number;
};

const UserName = ({ name, code }: UserNameProps) => {
  return (
    <div className={styles.userInfo}>
      <Image src={exImg} alt="rank" width={25} height={25} />
      <p>
        {name}&#35;{code}
      </p>
    </div>
  );
};

export default UserName;
