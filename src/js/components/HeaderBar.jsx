import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";

export const HeaderBar = (genres, years) => {
  const expandOptions = (options) => {
    const newOptions = [];
    options.forEach((option) =>
      newOptions.push({ label: option, value: option })
    );
    return newOptions;
  };

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  return (
    <div>
      <div>
        <MultiSelect
          options={expandOptions(genres)}
          value={selectedGenres}
          onChange={setSelectedGenres}
          labelledBy="Select"
        />
        <MultiSelect
          options={expandOptions(years)}
          value={selectedYears}
          onChange={setSelectedYears}
          labelledBy="Select"
        />
        <input type="text" />
      </div>
      <div>
        <input id="radio-movies" type="radio" />
        <label htmlFor="radio-movies">Movies</label>
        <input type="checkbox" />
        <button>Clear Filters</button>
      </div>
    </div>
  );
};
