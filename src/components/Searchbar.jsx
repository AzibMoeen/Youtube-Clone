import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'


const Searchbar = () => {
  const [seachterm, setseachterm] = useState('')
  const navigate = useNavigate()
  const handlesubmit=(e)=>{
   e.preventDefault()
   if(seachterm){
   navigate(`search/${seachterm}`)
   setseachterm('')
   }
  }
  
  return (
    <Paper
     component= "form" onSubmit={(e)=>{handlesubmit(e)}}
     sx={{borderRadius:20,
        border: '1px solid #232323',
        pl : 2,
        boxShadow :'none',
        mr:{sm:5}

     }} > <input type="text" className='search-bar' placeholder="search..." value={seachterm} onChange={(e)=>{setseachterm(e.target.value)}}
      />
    <IconButton type='submit'
    sx={{p:"10px" ,color:"red"}}>
        <Search/> 
        
    </IconButton>

      </Paper>
  )
}

export default Searchbar
