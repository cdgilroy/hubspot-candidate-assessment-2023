import { useEffect, useState } from "react";
import { HeaderBar } from "./HeaderBar";

const prettifyGenres = (genres) => {
  let prettyGenres = "";
  genres.forEach(
    (genre, index) =>
      (prettyGenres += `${genre}${index !== genres.length - 1 ? ", " : ""}`)
  );
  return prettyGenres;
};

const genres = [
  { label: "Action", value: "action" },
  { label: "Adventure", value: "adventure" },
];
const years = [{ label: "1981", value: "1981" }];

export const App = () => {
  const [data, setData] = useState({});
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const clearFiltersHandler = () => {
    setSelectedGenres([]);
    setSelectedYears([]);
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="media-app">
      <HeaderBar
        genres={genres}
        years={years}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
        clearFiltersHandler={clearFiltersHandler}
      />
      {data.media ? (
        <div className="media-container">
          {data.media.map((item, index) => (
            <div key={index} className="media-card">
              <img src={item.poster} alt={`Poster for ${item.title}.`} />
              <div>
                {item.title} ({item.year})
              </div>
              <div className="genres">Genres: {prettifyGenres(item.genre)}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>Unable to retrieve media 😔</p>
      )}
    </div>
  );
};
