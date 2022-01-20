export const SearchBar = ({ onInputChange, onSubmitHandler }) => {
  return (
    <form
      className="searchBar -flex-r-nw "
      role="search"
      onSubmit={onSubmitHandler}
    >
      <label className="searchBar-field -rel">
        <input
          className="searchBar-input"
          type="search"
          spellCheck="false"
          name="location"
          required
          onChange={onInputChange}
        />
        <span aria-hidden="true" className="searchBar-txt -abs">
          Enter location...
        </span>
      </label>
      <button className="searchBar-submit">
        <svg viewBox="0 0 250 250" className="searchBar-icon">
          <circle cx="125" cy="125" r="100" strokeWidth="40" />
        </svg>
      </button>
    </form>
  );
};
