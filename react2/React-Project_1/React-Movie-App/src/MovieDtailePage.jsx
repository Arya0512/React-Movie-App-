import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error ,setError]=useState(null);
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
  const fetchMovie = async () => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}&plot=full`);
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data);
        setError(null);
      } else {
        setMovie(null);
        setError(data.Error || "Movie details not found");
      }
    } catch (err) {
      setMovie(null);
      setError("Something went wrong while fetching movie details.");
    }
  };

  fetchMovie();
}, [id]);
    if (error) {
  return <p style={{ color: 'red', fontSize: '18px' }}>❌ {error}</p>;
    }


  if (!movie) return <p>Loading...</p>;

  return (
    <>
    <div style={{ padding: '30px', display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: '300px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.3)' }}
      />

      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>{movie.Title}</h1>
        <p><strong>Released:</strong> {movie.Released}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
        <p style={{ marginTop: '20px', lineHeight: '1.6' }}>{movie.Plot}</p>
      </div>
      </div>
        <button onClick={() => navigate("/")}
        style={{marginBottom: "20px",padding: "8px 16px",backgroundColor: "#1976d2",color: "#fff",border: "none",borderRadius: "4px",cursor: "pointer", marginLeft:"40px"}}
        >
        ← Go Back to Search
        </button>

  </>
  );
}
