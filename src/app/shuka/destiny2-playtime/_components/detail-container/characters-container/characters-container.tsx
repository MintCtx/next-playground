import CharacterList from './list/character-list';
import styles from './characters-container.module.css';

const flg = true;

const CharactersContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dropDownDiv}>Characters 🔽</div>
      {flg && <CharacterList />}
    </div>
  );
};

export default CharactersContainer;
