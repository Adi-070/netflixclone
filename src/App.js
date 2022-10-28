import './App.scss';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Tvshows from './Components/Tv shows/Tvshows';
import Movies from './Components/Movies/Movies';
import Recent from './Components/Recently added/Recent';
import MyList from './Components/MyList/MyList';

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/Tvshows"element={<Tvshows/>} />
      <Route path="/Movies"element={<Movies/>} />
      <Route path="/Recently Added"element={<Recent/>} />
      <Route path="/My List"element={<MyList/>} />

    </Routes>
  </Router> 
  
}

export default App;
