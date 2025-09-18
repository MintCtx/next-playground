import styles from './name-plate.module.css';

type NamePlateProps = {
  name: string;
  code: number | null;
};

const NamePlate = ({ name, code }: NamePlateProps) => {
  return (
    <>
      <div className={styles.userName}>
        {name}&#35;{code}
      </div>
    </>
  );
};

export default NamePlate;
