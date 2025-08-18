type ButtonProps = {
    name: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
};

const Button = ({ name, onClick }: ButtonProps) => {
    return <button onClick={onClick}>{name}</button>
};

export default Button;