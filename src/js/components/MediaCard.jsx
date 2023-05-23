export const MediaCard = (title, year, poster, genre) => {
  const parseGenres = (genres) => {
    let prettyGenres = "";
    genres.forEach((genre, index) => {
      prettyGenres += `${genre}${index !== genres.length - 1 ? ", " : ""}`;
    });
    return prettyGenres;
  };

  return (
    <div className="media-card">
      <img src={poster} alt={`Poster for ${title}.`} />
      <div>
        {title} ({year})
      </div>
      <div className="genres">Genres: {parseGenres(genre)}</div>
    </div>
  );
};
