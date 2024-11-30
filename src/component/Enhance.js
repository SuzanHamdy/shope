import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import audio from "../assets/asd.png";
import {  useNavigate } from 'react-router-dom';
const Enhance = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container
        sx={{
          bgcolor: "black",
          display: { sm: "flex" },
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          height: {sm:"60vh"},
          borderRadius:"10px"
        }}
      >
        <Box sx={{ width: {sm:"50%"}, padding: "20px" }}>
          <Button sx={{color:"rgb(145, 222, 62)" ,fontSize:"20px"}}>Categories</Button>
          <br /> <br />
          <Typography
            variant="body1"
            sx={{
              color: "white",
              mx: { sm: "10px" },
              fontSize:  "30px" ,
            }}
          >
            {" "}
            Enhance Your
            <br /> Music Experience <br />
          </Typography>{" "}
          <br />
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              mx: { sm: "10px" },
              fontSize: "30px" ,
            }}
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                textAlign: "center",
                p: "45px",
              }}
            >
              23 <br /> Hours
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                textAlign: "center",
                p: "45px",
              }}
            >
              05 <br /> Days
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                textAlign: "center",
                p: "45px",
              }}
            >
              59 <br /> Minutes
            </Avatar>
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                textAlign: "center",
                p: "45px",
              }}
            >
              35 <br /> Seconds
            </Avatar>
          </Typography> <br/> <br/>
          <Button
          onClick={()=>{navigate('/AllProducts')}}
            component="a"
            sx={{ color: "white", mx:{sm: "10px"}, fontSize: "25px", bgcolor:"rgb(145, 222, 62)"  }}
          >
            Buy Now!
          </Button>
        </Box>
        <Box sx={{ width: "50%", height: "400px" }}>
          <img
            src={audio}
            alt="audio"
            style={{
              width: " 110%",
              height: "100%",
              marginTop: "5px",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Enhance;
