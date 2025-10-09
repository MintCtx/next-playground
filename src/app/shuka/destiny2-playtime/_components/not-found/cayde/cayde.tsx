import styles from './cayde.module.css';
import Image from 'next/image';
import { images, lines } from './constants';

const Cayde = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const randomLinesIndex = Math.floor(Math.random() * lines.length);
  const randomLine = lines[randomLinesIndex];

  return (
    <div className={styles.cayde}>
      <Image src={randomImage} alt="not found" width={200} height={200} />
      <div className={styles.caydeLine}>
        <p>{randomLine.main}</p>
        <p>{randomLine.sub}</p>
      </div>
    </div>
  );
};

export default Cayde;
