import Image, { StaticImageData } from 'next/image';
import styles from '../_css/search-guardian.module.css';

type ImgButtonProps = {
  src: StaticImageData;
  alt: string;
  type: 'submit';
};

const ImageButton = ({ src, alt, type }: ImgButtonProps) => {
  return (
    <button type={type}>
      <Image src={src} alt={alt} fill={true} />
    </button>
  );
};

export default ImageButton;
