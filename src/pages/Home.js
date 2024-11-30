import React from 'react'
import Products from '../component/Products';
import { Box} from '@mui/material';
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Timer from '../component/Timer';

import Side from '../component/Side';
import ProductsShope from '../component/ProductsShope';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Container} from 'react-bootstrap';
import Enhance from '../component/Enhance';
import Arrival from '../component/Arrival';







const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
     
     
      <Side /><br/>
      <Timer/><br/>
   <Products/><br/>
 <Box sx={{display:"flex",justifyContent:"center" ,alignItems:"center" }}>
 <Button  variant="danger" style={{fontSize:"25px"}}
   onClick={()=>{navigate("/AllProducts")}}>
   View All Products
</Button><br/><br/><br/><br/>
 </Box>
<ProductsShope/>
<div className='space'></div>

<Enhance/>
<div className='space'></div>
<Arrival/>


 <div className='space'></div>






<Container   className='media'>
<ButtonGroup
        style={{ flexWrap: "wrap",marginLeft:"20px" }}
      >
        <Button style={{ margin: "10px 20px" }} variant="light">
          <LocalShippingIcon
            sx={{
              fontSize: "70px",
              color: "white",
              bgcolor: "black",
              p: "8px",
              borderRadius: "50%",
              border: "10px solid gray",
            }}
          />
          <br /> FREE AND FAST DELIVERY <br /> Free delivery for all orders over
          $140{" "}
        </Button>{" "}
        <Button style={{ margin: "10px 20px" }} variant="light">
          {" "}
          <HeadsetMicIcon
            sx={{
              fontSize: "70px",
              color: "white",
              bgcolor: "black",
              p: "8px",
              borderRadius: "50%",
              border: "10px solid gray",
            }}
          />
          <br />
          24/7 CUSTOMER SERVICE
          <br /> Friendly 24/7 customer support
        </Button>{" "}
        <Button style={{ margin: "10px 20px" }} variant="light">
          {" "}
          <VerifiedUserIcon
            sx={{
              fontSize: "70px",
              color: "white",
              bgcolor: "black",
              p: "8px",
              borderRadius: "50%",
              border: "10px solid gray",
            }}
          />
          <br /> MONEY BACK GUARANTEE <br /> We return money within 30 days
        </Button>{" "}
      </ButtonGroup>
</Container>
    </Box>
  )
}

export default Home ;


