import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCrad from './VideoCrad'

const VideoFeed = ({Videos,direction}) => {
  return (
    <Stack direction={direction||'row'} flexWrap="wrap"justifyContent= "start" gap={2} >
    {Videos.map((items,index)=>(
<Box key={index}>
<VideoCrad video = {items}/>
</Box>

    ))}
    </Stack>
  )
}

export default VideoFeed
