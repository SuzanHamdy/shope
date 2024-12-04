import  React, { useState } from "react";

import {
  MenuItem,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,

  Badge,
} from "@mui/material";
import Menu from "@mui/material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from '@mui/icons-material';







export default function Navbar() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('user'));
const [searchTerm, setSearchTerm] = useState("")

  const item = useSelector((state) => state.cart) || []; 
  const state = useSelector((state) => state.wish) || []; 
  const [anchorEl, setAnchorEl] =useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const navigate = useNavigate();
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // const storedUser = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsUserLoggedIn(false); 
    navigate('/login'); 
    document.getElementById("userPg").style.visibility="hidden ";
    document.getElementById("userPage").style.visibility="hidden";
    handleMenuClose();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu sx={{zIndex:"1000000000000000", top:"40px"}}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          navigate("/account");
          handleMenuClose()
        }}
      >
        <PermIdentityRoundedIcon /> Manage My Account
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate("/CheckOut");
          handleMenuClose()
        }}
      >
        <LocalMallOutlinedIcon /> My Order
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <HighlightOffIcon /> My Cancellations
      </MenuItem>
      <MenuItem
        onClick={() => {
          navigate("/WishList");
          handleMenuClose();
        }}
      >
        <StarBorderIcon /> My Reviews
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <LogoutIcon /> Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu sx={{zIndex:"1000000000000000", top:"40px" , width:"400px"}}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box sx={{ visibility :"hidden"  }}   id="userPage">
      <IconButton size="small" aria-label="show 4 new mails" color="inherit"  onClick={() => {
                    navigate("/WishList");
                    handleMenuClose()
                  }}>
          <Badge badgeContent={state.length} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <IconButton   onClick={() => {
                    navigate("/cart");
                    handleMenuClose()
                  }}
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
      </Box>
      <Box sx={{ p: "5px 30px" }}>
        <NavLink className="nav" to="/Home" onClick={handleMenuClose}>
          Home
        </NavLink>
        <NavLink className="nav" to="/Contact" onClick={handleMenuClose}>
          Contact
        </NavLink>
        <NavLink className="nav" to="/About" onClick={handleMenuClose}>
          About
        </NavLink>
        <NavLink className="nav" to="/SignUp" onClick={handleMenuClose}>
          SignUp
        </NavLink>
      </Box>
    </Menu>
  );


const handleSubmit = (e)=>{
  e.preventDefault();
  navigate(`/Search/${searchTerm}`)
}



  return (
    <Box
      sx={{
        bgcolor: "white",
        color: "black",
    
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: "white", p: {sm:"5px 30px"}, color: "black" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,fontSize:{xs:"16px" }  }}
          >
            <NavLink className="nav" to="/">
              Exclusive 
            </NavLink>
          </Typography>
          <Box
            sx={{
              bgcolor: "white",
              p: "5px 25px",
              gap: "10px",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink className="nav" to="/Home">
              Home
            </NavLink>
            <NavLink className="nav" to="/Contact">
              Contact
            </NavLink>
            <NavLink className="nav" to="/About">
              About
            </NavLink>
            <NavLink className="nav" to="/SignUp">
              Sign Up
            </NavLink>
          </Box>
          {/* Search */}

         <form  className="form" onSubmit={handleSubmit}  >
<input type="search" 

value={searchTerm}
onChange={(e)=>setSearchTerm(e.target.value)}
className="Input" placeholder=" What are you looking for?"  />
<Search   onClick={handleSubmit}/>
         </form>

        


















          <Box sx={{ display: { xs: "none", md: "flex" }, visibility: isUserLoggedIn ? "visible" : "hidden" }} id="userPg">
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
      
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
