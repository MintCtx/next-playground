import Image from 'next/image';
import Title from './title/title';
import logoImg from '../../assets/imgs/background-logo.png';
import styles from './header.module.css';
import SearchForm from './search-form/search-form';

const Header = () => {
  return (
    <>
      <div className={styles.logoWrapper}>
        <Image src={logoImg} alt="logo" width={221} height={120} />
      </div>
      <Title />
      <SearchForm />
    </>
  );
};

export default Header;
