import css from "../SearchBox/SearchBox.module.css";

export const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.content}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};
