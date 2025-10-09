'use client';

import { useState } from 'react';
import CharacterList from './list/character-list';
import DropdownMenu from './dropdown-menu/dropdown-menu';
import styles from './characters-container.module.css';

const CharactersContainer = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  /**
   * DropDownクリック
   */
  const handleDropdownClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <DropdownMenu
        isClicked={isClicked}
        handleDropdownClick={handleDropdownClick}
      />
      {isClicked && <CharacterList />}
    </div>
  );
};

export default CharactersContainer;
