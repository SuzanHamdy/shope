import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import { pink } from '@mui/material/colors';
import Skeleton from "@mui/material/Skeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";
import Slider from "react-slick";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Rating,
  Button,
  IconButton,
  Container,
  Checkbox,
  ButtonGroup,

} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { add } from "../store/WishSlice";
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import Face2Icon from '@mui/icons-material/Face2';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Products = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);






  
  const addfavorate =(product)=>{
    dispatch(add(product));
    document.getElementById("idd").disabled = true;
 }











 const filterProduct = (cat) => {
  const updateList = data.filter((x) => x.category === cat);
  setData(updateList);
};
const storedUser = JSON.parse(localStorage.getItem("user"));

  const Loading = () => {
    const skeletonArray = new Array(4).fill(null);
    return (
      <>
        <Container sx={{ m: { sm: "50px 10px 50px 80px" }, display: "flex" }}>
          {skeletonArray.map((_, index) => (
            <Box key={index} sx={{ pt: 0.5 }}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{ m: "10px 20px" }}
                width={220}
                height={200}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{ m: "10px 20px" }}
                width={100}
                height={50}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{ m: "10px 20px" }}
                width={160}
                height={30}
              />
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{ m: "10px 20px" }}
                width={200}
                height={30}
              />
            </Box>
          ))}
        </Container>
      </>
    );
  };

  const ShowProduct = () => (
    <Slider {...settings}>
      {data.map((product) => (
        <Card
          key={product.id}
          sx={{
            Width: "250px",
            height: "450px",
            gap: "10px",
            flexWrap: "wrap",
            "&:hover  #button": { display: "block" },
          }}
        >
          <CardActionArea>
            <Box
             
              sx={{
                backgroundImage: `url(${product.image})`,
                height: "250px",
                backgroundPosition: "'left",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                p: "10px 2px 0px 5px",
              }}
            >
              <Typography
                variant="body1"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography sx={{ color: "red", fontWeight: "bolder" }}>
                  {product.rating.count/10}%
                </Typography>
                <Typography>
                  <IconButton>
                  <Checkbox id="idd" 
                    onClick={() => {
                      if (storedUser) {
                        addfavorate(product);
                      } else {
                        alert("Please login to add products to your cart.");
                      }
                    }}
                  
                  
                   sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                  </IconButton>
                  <br />
                  <IconButton>
                    <Visibility
                     onClick={() => {
                      if (storedUser) {
                        navigate(`/shope/${product.id}`);
                      } else {
                        alert("Please login to add products to your cart.");
                      }
                    }}
                      sx={{
                        fontSize: "40px",
                        color: "red",
                        borderRadius: "50%",
                        p: "5px",
                      }}
                    />
                  </IconButton>
                </Typography>
              </Typography>
              <Button
              id="button"
                variant="contained"
                sx={{display: "none", flexWrap: "wrap", bgcolor: "black" }}
                onClick={() => {
                  if (storedUser) {
                    navigate(`/shope/${product.id}`);
                  } else {
                    alert("Please login to add products to your cart.");
                  }
                }}
              >
                Add to Cart
              </Button>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.title.substring(0,15)}.....
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "text.secondary", fontWeight: "bolder" }}
              >
                ${product.price}
              </Typography>
              <Rating
                name="simple-controlled"
                value={product.rating.rate}
              
              />
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Slider>
  );

  return (
    <>
                 <Container >
    <h2> Browse By Category</h2>
   <ButtonGroup aria-label="Basic example" className='media' >
              <Button  style={{fontSize:"20px",  padding: "10px ",margin :"5px 20px"}} onClick={()=>{filterProduct("women's clothing")}}
                                     variant="outlined" color="error">
                                   
                                     <Face2Icon sx={{fontSize:"30px"}}/> Woman's Fashion</Button>
              <Button  style={{fontSize:"20px",  padding: "10px ",margin :"5px 20px"}}  onClick={()=>{filterProduct("men's clothing")}}
                                    variant="outlined" color="error">
                                    
                                      <PregnantWomanIcon  sx={{fontSize:"40px"}}/> Men's Fashion</Button>
              <Button  style={{fontSize:"20px",  padding: "10px " ,margin :"5px 20px"}} onClick={()=>{filterProduct("electronics")}}
                                     variant="outlined" color="error">
                                   
                                     <PersonalVideoIcon  sx={{fontSize:"30px"}} />     Electronics</Button>
              <Button  style={{fontSize:"20px",  padding: "10px " ,margin :"5px 20px"}} onClick={()=>{filterProduct("jewelery")}}
                                     variant="outlined" color="error">
                                 
                                    <PhonelinkRingIcon  sx={{fontSize:"30px"}} /> jewelery</Button>
              <Button  style={{fontSize:"20px", margin :"5px 20px", padding: "10px "}} onClick={()=> {setData(data)}}
                                    variant="outlined" color="error">
                                    
                                     <FamilyRestroomIcon  sx={{fontSize:"30px"}}/>  View All</Button>
                            </ButtonGroup>
   </Container> 
<Container>
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
          This Month
        </Typography>
 <Box sx={{display:"flex",justifyContent:"space-between" }}>
  <h2> Best Selling </h2>
 <Button  variant="contained" color="error"
   onClick={()=>{navigate("/AllProducts")}}>
   View All 
</Button>
 </Box><br/>
</Container>
     <Typography variant="h3" sx={{width :{sm:"50%"} ,m:"auto", textAlign:"center" }}>
          <IconButton sx={{ fontWeight: "bolder", color: "black"  }} >
            <KeyboardBackspaceIcon  sx={{fontSize:"60px"}} />
          </IconButton>
          <span sx={{width:"20%" ,display:"inline-block"}}  ></span>
          <IconButton sx={{ fontWeight: "bolder", color: "black" }} >
            <EastIcon  sx={{fontSize:"60px"}} />
          </IconButton>
        </Typography><br/>
      <div className=" my-20px">
        <div className="slider-container  m-auto w-100  p-5 gap-10px">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default Products;



