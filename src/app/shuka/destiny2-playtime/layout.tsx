import styles from './layout.module.css';
import Footer from './_components/footer/footer';
import Image from 'next/image';
import logoImg from './assets/imgs/background-logo.png';
import { Noto_Serif_KR } from 'next/font/google';
import Title from './_components/title/title';
import SearchForm from './_components/search-container/search-form/search-form';

const fontStyle = Noto_Serif_KR({});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.layout} ${fontStyle.className}`}>
      {/* TODO: 別コンポーネント */}
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <Image src={logoImg} alt="logo" width={221} height={120} />
        </div>
        <Title />
        <SearchForm />
      </div>
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
