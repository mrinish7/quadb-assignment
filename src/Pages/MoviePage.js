import {GoStar} from "react-icons/go"
import"../Stylesheets/MoviePage.css"
import { useNavigate } from "react-router-dom"

const MoviePage = (data) => {
    const navigate = useNavigate()
    const renderMovies = (data) => {
        return data.map((item) =>  ( item.show.image ?   
            <div key={item.show.id} className="movie-container" >
                {item.show.image &&  <img src={item.show.image.medium} alt="movie image" />} 
                <p><GoStar /> {item.show.rating.average}</p>
                <h3>{item.show.name}</h3>
                <button className="btn-primary" onClick={() => navigate('movie summary', {state : {summary : {item}} } )} >View Summary</button>
            </div>
            : null))
    }

    return(
        <div className="movie-list">
            {data.data.length > 0 && renderMovies(data.data)}
        </div>
    )
}

export default MoviePage