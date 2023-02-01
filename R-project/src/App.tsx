import { useState } from 'react'
import reactLogo from './assets/react.svg'
import inception from './assets/inc.jfif'
import Joker from './assets/joker.jfif'
import social from './assets/social.jfif'
import ww from './assets/ww.jfif'
import bb from './assets/bb.jfif'
import g from './assets/g.jfif'
import you from './assets/you.jfif'
import bright from './assets/bright.jfif'
import Viking from './assets/viking.jfif'
import PB from './assets/pb.jfif'



//
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { moviesSchema} from './components/Movies'
import { TvShowsSchema} from './components/TvShows'
import TvShows from './components/TvShows'


import  Movies from './components/Movies'



const movies:moviesSchema[]= [
  { title: 'Inception',   image: inception,   year: 2010,   rating: 8.8,   isAvailable: true},
  { title: 'Joker',       image: Joker,       year: 2019,   rating: 8.4,   isAvailable: true},
  { title: 'Social Network',   image: social,   year: 2010,   rating: 7.7,   isAvailable: true},
  { title: 'Bright',   image: bright,   year: 2017,   rating: 8.0,   isAvailable: true},
  { title: 'Quantumania',   image: ww,   year: 2023,   rating: 8.8,   isAvailable: false},
]

const tvShows:TvShowsSchema[]= [
  { title: 'Breaking Bad',   image: bb,   year: 2013,   rating: 9.5,   isAvailable: true},
  { title: 'Game of Thrones',       image: g,       year: 2011,   rating: 9.4,   isAvailable: true},
  { title: 'You',   image: you,   year: 2018,   rating: 7.8,   isAvailable: true},
  { title: 'Viking',   image: Viking,   year: 2013,   rating: 8.5,   isAvailable: true},
  { title: 'Prison Break',   image: PB,   year: 2005,   rating: 8.3,   isAvailable: true},
]

function App() {
 
  return (
    <div className="App">
      <Nav/>
       <Movies movies={movies}/>
       <TvShows tvShows={tvShows}/>
      <Footer/>
    </div>
  )
}

export default App
