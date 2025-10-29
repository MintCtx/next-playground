'use client';

import { useState } from 'react';
import { CharactersDataForDisplay } from '@/app/api/shuka/destiny2-playtime/users/[type]/[id]/profile/types/profile/display-types';
import Image from 'next/image';
import styles from './characters.module.css';
import CharacterList from './list/list';
import suppressorImg from '../../../assets/imgs/suppressor-icon.png';
import dropdownImg from '../../../assets/imgs/dropdown.png';

/**
 * CharactersコンポーネントPropsタイプ
 */
type CharactersProps = {
  characters: CharactersDataForDisplay;
};

const Characters = ({ characters }: CharactersProps) => {
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
      {isClicked && <CharacterList characters={characters} />}
    </div>
  );
};

export default Characters;
