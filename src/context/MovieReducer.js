import { types } from "../types/types";

export const MovieReducer = (state = {}, action) => {
    switch (action.type) {
        case types.addMovieToWatchlist:
            
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            }
            
            case types.removeMovieFromWatchlist:
                
                return {
                    ...state,
                    watchlist: state.watchlist.filter(movie => movie.id !== action.payload),
                }
                
            case types.addMovieToWatched:
                    
                    return {
                        ...state,
                        watchlist: state.watchlist.filter(movie => movie.id !== action.payload.id),
                        watched: [action.payload, ...state.watched],
                    }
                
            case types.movieToWatchlist:
                    
                    return {
                        ...state,
                        watched: state.watched.filter(movie => movie.id !== action.payload.id),
                        watchlist: [action.payload, ...state.watchlist],
                    }
                    
            case types.removeFromWatched:
                        
                        return {
                        ...state,
                        watched: state.watched.filter(movie => movie.id !== action.payload),
                    }
                    
        default:
            return state;
    }
}