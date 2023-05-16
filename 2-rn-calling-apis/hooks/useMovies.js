import React from "react";

export default function useMovies() {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");

      if (!response.ok) {
        throw new Error("Problem with the fetch");
      }

      const data = await response.json();
      setMovies(data.movies);
    } catch (error) {
      console.log(error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return { movies, isLoading };
}

// const postMovie = async () => {
//   try {
//     const response = await fetch("https://reactnative.dev/movies.json", {
//       method: "POST",
//       body: JSON.stringify({ title: "Amazing Spiderman", year: 2020 }),
//       headers: {
//         "Content-type": "application/json",
//       },
//     });
//     const json = await response.json();
//     setData(json.movies);
//   } catch (error) {
//     console.error(error);
//   }
// };
