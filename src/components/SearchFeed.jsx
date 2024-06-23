import React from 'react'
import { useState,useEffect } from 'react'
import { Box ,Typography} from '@mui/material'
import VideoFeed from './VideoFeed'
import { fetchfromapi } from '../utils/fetchfromapi'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const{seachterm} = useParams()
 
  const [Videos, setVideos] = useState([])
  useEffect(() => {
   fetchfromapi(`search?part=snippet&q=${seachterm}`)
   .then((data)=>{setVideos(data.items)})
  }, [seachterm])
  return (
    
    <Box p = {2} sx={{ overflowY:"auto",height:"90vh", flex:"2"}}>
      <Typography variant='h4'fontWeight="bold" mb={2}
      sx={{color:"white"}}>
      Search Results for <span style={{color:'#F31503'}}>{seachterm}</span>
      </Typography>
      <VideoFeed Videos={Videos}/>
    </Box>

  )
}

export default SearchFeed
