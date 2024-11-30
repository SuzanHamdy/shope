
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";


import {
  Box,
  CardActionArea,
  CardContent,
  Container,
  Rating,
  Typography,
  Card,
  Paper,
  Skeleton,
  Button,
  ButtonGroup,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import RestoreIcon from "@mui/icons-material/Restore";

import { add } from "../store/CartSlice";



const DetailsShope = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const dispatch = useDispatch();










  
  const fetchProduct = async () => {
    setLoading(true);
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);;
      if (!res.ok) throw new Error("Failed to fetch product details.");
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleAddToCart = (Product) => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    const productWithQuantity = { ...Product, quantity, size: selectedSize };
    dispatch(add(productWithQuantity));
    document.getElementById("btn").disabled = true;
  };
  




  const Loading = () => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 4 }}>
      {[...Array(6)].map((_, index) => (
        <Skeleton key={index} variant="rectangular" width={200} height={300} />
      ))}
    </Box>
  );

  const ShowProduct = () => {
    if (!product) return null;

    return (
      <Card sx={{ minWidth: "470px", m: "0px", height: "650px" }}>
      <CardActionArea sx={{ display: "flex", justifyContent: "space-around" }}>
     
          <img  src={product.image} alt={product.title} width={340} /> <br /> 
          <CardContent sx={{mt:"0px"}} >
              <Typography gutterBottom variant="h6" component="div">
                  {product.title}
              </Typography>
              <Rating name="simple-controlled" value={product.rating.rate}  />
              <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                  ${product.price}
              </Typography>
             
              <Typography gutterBottom variant="h6" component="div"  sx={{m:"10px  auto " ,borderBottom :"1px solid black" }} >
                  {product.description}
              </Typography>
              
              <Typography gutterBottom variant="h6" component="div" sx={{ m: "20px " }}>
               
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "contained" : "outlined"}
                   color="error"
                  sx={{ mx: 0.5 }}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
              </Typography>
              <Box sx={{ mt: 3 }}>
              <ButtonGroup>
                <Button  color="error" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</Button>
                <Button  color="error">{quantity}</Button>
                <Button   color="error" onClick={() => setQuantity((q) => q + 1)}>+</Button>
              </ButtonGroup>
              <Button variant="contained"
              id="btn"
               color="error"
                sx={{ ml: 2 }}
                onClick={ ()=>   handleAddToCart(product)}
              >
                Buy Now
              </Button>
              <Button  color="error" variant="outlined" sx={{ ml: 1 }}>
                <FavoriteBorderIcon />
              </Button>
            </Box>
              <Paper  elevation={0} >
              <Box sx={{m:"30px 0px 0px 30px" ,border :"1px solid black" ,display :"flex" , justifyContent :"center" , gap :"15px" , width :"70%"}}>
                <FireTruckIcon/>
                <Typography>Free Delivery <br/>
                  Enter your postal code for Delivery Availability</Typography>
                  </Box>
               
                  <Box sx={{m:"0px  30px" ,border :"1px solid black" ,display :"flex" , justifyContent :"center" , gap :"15px" , width :"70%"}}>
              <RestoreIcon/>
            
            <Typography>Return Delivery <br/>
            Free 30 Days Delivery Returns. Details</Typography>
            </Box>
              </Paper>
          </CardContent>
      </CardActionArea>
  </Card>
    );
  };

  return (
    <Container>
      {loading ? <Loading /> : error ? <Typography color="error">{error}</Typography> : <ShowProduct />}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Related Items</Typography>
    
      </Box>
    </Container>
  );
};

export default DetailsShope;
