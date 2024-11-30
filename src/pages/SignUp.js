
import { Box, Container, Paper, TextField, Typography } from '@mui/material';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import back from '../assets/1.png';
import { useNavigate } from 'react-router-dom';

import GoogleIcon from '@mui/icons-material/Google';
const SignUp = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); 
    if (user.username && user.email && user.password) {
      
      localStorage.setItem('user', JSON.stringify(user)); 
      navigate('/Login'); 
    } else {
      alert('Please fill in all fields');
    }
  };

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: { md: '70vh', xs: '130%' },
          m: '20px 5px',
          flexDirection: { xs: 'column-reverse', md: 'row' },
        }}
      >
        <Paper elevation={3}>
          <img src={back} height="500vh" width="100%" alt="logo" />
        </Paper>

        <Paper sx={{  p: {xs:"5px", md: '40px' }, width: {xs:"100%",  md: '40%' } }}>
          <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h5" color="initial">
              Create an account
            </Typography>
            <Typography variant="body1" color="initial">
              Enter your details below
            </Typography>
            <br />
            <TextField
              onChange={handleInputChange}
              required
              fullWidth
              value={user.username}
              label="Name"
              name="username"
              type="text"
              autoComplete="current-name"
              variant="standard"
            />
            <br />
            <TextField
              onChange={handleInputChange}
              required
              fullWidth
              value={user.email}
              label="Email"
              name="email"
              type="email"
              autoComplete="current-email"
              variant="standard"
            />
            <br />
            <TextField
              onChange={handleInputChange}
              required
              fullWidth
              value={user.password}
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <br />
            <br />
            <Box sx={{ cursor: 'pointer', p: '0' }}>
              <Button
                variant="danger"
                style={{ width: '280px' }}
                onClick={handleClick}
              >
                Create Account
              </Button>
              <br />
              <Button variant="outline-danger" style={{ width: '280px' }} onClick={()=>{window.open(`https://www.google.com`)}}>
              <GoogleIcon/>  Sign up with Google
              </Button>
              <br />
              <br />
              <Typography sx={{ display: 'flex', justifyContent: 'space-around' }}>
                Already have an account?
                <Typography sx={{fontWeight :"bolder"}}
                  
                  color="error"
                  onClick={() => {
                    navigate('/Login');
                  }}
                >
                  Login
                </Typography>
              </Typography>
            </Box>
          </Container>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignUp;
