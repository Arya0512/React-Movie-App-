import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBar({ movie, setMovie, onSearch }) {
  
  const handleChange = (event) => {
    setMovie(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (movie.trim()) {
      onSearch();
    }
  };

  return (
    <div>
      <TextField
        id="movie-search"
        label="Movie Name"
        variant="outlined"
        value={movie}
        onChange={handleChange}
      />
      <br /><br />
      <Button variant="contained" onClick={handleSubmit}>
        Search Movie
      </Button>
    </div>
  );
}
