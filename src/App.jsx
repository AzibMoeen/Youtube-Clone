import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Box} from "@mui/material";
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import SearchFeed from './components/SearchFeed'
import VideosDetail from './components/VideosDetail'
import ChannelDetail from './components/ChannelDetail'



function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <Box 
  sx= {{background: '#000'}}
  >
  <Navbar/>
  <Routes>
  <Route path='/' exact element={<Feed/>}/>
  <Route path='/video/:id' element={<VideosDetail/>}/>
  <Route path='/channel/:id' element={<ChannelDetail/>}/>
  <Route path='/search/:seachterm' element={<SearchFeed/>}/>
  </Routes>

  </Box>
 
  </BrowserRouter>
  )
}

export default App
