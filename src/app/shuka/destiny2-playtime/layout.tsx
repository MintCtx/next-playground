import styles from './layout.module.css';
import Footer from './_components/footer/footer';
import Image from 'next/image';
import logoImg from './assets/imgs/background-logo.png';
import { Noto_Serif_KR } from 'next/font/google';

const fontStyle = Noto_Serif_KR({});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.layout} ${fontStyle.className}`}>
      <div className={styles.logoWrapper}>
        <Image src={logoImg} alt="logo" width={221} height={120} />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
