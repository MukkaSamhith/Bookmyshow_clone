import { Component } from 'react';
import MovieDetails1 from '../MovieDetails1/index.js';
import Header from '../Header/index.js';
import './index.css';

class View1 extends Component{

  state = {p:[],is:true,s:"",n1:'',n2:0,n3:'',n4:'',n5:'',n6:0,n7:'',n8:'',search:''}

  componentDidMount(){
    this.getData()
  }

  getData = async()=>{
    const response = await fetch("http://localhost:3005/bollywood/")
    const data = await response.json()
    console.log(data)
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
    this.setState({p:x})
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

  send1=(event)=>{
    this.setState({n1:event.target.value})
  }

  send2=(event)=>{
    this.setState({n2:event.target.value})
  }

  send3=(event)=>{
    this.setState({n3:event.target.value})
  }

  send4=(event)=>{
    this.setState({n4:event.target.value})
  }

  send5=(event)=>{
    this.setState({n5:event.target.value})
  }

  send6=(event)=>{
    this.setState({n6:event.target.value})
  }

  send7=(event)=>{
    this.setState({n7:event.target.value})
  }

  send8=(event)=>{
    this.setState({n8:event.target.value})
  }

  sendOf=async()=>{
    const {n1,n2,n3,n4,n5,n6,n7,n8} = this.state
    const x = {n1,n2,n3,n4,n5,n6,n7,n8}
    const options = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(x),
    }
    console.log(options)
    const response = await fetch("http://localhost:3005/bollywood/",options)

  }

  onTouch=(event)=>{
    this.setState({s:event.target.value})
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

  ons=async(id)=>{
    const {is} = this.state
    if(is===false){
    const {p} = this.state
    const f = p.filter((each)=>(each.id!==id))
    this.setState({p:f})
    }
    const options = {
      method:'DELETE',
    }
    const response12 = await fetch(`http://localhost:3005/bollywood/${id}`,options)
    const data = await response12.json()
    console.log(data)
    }

  render(){
    const {is} = this.state
    const x = this.onSearch()
    if(x.length===0){
      return(
        <div className='pra'>
        <div className='pra1'>
            <Header/>
            <div className='siri1'>
              <input type='text' placeholder='search' onChange={this.Search} className='search1'/>
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
                <input type='text' placeholder='search' onChange={this.Search} className='search1'/>
                <div className='displayMovie'>
                  {x.map((each)=>(
                  <MovieDetails1 key={each.id} tes={each} ons={this.ons}/>
                  ))}
                </div>
                
            </div>
            </div>
      <p>To Upload ADMIN ID:</p>
      <input type="text" onChange={this.onTouch}/>
      <button type='button' onClick={this.change}>Upload</button>
      <button type="button" onClick={this.close}>Close</button>
      {is ? null:(
        <div className='kk'>
            <p className='kk'>MovieName</p>
            <input type="text" onChange={this.send1}/><br/>
            <p>MovieId</p>
            <input type="number" onChange={this.send2}/><br/>
            <p>Director Name</p>
            <input type="text" onChange={this.send3}/><br/>
            <p>ProducerName</p>
            <input type="text" onChange={this.send4}/><br/>
            <p>Actors</p>
            <input type='text' onChange={this.send5}/><br/>
            <p>Budget</p>
            <input type="number" onChange={this.send6}/><br/>
            <p>MovieUrl</p>
            <input type="text" onChange={this.send7}/><br/>
            <p>MovieCoverPage</p>
            <input type="text" onChange={this.send8}/><br/>
            <button type="button" onClick={this.sendOf}>Send</button>
        </div>
      )}
    </div>
    )
  }
}

export default View1;
