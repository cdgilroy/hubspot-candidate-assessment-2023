import React from 'react';

interface MediaCardProps {
  title: string;
  year: number;
  poster: string;
  genre: string[],
}

export const MediaCard = ({title, year, poster, genre}: MediaCardProps) => {
  const parseGenres = (genres: string[]) => {
    let prettyGenres: string = "";
    genres.forEach((genre: string, index: number) => {
      prettyGenres += `${genre}${index !== genres.length - 1 ? ", " : ""}`
    })
    return prettyGenres;
  };

  return (
  <div className="media-card">
    <img src={poster} alt={`Poster for ${title}.`} />
    <div>{title} ({year})</div>
    <div className='genres'>Genres: {parseGenres(genre)}</div>
  </div>
)}