import Image, { StaticImageData } from 'next/image';

type ImgButtonProps = {
  src: StaticImageData;
  alt: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
};

const ImgButton = ({ src, alt, onClick }: ImgButtonProps) => {
  return (
    <button onClick={onClick}>
      <Image src={src} alt={alt} width={25} height={25} />
    </button>
  );
};

export default ImgButton;
