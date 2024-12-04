import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

import { Button } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import bg from '../assets/888.png';
import bga from '../assets/889.jpg';
import Speak from '../assets/881.png';
import per from '../assets/882.png'
import Shope from '../pages/Shope';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#000',
    color :'#fff',

  ...theme.typography.body2,
  padding: theme.spacing(1),
 
position:'relative'

 
}));
const Arrival = () => {
    const navigate = useNavigate();
  return (
    <Container>
    <Box>
    <Typography variant="h6" color="error">
          <span
            style={{
              width: "20px",
              height: "28px",
              marginRight: "5px",
              backgroundColor: "red",
              display: "inline-block",
              borderRadius: "8px",
            }}
          ></span>
       Our Products
        </Typography>
        <h2>Explore Our Products</h2><br/><br/>
        <Shope/>
        <Box sx={{display:"flex",justifyContent:"center" ,alignItems:"center" }}>
 <Button  variant="danger" style={{fontSize:"25px"}}
   onClick={()=>{navigate("/allProducts")}}>
   View All Products
</Button><br/><br/><br/><br/>
 </Box>
    </Box>
    <div className='space'></div>
    <Box>
    <Typography variant="h6" color="error">
          <span
            style={{
              width: "20px",
              height: "28px",
              marginRight: "5px",
              backgroundColor: "red",
              display: "inline-block",
              borderRadius: "8px",
            }}
          ></span>
         Featured
        </Typography>
        <h2>New Arrival</h2><br/><br/>
        <Stack
  spacing={{ xs: 1, sm: 2 }}
  direction="row"
  useFlexGap
  sx={{ flexWrap: 'wrap' , bgcolor:"white"}}
>
  <Item sx={{
    backgroundImage:`url(${bg})`,
    backgroundPosition: "''center',",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height :"83vh",
width :"540px",
  }}>
   <Typography variant="body1" sx={{ p:"10px",position:"absolute" , bottom:"5px" , left:"8px" ,cursor:"pointer"}}>
   <Typography>PlayStation 5</Typography>
    <Typography>Black and White version of the PS5 coming out on sale.</Typography>
    <Typography onClick={()=>{navigate('/AllProducts')}}> Shop Now</Typography>
   </Typography>
    
  </Item>
 <Stack   spacing={{ xs: 1, sm: 2 }}>
 <Item sx={{
    backgroundImage:`url(${bga})`,
    backgroundPosition: "left",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height :"40vh",
width :"520px",
   position:"relative"
  }}>
   <Typography variant="body1" sx={{ p:"10px",position:"absolute" , bottom:"5px" , left:"8px" ,cursor:"pointer"}}>
   <Typography>Women's Collections</Typography>
    <Typography>Featured woman collections that give you another vibe.</Typography>
    <Typography onClick={()=>{navigate('/allProducts')}}> Shop Now</Typography>
   </Typography>
    
  </Item>
  <Stack     spacing={{ xs: 1, sm: 2 }}
  direction="row"
  useFlexGap
  sx={{ flexWrap: 'wrap' , bgcolor:"white"}}>
  <Item sx={{
    backgroundImage:`url(${Speak})`,
    backgroundPosition: "''center',",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height :"40vh",
    width :"260px",
       position:"relative"
  }}>
   <Typography variant="body1" sx={{ p:"10px",position:"absolute" , bottom:"5px" , left:"8px" ,cursor:"pointer"}}>
   <Typography>Speakers</Typography>
    <Typography>Amazon wireless speakers</Typography>
    <Typography onClick={()=>{navigate('/allProducts')}}> Shop Now</Typography>
   </Typography>
    
  </Item>
  <Item sx={{
    backgroundImage:`url(${per})`,
    backgroundPosition: "''center',",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height :"40vh",
    width :"250px",
    position:"relative"
  }}>
   <Typography variant="body1" sx={{ p:"10px",position:"absolute" , bottom:"5px" , left:"8px" ,cursor:"pointer"}}>
   <Typography>Perfume</Typography>
    <Typography>GUCCI INTENSE OUD EDP</Typography>
    <Typography onClick={()=>{navigate('/allProducts')}}> Shop Now</Typography>
   </Typography>
    
  </Item>
  </Stack>
 </Stack>
</Stack>
    </Box>
   
    </Container>
  )
}

export default Arrival

