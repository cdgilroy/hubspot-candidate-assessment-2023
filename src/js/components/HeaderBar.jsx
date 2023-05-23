import { MultiSelect } from "react-multi-select-component";

export const HeaderBar = ({
  genres,
  years,
  selectedGenres,
  setSelectedGenres,
  selectedYears,
  setSelectedYears,
  searchQuery,
  setSearchQuery,
  moviesOrBooks,
  setMoviesOrBooks,
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
          hasSelectAll={false}
        />
        <MultiSelect
          className="multi-select"
          options={years}
          value={selectedYears}
          onChange={setSelectedYears}
          labelledBy="Select Years"
          hasSelectAll={false}
        />
        <input
          className="search-field"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="bottom-row">
        <input
          id="radio-movies"
          type="radio"
          name="movies-or-books"
          value="movie"
          onChange={() => setMoviesOrBooks("movie")}
          checked={moviesOrBooks === "movie"}
        />
        <label htmlFor="radio-movies">Movies</label>
        <input
          id="radio-books"
          type="radio"
          name="movies-or-books"
          value="book"
          onChange={() => setMoviesOrBooks("book")}
          checked={moviesOrBooks === "book"}
        />
        <label htmlFor="radio-books">Books</label>
        <button className="clear-button" onClick={clearFiltersHandler}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};
