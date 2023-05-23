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

export const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data);

  return (
    <div className="media-app">
      <HeaderBar />
      <div className="media-container">
        {data.media ? (
          data.media.map((item, index) => (
            <div key={index} className="media-card">
              <img src={item.poster} alt={`Poster for ${item.title}.`} />
              <div>
                {item.title} ({item.year})
              </div>
              <div className="genres">Genres: {prettifyGenres(item.genre)}</div>
            </div>
          ))
        ) : (
          <p>Unable to retrieve media 😔</p>
        )}
      </div>
    </div>
  );
};
