import styles from './layout.module.css';
import Footer from './_components/footer/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
