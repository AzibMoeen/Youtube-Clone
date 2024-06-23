import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'
import { Category } from '@mui/icons-material'
import { useState } from 'react'
 


const Sidebar = ({selectedCatergory,setselectedCatergory}) => {
  
    const Handleclick = (e,id)=>{
      setselectedCatergory(id)
    }
   
  return (
   <Stack 
   direction="row"
   sx={{overflow:"auto"
    ,height:{sx:"auto",md:"95%"

    },flexDirection:{md:"column",}
   }}>
    {categories.map((item)=>(
<button key={item.name} className='category-btn' style={{background :item.name=== selectedCatergory? "#FC1503":"",color:item.name===selectedCatergory?'white':'red' }} onClick={(e)=>{Handleclick(e,item.name)}}>
<span style={{color:item.name===selectedCatergory?'white':'red',marginRight:'15px'}}>
{item.icon}
</span>
<span style={{opacity:item.name===selectedCatergory?'1':'0.8'}}>{item.name}</span>

</button>
    ))}

   </Stack>
  )
}

export default Sidebar
