import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../MovieSlice";

export const Movieinput = () => {
  const [newMovie, setNewMovie] = useState("");
  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie.trim()) {
      dispatch(addMovie(newMovie.trim()));
      setNewMovie("");
    }
  };

  return (
    <div className="input-row">
      <input
        type="text"
        placeholder="Enter movie name..."
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddMovie()}
      />
      <button className="add-btn" onClick={handleAddMovie}>
        Add Movie
      </button>
    </div>
  );
};
