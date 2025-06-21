import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt={movie.Title}
        height="300"
        image={movie.Poster}
      />
      <CardContent>
        <Typography variant="h6">{movie.Title}</Typography>
        <Typography variant="body2">Year: {movie.Year}</Typography>
      </CardContent>
    </Card>
    </Link>
  );
}
