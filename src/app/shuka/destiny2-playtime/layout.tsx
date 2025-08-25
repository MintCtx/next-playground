import styles from './destiny-styles.module.css';
import Footer from './_components/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.layout}>
            {children}
            <Footer />
        </div>
    )
}

export default Layout;