import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import Navbar from "./Navbar";
import Side from "./Side";

const Header = () => {
  return (
    <>
      <Box    sx={{
        
        position: "fixed",
        zIndex: "10000000",
        top: "0px",
        right: "0px",
        left: "0px",
      }} >
        <Box
          sx={{
            bgcolor: "text.primary",
            color: "white",
            display: { sm: "flex" },
            justifyContent: "space-around",
          }}
        >
          <Typography></Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              p: { sm: "  17px 5px " },
              textWrap: "wrap",
              fontSize: { xs: "12px", sm: "14px", md: "19" },
              textAlign: { md: "center" },
            }}
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <NavLink to="/" style={{ color: "white", padding: "5px 30px" }}>
              ShopNow
            </NavLink>
          </Typography>
          <Box sx={{ bgcolor: "text.primary", p: "10px  5px" }}>
            <Form.Select
              size="sm"
              style={{
                color: "inherit",
                background: "inherit",
                border: "none",
              }}
            >
              <option>English</option>
              <option>Arabic</option>
            </Form.Select>
          </Box>
        </Box>
        <Box>
          <Navbar />
        
        </Box>
      </Box>
      <div className='space'></div>
    
    </>
  );
};

export default Header;
