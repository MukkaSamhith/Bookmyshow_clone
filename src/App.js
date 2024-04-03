import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {BrowserRouter,useNavigation} from 'react-router-dom'
import Login from './components/login'
import Samhith from './components/Samhith'
import Samhith1 from './components/Samhith1'
import Samhith2 from './components/Samhith2'
import View from './components/MainView'
import View1 from './components/MainView1'
import View2 from './components/MainView2'
import SeatSearch from './components/SeatSearch'
import SeatSearch1 from './components/SeatSearch1'
import Header1 from './components/Header1'
import HollyBolly from './components/Join'
import './App.css'

const App =()=>{

return(
  <BrowserRouter>
    <Header1/>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path="/hollywood" element={<View/>}/>
      <Route exact path="/hollywood/:id" element={<Samhith/>}/>
      <Route exact path="/hollywood/tollywood" element={<HollyBolly/>}/>
      <Route exact path="/bollywood" element={<View1/>}/>
      <Route exact path="/bollywood/:id" element={<Samhith1/>}/>
      <Route exact path="/tollywood" element={<View2/>}/>
      <Route exact path="/tollywood/:id" element={<Samhith2/>}/>
      <Route exact path = "/hollywood/seats/:id" element={<SeatSearch/>}/>
      <Route exact path = "/bollywood/seats/:id" element={<SeatSearch1/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default App