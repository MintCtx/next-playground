import CharacterItem from '../item/character-item';
import styles from './character-list.module.css';

const tmpList = [0, 1, 2];

const CharacterList = () => {
  return (
    <div className={styles.characterList}>
      {tmpList.map((item) => (
        <CharacterItem key={item} />
      ))}
    </div>
  );
};

export default CharacterList;
