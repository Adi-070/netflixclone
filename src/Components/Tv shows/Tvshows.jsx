import React from 'react'
import "./Tvshows.scss"
import axios from 'axios'
import { useState,useEffect } from 'react'

const apikey="3b2391b4a39f53bf4e5843835025aa46"
const url="https://api.themoviedb.org/3"
const imgUrl="https://image.tmdb.org/t/p/original"
const popular="popular"
const onAir="on_the_air"
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





const Tvshows = () => {

  const [popularOnTV,setPopularOnTV]=useState([])
  const [airOnTV,setAirOnTV]=useState([])
  const [topRatedOnTV,settopRatedOnTV]=useState([])

  useEffect(() => {

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
     const fetchTopRatedOnTV = async()=>{
      const {data:{results},} = await axios.get(`${url}/tv/${topRated}?api_key=${apikey}`)
      settopRatedOnTV(results)
       //console.log(upcomingMovies)
      };

   fetchpopularontv();
   fetchonairtv();
   fetchTopRatedOnTV();

    },[])


 




  return (
    <section className='Tvshows'>
      <div className="banner1">
         <Row1 title={"Popular"} arr={popularOnTV}/>
         <Row1 title={"Airing"}arr={airOnTV} />
         <Row1 title={"Top rated"} arr={topRatedOnTV} />
         
      </div>
      
    </section>
  )
}

export default Tvshows