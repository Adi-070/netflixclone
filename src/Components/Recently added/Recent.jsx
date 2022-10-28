import React from 'react'
import "./Recent.scss"
import axios from 'axios'
import { useState,useEffect } from 'react'

const apikey="3b2391b4a39f53bf4e5843835025aa46"
const url="https://api.themoviedb.org/3"
const imgUrl="https://image.tmdb.org/t/p/original"
const nowPlaying="now_playing"
const onAir="on_the_air"


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





const Recent = () => {

  
  const [airOnTV,setAirOnTV]=useState([])
  const [topRatedOnTV,settopRatedOnTV]=useState([])

  useEffect(() => {

   
     const fetchnowplayingmovie= async()=>{
     const {data:{results},} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}&page=3`)
     setAirOnTV(results)
      //console.log(upcomingMovies)
     };
     const fetchnowplayingtv = async()=>{
      const {data:{results},} = await axios.get(`${url}/tv/${onAir}?api_key=${apikey}&page=3`)
      settopRatedOnTV(results)
       //console.log(upcomingMovies)
      };

   fetchnowplayingmovie();
   fetchnowplayingtv();

    },[])


 




  return (
    <section className='Tvshows'>
      <div className="banner1">
         
      <Row1 title={"Recently added on TV"} arr={topRatedOnTV} />
         <Row1 title={"Recently added Movie"}arr={airOnTV} />
         
         
      </div>
      
    </section>
  )
}

export default Recent