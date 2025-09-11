import Image, { StaticImageData } from 'next/image';

type ImgButtonProps = {
  src: StaticImageData;
  alt: string;
  type: 'submit';
  sizes: string;
};

const ImageButton = ({ src, alt, type, sizes }: ImgButtonProps) => {
  return (
    <button type={type}>
      <Image src={src} alt={alt} fill={true} sizes={sizes} />
    </button>
  );
};

export default ImageButton;
