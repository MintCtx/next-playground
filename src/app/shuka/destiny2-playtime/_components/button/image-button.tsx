import Image, { StaticImageData } from 'next/image';

type ImgButtonProps = {
  src: StaticImageData;
  alt: string;
  type: 'submit';
  width: number;
  height: number;
};

const ImageButton = ({ src, alt, type, width, height }: ImgButtonProps) => {
  return (
    <button type={type}>
      <Image src={src} alt={alt} width={width} height={height} />
    </button>
  );
};

export default ImageButton;
