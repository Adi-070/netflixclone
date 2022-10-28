import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'
import {BiPlay} from "react-icons/bi"
import { BsFillPlusSquareFill } from 'react-icons/bs'


const apikey="3b2391b4a39f53bf4e5843835025aa46"
const url="https://api.themoviedb.org/3"
const imgUrl="https://image.tmdb.org/t/p/original"
const upcoming="upcoming"
const nowPlaying="now_playing"
const popular="popular"
const topRated="top_rated"
const onAir="on_the_air"


const Card = ({img}) => (

  <img src={img} className="card" alt="cover"></img>

)


const Row = ({title,arr=[] }) => (

  <div className='Row'>
    <h1>{title}</h1>
    
    <div className='one'>
      
    {
       
      arr.map((item,index) => {
       
      return <Card key={index}img={`${imgUrl}/${item.poster_path}`} />
          
      
      }
      )
      
    }
   
    
    </div>

    
  </div>
)

const Home = () => {
 
  const [upcomingMovies,setupcomingMovies]=useState([])
  const [nowPlayingMovies,setnowPlayingMovies]=useState([])
  const [popularMovies,setpopularMovies]=useState([])
  const [topRatedMovies,settopRatedMovies]=useState([])
  const [popularOnTV,setPopularOnTV]=useState([])
  const [airOnTV,setAirOnTV]=useState([])

 useEffect(() => {
   
   const fetchUpcoming = async()=>{
     const {data:{results},} = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
     setupcomingMovies(results)
    //console.log(upcomingMovies)
    };
    const fetchNowplaying = async()=>{
      const {data:{results},} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`)
      setnowPlayingMovies(results)
      //console.log(upcomingMovies)
     };
     const fetchpopular = async()=>{
      const {data:{results},} = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
      setpopularMovies(results)
      //console.log(upcomingMovies)
     };
     const fetchTopRated = async()=>{
      const {data:{results},} = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)
      settopRatedMovies(results)
     //console.log(upcomingMovies)
     };
     const fetchpopularontv = async()=>{
      const {data:{results},} = await axios.get(`${url}/tv/${popular}?api_key=${apikey}`)
      setPopularOnTV(results)
      //console.log(upcomingMovies)
     };
     const fetchonairtv = async()=>{
     const {data:{results},} = await axios.get(`${url}/tv/${onAir}?api_key=${apikey}`)
     setAirOnTV(results)
      //console.log(upcomingMovies)
     };

   fetchUpcoming ();
   fetchNowplaying();
   fetchpopular();
   fetchTopRated();
   fetchpopularontv();
   fetchonairtv();
 //eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
 


  return (
    <section className="home">
      <div className="banner" style={{
        backgroundImage: `url(${`${imgUrl}/${popularMovies?.[1]?.poster_path}`})`,backgroundSize:"cover",backgroundPosition:"center center"
      }}>
       

      {popularMovies[1] && <h2>{popularMovies[1]?.title}</h2> }
    
      {popularMovies[1] && <p>{popularMovies[1]?.overview}</p>}
     
      < a href='https://www.youtube.com/watch?v=6D0yFgZnmYM'>
      <button className='play'><BiPlay className='bi' /> &nbsp; Play  </button>
      </a>
      <button className='list'><BsFillPlusSquareFill className='bs'/> &nbsp; My list   </button>

      </div>

        <Row title={"Upcoming on Netflix"} arr={upcomingMovies} />
        <Row title={"Now playing movies"} arr={nowPlayingMovies}/>
        <Row title={"Popular movies"} arr={popularMovies}/>
        <Row title={"Top Rated Movies"} arr={topRatedMovies}/>
        <Row title={"Popular on TV"} arr={popularOnTV}/>
        <Row title={"TV on air"} arr={airOnTV}/>
        
    </section>
    
  )
}

export default Home