import styles from './layout.module.css';
import Header from './_components/header/header';
import Footer from './_components/footer/footer';
import { Noto_Serif_KR } from 'next/font/google';

const fontStyle = Noto_Serif_KR({});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.layout} ${fontStyle.className}`}>
      <Header />
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
