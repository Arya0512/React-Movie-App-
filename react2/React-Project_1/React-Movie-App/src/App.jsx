import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import Movie from './Movie'
import MovieDetailPage from './MovieDtailePage'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movie/>}/>
        <Route path="/movie/:id" element={<MovieDetailPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
