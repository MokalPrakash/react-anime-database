import './App.css'
import {useState} from 'react'
import MainContent from "./Components/MainContent";
import Header from "./Components/Header";
import {fetchAnime} from "./api/FetchAnime"
import SideBar from './Components/SideBar';



function App() {
  const[query,setQuery] = useState("")
  const[animeList,setAnimeList] = useState([])

  const getQuery = (e)=>{
    e.preventDefault()
    setQuery(e.target.value)
    
  }

  const getAnime = async(e)=>{
    e.preventDefault()
    const data = await (fetchAnime(query))
    console.log(data)
    setAnimeList(data)
  }
  return (
    <div className="App">
      <Header/>
      
      <div className='content-wrap'>
        <SideBar animeList ={animeList}/>
        <MainContent getQuery={getQuery}
        getAnime = {getAnime}
        animeList = {animeList}
       />
      </div>
      
    </div>
  );
}

export default App;
