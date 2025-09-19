'use client';

import Image from 'next/image';
import CharacterList from './list/character-list';
import styles from './characters-container.module.css';
import suppressorImg from '../../../assets/imgs/suppressor-icon.png';
import dropDownImg from '../../../assets/imgs/dropdown.png';
import { useState } from 'react';

const CharactersContainer = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDropdownClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropDownDiv} onClick={handleDropdownClick}>
        <span className={styles.span}>Characters</span>
        {isClicked ? (
          <Image src={suppressorImg} alt="suppressor" width={30} height={25} />
        ) : (
          <Image src={dropDownImg} alt="drop-down" width={15} height={15} />
        )}
      </div>
      {isClicked && <CharacterList />}
    </div>
  );
};

export default CharactersContainer;
