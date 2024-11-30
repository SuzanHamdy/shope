
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

const Timer = () => {
  const [Days, setDays] = useState("00");
  const [Hours, setHours] = useState("00");
  const [Minutes, setMinutes] = useState("00");
  const [Seconds, setSeconds] = useState("00");
  
  const timerRef = useRef(null);

  const StartTimer = () => {
    const countData = new Date(`May 30, 2025 00:00:00:00`).getTime();

    timerRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countData - now;

      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(timerRef.current);
      
      } else {
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    }, 1000);
  };

  useEffect(() => {
    StartTimer();

  
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <Container>
      <Box>
        <Typography variant="h4" color="error">
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
          Today's
        </Typography>
      </Box>
      <Box >
        <Paper sx={{ display:{sm: "flex"}, justifyContent: "space-between", gap:{sm: "35px"} }}>
          <Typography variant="h3" sx={{ display: "flex", justifyContent: "space-between", fontWeight:  {sm:"bolder"}}}>
            Flash Sales
          </Typography>
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bolder",
              gap: "25px",
              textAlign: "center",
              p: "8px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: {sm:"bolder"} }}>
              <small>Days</small>
              <p>{Days}</p>
            </Typography>
            :
            <Typography variant="body1" sx={{ fontWeight: {sm:"bolder"} }}>
              <small>Hours</small>
              <p>{Hours}</p>
            </Typography>
            :
            <Typography variant="body1" sx={{ fontWeight: {sm:"bolder"} }}>
              <small>Minutes</small>
              <p>{Minutes}</p>
            </Typography>
            :
            <Typography variant="body1" sx={{ fontWeight: {sm:"bolder"} }}>
              <small>Seconds</small>
              <p>{Seconds}</p>
            </Typography>
          </Typography>
        </Paper>
        <Typography variant="h3" sx={{width :{sm:"50%"} ,m:"auto", textAlign:"center" }}>
          <IconButton sx={{ fontWeight: "bolder", color: "black"  }} >
            <KeyboardBackspaceIcon  sx={{fontSize:"60px"}} />
          </IconButton>
          <span style={{width:"20%" ,display:"inline-block"}}  ></span>
          <IconButton sx={{ fontWeight: "bolder", color: "black" }} >
            <EastIcon  sx={{fontSize:"60px"}} />
          </IconButton>
        </Typography>
      </Box>













 
    </Container>
  );
};

export default Timer;

