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
  const [searchQuery, setSearchQuery] = useState("");
  const [moviesOrBooks, setMoviesOrBooks] = useState(null);

  const clearFiltersHandler = () => {
    setSelectedGenres([]);
    setSelectedYears([]);
    setSearchQuery("");
    setMoviesOrBooks(null);
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
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            moviesOrBooks={moviesOrBooks}
            setMoviesOrBooks={setMoviesOrBooks}
            clearFiltersHandler={clearFiltersHandler}
          />
          <div className="media-container">
            {data
              .filter((item) => {
                if (searchQuery === "") {
                  return item;
                } else if (
                  item.title.toLowerCase().includes(searchQuery.toLowerCase())
                ) {
                  return item;
                }
              })
              .filter((item) => {
                const selected = Array.from(
                  selectedGenres,
                  (item) => item.value
                );
                if (selected.length === 0) {
                  return item;
                } else if (
                  item.genre.some((genre) => selected.includes(genre))
                ) {
                  return item;
                }
              })
              .filter((item) => {
                const selected = Array.from(
                  selectedYears,
                  (item) => item.value
                );
                if (selected.length === 0) {
                  return item;
                } else if (selected.includes(item.year)) {
                  return item;
                }
              })
              .filter((item) => {
                if (!moviesOrBooks) {
                  console.log("no movie or book filter set");
                  return item;
                } else if (item.type === moviesOrBooks) {
                  console.log(`filter ${moviesOrBooks}`);
                  return item;
                }
              })
              .sort((a, b) => {
                if (a.title.toUpperCase() < b.title.toUpperCase()) {
                  return -1;
                }
                if (a.title.toUpperCase() > b.title.toUpperCase()) {
                  return 1;
                }
                return 0;
              })
              .map((item, index) => (
                <div key={index} className="media-card">
                  <img
                    className="poster"
                    src={item.poster}
                    alt={`Poster for ${item.title}.`}
                  />
                  <p className="title">
                    {item.title} ({item.year})
                  </p>
                  <p className="genres">Genres: {prettifyGenres(item.genre)}</p>
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
