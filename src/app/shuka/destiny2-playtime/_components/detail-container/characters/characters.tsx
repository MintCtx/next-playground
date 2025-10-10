import DropdownMenu from './dropdown-menu/dropdown-menu';
import styles from './characters.module.css';

const Characters = () => {
  return (
    <div className={styles.container}>
      <DropdownMenu />
    </div>
  );
};

export default Characters;
