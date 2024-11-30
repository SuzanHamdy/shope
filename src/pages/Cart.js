import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import empty from "../assets/9038.jpg";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart) || [];
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleQuantityChange = (index, newQuantity) => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities[index] = Math.max(1, newQuantity || 1);
      return updatedQuantities;
    });
  };

  const calculateSubtotal = (quantity, price) => quantity * price;

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const total = products.reduce(
    (acc, product, index) =>
      acc + calculateSubtotal(quantities[index], Number(product.price || 0)),
    0
  );

  const ShowCart = () => {
    if (products.length === 0) {
      return (
        <Box textAlign="center">
          <img src={empty} alt="Empty cart" style={{ maxWidth: "300px", marginBottom: "20px" }} />
          <Typography variant="h5">Your cart is empty!</Typography>
          <Button variant="contained" color="error" onClick={() => navigate("/AllProducts")}>
            Start Shopping
          </Button>
        </Box>
      );
    }

    return (
      <>
        {products.map((product, index) => (
          <Box key={product.id}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
                marginY: 1,
              }}
            >
              <Typography variant="body1" sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                <img
                  src={product.thumbnail || product.image}
                  alt={product.title}
                  style={{ maxWidth: "50px", marginRight: "10px" }}
                />
                {product.title}
              </Typography>
              <Typography variant="body1" sx={{ flex: 1 }}>
                ${Number(product.price || 0).toFixed(2)}
              </Typography>
              <TextField
                type="number"
                value={quantities[index]}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                sx={{ width: "60px" }}
                inputProps={{ min: 1 }}
              />
              <Typography variant="body1" sx={{ flex: 1 }}>
                ${calculateSubtotal(quantities[index], Number(product.price || 0)).toFixed(2)}
              </Typography>
              <Button onClick={() => handleRemove(product.id)} color="error">
                <CloseRoundedIcon />
              </Button>
            </Paper>
          </Box>
        ))}

        <Container>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
            <Button variant="outlined" color="error" onClick={() => navigate("/AllProducts")}>
              Return to Shop
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setQuantities(products.map(() => 1))}
            >
              Reset Quantities
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <TextField size="small" label="Coupon Code" variant="outlined" color="error" />
              <Button variant="contained" size="large" color="error">
                Apply Coupon
              </Button>
            </Box>
            <Box sx={{ border: "1px solid black", padding: "30px" }}>
              <Typography variant="h4">Cart Total</Typography>
              <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
                <p>Subtotal:</p>
                <p>${total.toFixed(2)}</p>
              </Typography>
              <Divider />
              <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
                <p>Shipping:</p>
                <p>Free</p>
              </Typography>
              <Divider />
              <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
                <p>Total:</p>
                <p>${total.toFixed(2)}</p>
              </Typography>
              <Button
                variant="contained"
                color="error"
                sx={{ marginTop: 2 }}
                onClick={() => navigate("/CheckOut")}
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        </Container>
      </>
    );
  };

  return (
    <Container>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
          marginBottom: 2,
        }}
      >
        <Typography variant="body1" sx={{ flex: 1 }}>
          Product
        </Typography>
        <Typography variant="body1" sx={{ flex: 1 }}>
          Price
        </Typography>
        <Typography variant="body1" sx={{ flex: 1 }}>
          Quantity
        </Typography>
        <Typography variant="body1" sx={{ flex: 1 }}>
          Subtotal
        </Typography>
      </Paper>
      <ShowCart />
    </Container>
  );
};

export default Cart;
