import {
  Box,
  Typography,
  Paper,
  Container,
  CardActions,
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
} from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import back1 from "../assets/05_11_2024 05_42_13 م.png";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import img1 from "../assets/5.png";
import img2 from "../assets/6م.png";
import img3 from "../assets/7م.png";

const About = () => {
  return (
    <Container>
      <Box
        sx={{ display: { md: "flex" }, justifyContent: "center", m: "30px" }}
      >
        <Box sx={{ width: { md: "50%" }, p: "20px" }}>
          <Typography variant="h2" color="initial">
            Our Story
          </Typography>
          <Typography variant="body1" color="initial">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. Exclusive has more than 1 Million products to
            offer, growing at a very fast. Exclusive offers a diverse assotment
            in categories ranging from consumer.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ width: { md: "50%" } }}>
          <img src={back1} height="380vh" width="100%" alt="logo" />
        </Paper>
      </Box>
      <ButtonGroup style={{ margin: "20px 10px 20px 60px ", flexWrap: "wrap" }}>
        <Button style={{ margin: "10px 20px" }} variant="outline-danger">
          <AccountBalanceIcon
            sx={{
              fontSize: "70px",
              color: "white",
              bgcolor: "black",
              p: "8px",
              borderRadius: "50%",
              border: "10px solid gray",
            }}
          />{" "}
          <br /> 10.5k <br /> Sallers active our site{" "}
        </Button>{" "}
        <Button style={{ margin: "10px 20px" }} variant="outline-danger">
          {" "}
          <MonetizationOnIcon
            sx={{
              fontSize: "70px",
              color: "white",
              bgcolor: "black",
              p: "8px",
              borderRadius: "50%",
              border: "10px solid gray",
            }}
          />{" "}
          <br /> 33k
          <br /> Mopnthly product Sale
        </Button>{" "}
        <Button style={{ margin: "10px 20px" }} variant="outline-danger">
          {" "}
          <LocalMallIcon
            sx={{
              fontSize: "70px",
              color: "white",
              bgcolor: "black",
              p: "8px",
              borderRadius: "50%",
              border: "10px solid gray",
            }}
          />{" "}
          <br /> 45.5k <br /> Customer active in our site
        </Button>{" "}
        <Button style={{ margin: "10px 20px" }} variant="outline-danger">
          {" "}
          <FaSackDollar
            style={{
              fontSize: "70px",
              color: "white",
              backgroundColor: "black",
              padding: "8px",
              borderRadius: "50%",
              border: "10px solid gray",
            }}
          />{" "}
          <br /> 25k <br /> annual gross sale in our site{" "}
        </Button>{" "}
      </ButtonGroup>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          m: "30px ",
          gap: "30px",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={img1}
              alt=" Tom Cruise"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tom Cruise
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Founder & Chairman
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ fontSize: "25px" }}>
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={img2}
              alt=" Emma Watson"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Emma Watson
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Managing Director
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ fontSize: "25px" }}>
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image={img3}
              alt=" Will Smith"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Will Smith
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Product Designer
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ fontSize: "25px" }}>
            <CiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </CardActions>
        </Card>
      </Box>

      <ButtonGroup
        style={{ margin: "20px 10px 20px 100px ", flexWrap: "wrap" }}
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
  );
};

export default About;
