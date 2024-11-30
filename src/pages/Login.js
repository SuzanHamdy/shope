// import { Box, Container, Paper, TextField, Typography } from "@mui/material";
// import Button from "react-bootstrap/Button";
// import React, { useEffect, useState } from "react";
// import back from "../assets/1.png";
// import { useNavigate } from "react-router-dom";
// const Login = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
// const [isLoggedIn, setIsLoggedIn] = useState(false);


// useEffect(() => {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   if (storedUser) {
//     setIsLoggedIn(true);
//   }
// }, []);


//   const navigate = useNavigate();
//   const handleClick = (e) => {
//     e.preventDefault();
//     const getData = JSON.parse(localStorage.getItem("user"));
//     if (getData.email === user.email && getData.password === user.password) {
//       if (isLoggedIn) {
//         document.getElementById("userPg").style.visibility="visible"
//         document.getElementById("userPage").style.visibility="visible"
//         navigate("/home");
//       } else {
//    alert(" login please")
//       }
      
    
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };
//   return (
//     <Container>
//       <Box
//          sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           height: { md: '70vh', xs: '130%' },
//           m: '20px 5px',
//           flexDirection: { xs: 'column-reverse', md: 'row' },
//         }}
//       >
//         <Paper elevation={3} >
//           <img src={back} height="500vh" width="100%" alt="logo" />
//         </Paper>
//         <Paper sx={{  p: {xs:"5px", md: '40px' }, width: {xs:"100%",  md: '40%' } }}>
//           <Container sx={{ textAlign: "center" }}>
//             <Typography variant="h5" color="initial">
//               {" "}
//               Log in to Exclusive
//             </Typography>
//             <Typography variant="body1" color="initial">
//               Enter your details below
//             </Typography>
//             <br />
//             <TextField
//               onChange={handleInputChange}
//               required
//               fullWidth
//               value={user.email}
//               label="Email"
//               name="email"
//               type="email"
//               autoComplete="current-email"
//               variant="standard"
//             />
//             <br />
//             <TextField
//               onChange={handleInputChange}
//               required
//               fullWidth
//               value={user.password}
//               label="Password"
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               variant="standard"
//             />
//             <br /> <br /> <br /> <br />
//             <Box sx={{ display: "flex", justifyContent: "space-around" }}>
//               <Button variant="danger" onClick={handleClick}>
//                 LogIn
//               </Button>
//               <Typography
//                 variant="contained"
//                 color="error"
//                 onClick={() => {
//                   navigate("/signup");
//                 }}
//               >
//                 Forget Password?
//               </Typography>
//             </Box>
//           </Container>
//         </Paper>
//       </Box>
//     </Container>
//   );
// };

// export default Login;








import { Box, Container, Paper, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import back from "../assets/1.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    if (!user.email || !user.password) {
      return alert("Please fill in all fields");
    }
    if (storedUser.email === user.email && storedUser.password === user.password) {
      setIsLoggedIn(true);
      navigate("/home");
      document.getElementById("userPg").innerHTML =`
       <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={state.length} color="error">
                <FavoriteBorderIcon
                  onClick={() => {
                    navigate("/WishList");
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={ item.length }  color="error">
                <ShoppingCartOutlinedIcon
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
      
      
      
      `
      document.getElementById("userPage").innerHTML=`
      <IconButton size="small" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={state.length} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="small"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={ item.length   }  color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="small"
          aria-label="account of current user"
          color="inherit"
          onClick={handleProfileMenuOpen}
        >
          <PermIdentityRoundedIcon />
        </IconButton>
      
      
      
      `
    
    } else {
      alert("Invalid credentials");
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
          display: "flex",
          justifyContent: "center",
          height: { md: "70vh", xs: "130%" },
          m: "20px 5px",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Paper elevation={3}>
          <img src={back} height="500vh" width="100%" alt="logo" />
        </Paper>
        <Paper sx={{ p: { xs: "5px", md: "40px" }, width: { xs: "100%", md: "40%" } }}>
          <Container sx={{ textAlign: "center" }}>
            <Typography variant="h5" color="initial">
              Log in to Exclusive
            </Typography>
            <Typography variant="body1" color="initial">
              Enter your details below
            </Typography>
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
            <br /> <br /> <br /> <br />
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="contained" color="error" onClick={handleClick}>
                LogIn
              </Button>
              <Typography
                component="button"
                onClick={() => navigate("/signup")}
                style={{
                  background: "none",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                }}
              >
                Forget Password?
              </Typography>
            </Box>
          </Container>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;