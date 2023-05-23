import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export const HeaderBar = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];

  return (
    <div>
      <div>
        <MultiSelect
          options={options}
          value={selectedGenres}
          onChange={setSelectedGenres}
          labelledBy="Select"
        />
        <MultiSelect
          options={options}
          value={selectedYears}
          onChange={setSelectedYears}
          labelledBy="Select"
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
