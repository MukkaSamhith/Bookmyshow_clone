import { Component } from "react";
import {Link} from 'react-router-dom'
import React from 'react'
import ReactPlayer from 'react-player'

class Details extends Component{
    state = {x:{}}

    componentDidMount(){
        this.getData1()
    }

    getData1=async()=>{
        const {tes1} = this.props
        const response = await fetch(`http://localhost:3005/tollywood/${tes1}`)
        const data = await response.json()
        const y ={
            id:data.id,
            movieName:data.movie_name,
            movieUrl:data.movie_url,
            directorName:data.director_name,
            producerName:data.producer_name,
            actors:data.actors,
            budget:data.budget
        }
        this.setState({x:y})
    }

    render(){
        const {x} = this.state
        const {movieUrl,id,movieName,directorName,producerName,actors,budget} = x
    return(
        <div className="sam">
            <div className="detail-page">
                <ReactPlayer url={movieUrl} />
            </div>
            <h1 className="sam1">{movieName}</h1>
            <p>Director Name: {directorName}</p>
            <p>Producer Name: {producerName}</p>
            <p>Actors: {actors}</p>
            <p>Budget: {budget} Cr</p>
            <hr className="sam2"/>
            <Link to ={`/hollywood/seats/${id}`}>
            <button type="button" className="btn21">Book Now</button>
            </Link>
        </div>
    )
    }
}

export default Details