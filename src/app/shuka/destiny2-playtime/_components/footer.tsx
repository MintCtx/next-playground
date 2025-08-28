import Link from 'next/link';
import styles from '../_css/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span>This is Shuka's mini project with Bungie API!</span>
      <Link className={styles.link} href="#top">
        return to top
      </Link>
    </div>
  );
};

export default Footer;
