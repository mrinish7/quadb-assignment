import {GoStar} from "react-icons/go"
import { useLocation, useNavigate } from "react-router-dom"
import "../Stylesheets/MovieDetails.css"

const MovieDetails = () => {

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    return(
        <div key={location.state.summary.item.show.id} className="movie-detail-container">
            <div className="movie-image-container">
            <img src={location.state.summary.item.show.image.medium} className="movie-image-container" />
            </div>
            <div className="movie-container">
            <h3 className="movie-header">{location.state.summary.item.show.name}</h3>
            <p className="movie-rating">{location.state.summary.item.show.rating.average} <GoStar /></p>
            <ul className="movie-info">
                <li>Average runtime ({location.state.summary.item.show.averageRuntime})</li>
                <li><b>Genre : </b>{location.state.summary.item.show.genres[0]} {location.state.summary.item.show.genres[1]}</li>
                <li><b>Language : </b>{location.state.summary.item.show.language}</li>
                <li><b>Status : </b>{location.state.summary.item.show.status}</li>
                <li><b>Premiered : </b>{location.state.summary.item.show.premiered}</li>
                <li><b>Schedule : </b>{location.state.summary.item.show.schedule.days} {location.state.summary.item.show.schedule.time}</li>
                <li><a href={location.state.summary.item.show.officialSite}>Official Site</a></li>
                <li><a href={location.state.summary.item.show.url}>TV Maze</a></li>
            </ul>
            <div className="movie-summary" dangerouslySetInnerHTML={{__html : location.state.summary.item.show.summary}}></div>
            </div>
        </div>
    )
} 


export default MovieDetails