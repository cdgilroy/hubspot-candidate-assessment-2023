import { useEffect, useState } from "react";
import { MediaCard } from "./MediaCard";

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

  const parseMedia = (media) => {
    const mediaCards = [];
    media.forEach((media) => {
      mediaCards.push(
        <MediaCard
          title={media.title}
          year={media.year}
          poster={media.poster}
          genre={media.genre}
          type={media.type}
        />
      );
    });
    return mediaCards;
  };

  return (
    <div className="media-app">
      <h1>Hello, I&apos;m a React component!</h1>
      <div className="media-container">
        {data.media ? (
          parseMedia(data.media)
        ) : (
          <p>Unable to retrieve media 😔</p>
        )}
      </div>
    </div>
  );
};
