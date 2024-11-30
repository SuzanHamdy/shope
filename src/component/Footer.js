
import {  Box , Typography } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import  img1 from '../assets/2.png'
import  img2 from '../assets/3.jpg'
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import SendSharpIcon from '@mui/icons-material/SendSharp';
const Footer = () => {
  return (
    <>
     <div className='space'></div>
    <Box sx={{ bgcolor : "black" ,p :"30px 0px"}}>
   <Container>
   <br/>
   <Row xs={2} md={4} lg={5} gridGap= "50px">
   <Col>
       <Typography variant="h5" color="white"> Exclusive</Typography>    <br/>
       <Typography variant="body1" color="white"> Subscribe</Typography>  <br/> 
       <Typography variant="body1" color="white"> Get 10% off your first order</Typography> <br/>
       <Typography variant="body1" color="white" border="1px solid white">
        <input style={{backgroundColor : "black" , border: "none" , padding:"7px 2px" ,outline :"none"}} className='TextField' placeholder='Enter your email' />
       <SendSharpIcon  sx={{fontSize:"25px" , textAlign :"center",mt:"3px" ,color:"white"}}/></Typography>   <br/>
      </Col>
      <Col>
      <Typography variant="h5" color="white"> Support</Typography>   <br/>
      <Typography variant="body1" color="white"> 111 Bijoy sarani, Dhaka,</Typography>  <br/>
      <Typography variant="body1" color="white">   DH 1515, Bangladesh.</Typography>  <br/>
      <Typography variant="body1" color="white">  exclusive@gmail.com</Typography>   <br/>
      <Typography variant="body1" color="white"> +88015-88888-9999</Typography>  <br/>
      </Col>
         <Col>
         <Typography variant="h5" color="white">Account</Typography>  <br/>
         <Typography variant="body1" color="white"> My Account</Typography>   <br/>
         <Typography variant="body1" color="white"> Login / Register</Typography>  <br/>
         <Typography variant="body1" color="white">  Cart</Typography>   <br/>
         <Typography variant="body1" color="white"> Wishlist</Typography>   <br/>
         <Typography variant="body1" color="white"> Shop</Typography>  <br/>
         </Col>
         <Col>
         <Typography variant="h5" color="white"> Quick Link</Typography>   <br/>
         <Typography variant="body1" color="white"> Privacy Policy</Typography>   <br/>
         <Typography variant="body1" color="white">  Terms Of Use</Typography>   <br/>
         <Typography variant="body1" color="white"> FAQ</Typography>  <br/>
         <Typography variant="body1" color="white"> Contact</Typography>   <br/>
         </Col>
         <Col>
         <Typography variant="h5" color="white"> Download App</Typography>  <br/>
         <Typography variant="body1" color="white"> Save $3 with App New User Only</Typography>   <br/>
         <Typography variant="body1" color="white"> 
        <img src= {img2} alt='WhatsApp' width= "60px"  />
        <img src={img1} alt='Google' width= "80px"  />  
          </Typography>   <br/>
         <Typography variant="h6" sx={{color:"white", display: "flex" ,p:" 7px 70px 7px 0px", fontSize :"35px" , justifyContent :"space-between"}}>
         <FaFacebookF  />
         <CiTwitter  />
         <CiInstagram  />
         <FaLinkedinIn   />
          </Typography>  <br/>
         </Col>

    </Row>
    <br/>   <br/>   <br/>
   </Container>
   <Typography variant="body1" sx={{ color:"white" , textAlign :"center", fontSize :"22px"}}> Copyright Rimel 2022. All right reserved</Typography> 
    </Box>  <br/>   <br/>
    </>
  )
}

export default Footer

// 