import "./App.css";
import { Movieinput } from "./Components/Movieinput";
import { MovieList } from "./Components/MovieList";

function App() {
  return (
    <div className="container">
      <Movieinput />
      <MovieList />
    </div>
  );
}

export default App;
