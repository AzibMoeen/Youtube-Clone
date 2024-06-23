import React from 'react'
import { useState,useEffect } from 'react'
import { Stack,Box ,Typography} from '@mui/material'
import Sidebar from './Sidebar'
import VideoFeed from './VideoFeed'
import { fetchfromapi } from '../utils/fetchfromapi'

const Feed = () => {
  const [selectedCatergory, setselectedCatergory] = useState("New")
  const [Videos, setVideos] = useState([])
  useEffect(() => {
   fetchfromapi(`search?part=snippet&q=${selectedCatergory}`)
   .then((data)=>{setVideos(data.items)})
  }, [selectedCatergory])
  return (
    <Stack
    sx={{ flexDirection:{sx:"column",md:"row"}}}
    >
      <Box 
      sx={{height:{sx:"auto",md:"92vh"},borderRight:'1px solid #3d3d3d', px:{sx:0,md:2}}}
      >
        <Sidebar selectedCatergory={selectedCatergory} setselectedCatergory = {setselectedCatergory}/>
        <Typography className='copyright' variant='body2'sx={{mt:1.5,color:"#fff"}}>
    CopyRight 2022 Azib
        </Typography>
        </Box>
        <Box p = {2} sx={{ overflowY:"auto",height:"90vh", flex:"2"}}>
          <Typography variant='h4'fontWeight="bold" mb={2}
          sx={{color:"white"}}>
           {selectedCatergory} <span style={{color:'#F31503'}}>Videos</span>
          </Typography>
          <VideoFeed Videos={Videos}/>
        </Box>
  
    </Stack>
  )
}

export default Feed
