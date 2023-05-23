import { MultiSelect } from "react-multi-select-component";

export const HeaderBar = ({
  genres,
  years,
  selectedGenres,
  setSelectedGenres,
  selectedYears,
  setSelectedYears,
}) => {
  return (
    <div>
      <div>
        <MultiSelect
          options={genres}
          value={selectedGenres}
          onChange={setSelectedGenres}
          labelledBy="Select Genres"
        />
        <MultiSelect
          options={years}
          value={selectedYears}
          onChange={setSelectedYears}
          labelledBy="Select Years"
        />
        <input type="text" />
      </div>
      <div>
        <input id="radio-movies" type="radio" />
        <label htmlFor="radio-movies">Movies</label>
        <input id="radio-books" type="radio" />
        <label htmlFor="radio-books">Books</label>
        <button>Clear Filters</button>
      </div>
    </div>
  );
};
