import { MultiSelect } from "react-multi-select-component";

export const HeaderBar = ({
  genres,
  years,
  selectedGenres,
  setSelectedGenres,
  selectedYears,
  setSelectedYears,
  clearFiltersHandler,
}) => {
  return (
    <div className="header-bar">
      <div className="top-row">
        <MultiSelect
          className="multi-select"
          options={genres}
          value={selectedGenres}
          onChange={setSelectedGenres}
          labelledBy="Select Genres"
        />
        <MultiSelect
          className="multi-select"
          options={years}
          value={selectedYears}
          onChange={setSelectedYears}
          labelledBy="Select Years"
        />
        <input className="search-field" type="text" placeholder="Search..." />
      </div>
      <div className="bottom-row">
        <input id="radio-movies" type="radio" />
        <label htmlFor="radio-movies">Movies</label>
        <input id="radio-books" type="radio" />
        <label htmlFor="radio-books">Books</label>
        <button className="clear-button" onClick={clearFiltersHandler}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};
