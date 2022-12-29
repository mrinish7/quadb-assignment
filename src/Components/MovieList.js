import { useState, useEffect } from "react"
import axios from'axios'
import MoviePage from "../Pages/MoviePage"
import Navbar from "../Components/Navbar";

const MovieList = () => {

    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
        .then(res => {
            setMovieData(res.data)
        })
        .catch(err => {console.log(err)})
    },[])

    const handleChange = (e) => {
        e.preventDefault();
        setMovieData(movieData.filter(item => item.show.name.includes(e.target.value)))
    }

    return(
        <div>
            <Navbar handleChange={handleChange} />
            <MoviePage data={movieData} />
        </div>
    )
}

export default MovieList