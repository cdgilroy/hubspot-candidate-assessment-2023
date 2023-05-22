import { MultiSelect } from "react-multi-select-component";
import React, { useState } from 'react';

interface HeaderBarProps {
  genres: string[];
  years: string[];
}

export const HeaderBar = ({genres, years}: HeaderBarProps) => {
  const expandOptions = (options: string[]) => {
    const newOptions: any[] = [];
    options.forEach(option => newOptions.push({label: option, value: option}))
    return newOptions;
  }

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  return (
    <div>
      <div>
        <MultiSelect options={expandOptions(genres)} value={selectedGenres} onChange={setSelectedGenres} labelledBy="Select"/>
        <MultiSelect options={expandOptions(years)} value={selectedYears} onChange={setSelectedYears} labelledBy="Select"/>
        <input type="text"/>
      </div>
      <div>
        <input type="checkbox" />
        <input type="checkbox" />
        <button>Clear Filters</button>
      </div>
    </div>
  )
}