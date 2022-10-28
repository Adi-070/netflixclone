import React from 'react'
import "./Movies.scss"
import axios from 'axios'
import { useState,useEffect } from 'react'

const apikey="3b2391b4a39f53bf4e5843835025aa46"
const url="https://api.themoviedb.org/3"
const imgUrl="https://image.tmdb.org/t/p/original"
const popular="popular"
const nowPlaying="now_playing"
const topRated="top_rated"

const Card1 = ({img}) => (

  <img src={img} className="card" alt="cover"></img>

)

const Row1 = ({title,arr=[]}) => (

    <div className='Row'>
      <h1>{title}</h1>

      <div className='two'>
      
    {
       
      arr.map((item,index) => (
       
       <Card1 key={index}img={`${imgUrl}/${item.poster_path}`}/>
          
      
      )
      )
      
    }

    
    </div>


</div>
)





const Movies = () => {

  const [popularOnTV,setPopularOnTV]=useState([])
  const [airOnTV,setAirOnTV]=useState([])
  const [topRatedOnTV,settopRatedOnTV]=useState([])
  

  useEffect(() => {

    const fetchpopularmovie = async()=>{
      const {data:{results},} = await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
      setPopularOnTV(results)
      //console.log(upcomingMovies)
     };
     const fetchnowplayingmovie= async()=>{
     const {data:{results},} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`)
     setAirOnTV(results)
      //console.log(upcomingMovies)
     };
     const fetchTopRatedmovie = async()=>{
      const {data:{results},} = await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)
      settopRatedOnTV(results)
       //console.log(upcomingMovies)
      };

   fetchpopularmovie();
   fetchnowplayingmovie();
   fetchTopRatedmovie();

    },[])


 




  return (
    <section className='Tvshows'>
      <div className="banner1">
         <Row1 title={"Popular"} arr={popularOnTV}/>
         <Row1 title={"Now Playing"}arr={airOnTV} />
         <Row1 title={"Top rated"} arr={topRatedOnTV} />
         
      </div>
      
    </section>
  )
}

export default Movies