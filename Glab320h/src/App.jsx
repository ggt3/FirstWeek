import { useState, useEffect } from "react";
import "./App.css";

// Import our components
import MovieDisplay from "./components/MovieDisplay.jsx";
import Form from "./components/Form.jsx";

export default function App() {
  const API_KEY = "114f61c";
  const base_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;
  const [movieInfo, setMovieInfo] = useState(null);

  // This will run on the first render but not on subsquent renders bc of empty [] - similar to vanilla js idea of initialLoad function, can write multiple useEffects so that if one breaks, it doesnt break other stuff
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  async function getMovie(title) {
    try {
      const response = await fetch(`${base_URL}t=${title}`);
      const data = await response.json();
      console.log(data);
      setMovieInfo(data); //why pass the entire json? because we want all the info incase we need it
    } catch {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movieInfo={movieInfo} />
    </div>
  );
}
