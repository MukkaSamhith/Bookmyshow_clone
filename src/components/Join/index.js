import { Component } from 'react';
import MovieDetails from '../MovieDetails/index.js';
import Header from '../Header/index.js';
import './index.css';

class HollyBolly extends Component{

  state = {p:[],is:true,count:0,search:''}

  componentDidMount(){
    this.getData()
  }

  getData = async()=>{
    const response = await fetch("http://localhost:3005/hollywood/")
    const data = await response.json()
    const x = data.map((each)=>({
      movieName:each.movie_name,
      id:each.movie_id,
      directorName:each.director_name,
      producerName:each.producer_name,
      actors:each.actors,
      budget:each.budget,
      movieUrl:each.movie_url,
      movieCoverpage:each.movie_coverpage,
    }))
    const response13 = await fetch("http://localhost:3005/bollywood/")
    const data12 = await response13.json()
    const x1 = data12.map((each)=>({
      movieName:each.movie_name,
      id:each.movie_id,
      directorName:each.director_name,
      producerName:each.producer_name,
      actors:each.actors,
      budget:each.budget,
      movieUrl:each.movie_url,
      movieCoverpage:each.movie_coverpage,
    }))
    console.log(x)
    console.log(x1)
    const movieNameSetX = new Set(x.map((item) => item.movieName));
  const movieNameSetX1 = new Set(x1.map((item) => item.movieName));

// Find common movie names
  const commonMovieNames = [...movieNameSetX].filter((name) => movieNameSetX1.has(name));
  const commonMoviesDetails = x.filter((item) => commonMovieNames.includes(item.movieName));
  console.log(commonMovieNames)
    this.setState({p:commonMoviesDetails,count:commonMovieNames.length})
    
  }

  ons=async(id)=>{
    const {is} = this.state
    if(is===false){
      const {p} = this.state
      const f = p.filter((each)=>(each.id!==id))
      this.setState({p:f})
    const options = {
      method:'DELETE',
    }
    const response12 = await fetch(`http://localhost:3005/hollywood/${id}`,options)
    const data = await response12.json()
    }
  }

  change=()=>{
    const {s} = this.state
    if(s==="ADMIN"){
        this.setState({is:false})
    }
  }

  close=()=>{
    this.setState({is:true})
  }


  Search=(event)=>{
    this.setState({search:event.target.value})
  }

  onSearch=()=>{
    const {p,search} = this.state
    const r = p.filter((each)=>(
      each.movieName.toLowerCase().includes((search.toLowerCase()))
    ))
    return r
  }



  onTouch=(event)=>{
    this.setState({s:event.target.value})
  }

  render(){
    const {is,count} = this.state
    const x = this.onSearch()
    if(x.length===0){
      return(
        <div className='pra'>
        <div className='pra1'>
            <Header/>
            <div className='siri1'>
              <div className='latha1'>
                <input type='text' placeholder='search' onChange={this.Search} className='search1'/>
                <p className='par'>No of Movies : {count}</p>
                </div>
              <div className='error'>
              <h1 className='error-heading'>Not Found</h1>
              </div>
            </div>
        </div>
        </div>
      )
    }
    return(
    <div className='pra'>
        <div className='pra1'>
            <Header/>
            <div className='siri1'>
              <div className='latha1'>
                <input type='text' placeholder='search' onChange={this.Search} className='search1'/>
                <p className='par'>No of Movies : {count}</p>
              </div>
              <div className='displayMovie'>
                  {x.map((each)=>(
                  <MovieDetails key={each.id} tes={each} ons={this.ons}/>
                  ))}
                  
              </div>
            </div>
        </div>
    </div>
    )
  }
}

export default HollyBolly;
