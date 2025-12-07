import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../MovieSlice";

export const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Movie List</h1>
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <span className="movie-name">{movie.name}</span>
          <button
            className="delete-btn"
            onClick={() => dispatch(removeMovie(movie.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
