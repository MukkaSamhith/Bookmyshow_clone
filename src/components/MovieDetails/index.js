import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const MovieDetails = (props)=>{
    const {tes,ons} = props
    const {movieName,id,movieCoverpage} = tes

    const onDelete=()=>{
        ons(id)
    }

    return(
    <div>
        <button type='button' onClick={onDelete}>x</button>
        <Link to={`/hollywood/${id}`} className='nav-link'>
            <div className='card'>
                <img src={movieCoverpage} className="logo" alt="sam"/>
                <h3>{movieName}</h3>
            </div>
        </Link>
    </div>
    )
}

export default MovieDetails