import { Box, Paper } from '@mui/material'
import React from 'react'


import Shope2 from './Shope2'
import Shope from './Shope'


const AllProducts = () => {
  
  return (
    <Box>
<Paper sx={{textAlign:"center" ,color:"red" , width :"30%" , p:"15px" ,m :"20px auto" , fontSize:"40px" , textShadow:"5px 5px 10px #232F3E"}}> All Products </Paper>
      <Shope2   />
      <br/><br/>
      <Shope   />
    </Box>
  )
}

export default AllProducts
