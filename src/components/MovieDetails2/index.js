import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const MovieDetails2 = (props)=>{
    const {tes} = props
    const {movieName,id,movieCoverpage} = tes
    return(
        <Link to={`/tollywood/${id}`} className='nav-link'>
            <div className='card'>
                <img src={movieCoverpage} className="logo" alt="sam"/>
                <h3>{movieName}</h3>
            </div>
        </Link>
    )
}

export default MovieDetails2