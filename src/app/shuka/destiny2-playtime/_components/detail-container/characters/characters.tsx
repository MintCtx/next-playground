'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './characters.module.css';
import CharacterList from './list/list';
import suppressorImg from '../../../assets/imgs/suppressor-icon.png';
import dropdownImg from '../../../assets/imgs/dropdown.png';

const Characters = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  /**
   * DropDownクリック
   */
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
          <Image src={dropdownImg} alt="drop-down" width={15} height={15} />
        )}
      </div>
      {isClicked && <CharacterList />}
    </div>
  );
};

export default Characters;
