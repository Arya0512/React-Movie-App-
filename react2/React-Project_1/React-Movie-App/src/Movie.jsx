import { useState } from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

export default function Movie() {
  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]); 

  const API_KEY = import.meta.env.VITE_API_KEY;
 

 const searchMovies = async () => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`);
    const jsonResponse = await response.json();
    setMovieList(jsonResponse.Search || []);
  } catch (error) {
    console.error("API fetch failed:", error);
    setMovieList([]); 
  }
};


  return (
    <>
      <SearchBar movie={movieName} setMovie={setMovieName} onSearch={searchMovies} />
      <br /><br />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {movieList.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}
