import styles from './name-plate.module.css';

type NamePlate = {
  name: string;
  code: number | null;
};

const NamePlate = ({ name, code }: NamePlate) => {
  return (
    <>
      <div className={styles.userName}>
        {name} &#35;{code}
      </div>
    </>
  );
};

export default NamePlate;
