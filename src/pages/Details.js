
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



const Details = () => {
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
      const res = await fetch(`https://dummyjson.com/products/${id}`);
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
      document.getElementById("bttn").disabled = true;
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
      <Card sx={{ maxWidth: "lg", mx: "auto", mt: 4 }}>
        <CardActionArea sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
            {product.images.map((img, index) => (
              <img key={index} src={img} alt={`${product.title} image ${index + 1}`} width={100} />
            ))}
          </Box>
          <Box sx={{ p: 2 }}>
            <img src={product.thumbnail} alt={product.title} style={{ maxWidth: "100%" }} />
          </Box>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {product.title}
            </Typography>
            <Rating value={4} readOnly />
            <Typography variant="h6" sx={{ mt: 2 }}>
              ${product.price}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {product.description}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">Select Size:</Typography>
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
            </Box>
            <Box sx={{ mt: 3 }}>
              <ButtonGroup>
                <Button    color="error" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</Button>
                <Button    color="error">{quantity}</Button>
                <Button    color="error" onClick={() => setQuantity((q) => q + 1)}>+</Button>
              </ButtonGroup>
              <Button
              id="bttn"
                variant="contained"
                color="error"
                sx={{ ml: 2 }}
                onClick={ ()=>   handleAddToCart(product)}
              >
                Buy Now
              </Button>
              <Button variant="outlined"   color="error" sx={{ ml: 1 }}>
                <FavoriteBorderIcon />
              </Button>
            </Box>
            <Paper elevation={1} sx={{ mt: 3, p: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <FireTruckIcon sx={{ mr: 1 }} />
                <Typography>Free Delivery: Enter your postal code for availability.</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <RestoreIcon sx={{ mr: 1 }} />
                <Typography>30-Day Free Returns. Details inside.</Typography>
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

export default Details;
