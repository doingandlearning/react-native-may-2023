import React from "react";
import useMovies from "../hooks/useMovies";

export const MovieContext = React.createContext();

export function MovieProvider({ children }) {
  const { movies, isLoading } = useMovies();
  return (
    <MovieContext.Provider value={{ movies, isLoading }}>
      {children}
    </MovieContext.Provider>
  );
}
