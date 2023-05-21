import { useEffect, useState } from "react";

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

  return <h1>Hello, I&apos;m a React component!</h1>;
};
