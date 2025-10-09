import Image from 'next/image';
import styles from './dropdown-menu.module.css';
import suppressorImg from '../../../../assets/imgs/suppressor-icon.png';
import dropdownImg from '../../../../assets/imgs/dropdown.png';

type DropDownMenuProps = {
  isClicked: boolean;
  handleDropdownClick: () => void;
};

const DropdownMenu = ({
  isClicked,
  handleDropdownClick,
}: DropDownMenuProps) => {
  return (
    <div className={styles.dropDownDiv} onClick={handleDropdownClick}>
      <span className={styles.span}>Characters</span>
      {isClicked ? (
        <Image src={suppressorImg} alt="suppressor" width={30} height={25} />
      ) : (
        <Image src={dropdownImg} alt="drop-down" width={15} height={15} />
      )}
    </div>
  );
};

export default DropdownMenu;
