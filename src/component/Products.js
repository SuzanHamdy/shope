import React, { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";

import Skeleton from "@mui/material/Skeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Slider from "react-slick";
import { pink } from '@mui/material/colors';
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/WishSlice";



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
        const res = await fetch(`https://dummyjson.com/products`);
        const result = await res.json();
        setData(result.products);
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
     document.getElementById("wish").disabled = true;
  }
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
                backgroundImage: `url(${product.thumbnail})`,
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
                  {product.discountPercentage}%
                </Typography>
                <Typography>
                  <IconButton>
                  <Checkbox    id="wish" 
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
        }} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                   
                  </IconButton>
                  <br />
                  <IconButton>
                    <Visibility
                        onClick={() => {
                          if (storedUser) {
                            navigate(`/Products/${product.id}`);
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
                sx={{display: "none", flexWrap: "wrap", bgcolor: "black", width:"100%" }}
                onClick={() => {
                  if (storedUser) {
                    navigate(`/Products/${product.id}`);
                  } else {
                    alert("Please login to add products to your cart.");
                  }
                }}
              >
                Add to Cart
              </Button>
            </Box>
            <CardContent >
              <Typography gutterBottom variant="h6" component="div">
                {product.title}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "text.secondary", fontWeight: "bolder" }}
              >
                ${product.price}
              </Typography>
              <Rating
                name="simple-controlled"
                value={product.rating}
                onChange={() => {}}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Slider>
 
  );

  return (
    <>
    
      <div className=" my-20px">
        <div className="slider-container  m-auto w-100  p-5 gap-10px">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default Products;
