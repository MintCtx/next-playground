import ImageButton from '../button/image-button';
import styles from './search-form.module.css';
import OperatorImg from '../../assets/imgs/operator-icon.jpg';

type SearchFormProps = {
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchForm = ({ onSearch, onInputChange }: SearchFormProps) => {
  return (
    <form
      className={styles.search}
      action="submit"
      onSubmit={(e) => onSearch(e)}
    >
      <input
        type="text"
        placeholder="Search for a Guardian..."
        onChange={(e) => onInputChange(e)}
      />
      <ImageButton src={OperatorImg} alt="operator" type="submit" />
    </form>
  );
};

export default SearchForm;
