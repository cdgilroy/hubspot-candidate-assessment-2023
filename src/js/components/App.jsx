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

const parseGenres = (media) => {
  const allGenres = [];
  media.map((item) => {
    return item.genre.map((genre) => {
      allGenres.push(genre);
    });
  });

  const uniqueGenres = Array.from(new Set(allGenres));

  return uniqueGenres.map((item) => ({ label: item, value: item }));
};

const years = [{ label: "1981", value: "1981" }];
const parseYears = (media) => {
  const allYears = media.map((item) => item.year);

  const uniqueYears = Array.from(new Set(allYears));

  return uniqueYears.map((item) => ({ label: item, value: item }));
};

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
        setData(data.media);
      });
  }, []);

  return (
    <div className="media-app">
      {data.length > 0 ? (
        <>
          <HeaderBar
            genres={parseGenres(data) || genres}
            years={parseYears(data) || years}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            selectedYears={selectedYears}
            setSelectedYears={setSelectedYears}
            clearFiltersHandler={clearFiltersHandler}
          />
          <div className="media-container">
            {data.map((item, index) => (
              <div key={index} className="media-card">
                <img src={item.poster} alt={`Poster for ${item.title}.`} />
                <div>
                  {item.title} ({item.year})
                </div>
                <div className="genres">
                  Genres: {prettifyGenres(item.genre)}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Unable to retrieve media 😔</p>
      )}
    </div>
  );
};
