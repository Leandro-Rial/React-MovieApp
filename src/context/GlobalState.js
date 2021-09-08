import React, { createContext, useEffect, useReducer } from "react";
import { types } from "../types/types";
import { MovieReducer } from "./MovieReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({
      type: types.addMovieToWatchlist,
      payload: movie,
    });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({
      type: types.removeMovieFromWatchlist,
      payload: id,
    });
  };

  const addMovieToWatched = (movie) => {
    dispatch({
      type: types.addMovieToWatched,
      payload: movie,
    });
  };

  const movieToWatchlist = (movie) => {
    dispatch({
      type: types.movieToWatchlist,
      payload: movie,
    });
  };

  const removeFromWatched = (id) => {
    dispatch({
      type: types.removeFromWatched,
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        movieToWatchlist,
        removeFromWatched
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
