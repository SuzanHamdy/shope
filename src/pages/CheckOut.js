import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { pink } from "@mui/material/colors";
import Bank from "../assets/8bf7ea6.png";
import Bk from "../assets/f98aed88a.png";
import Ba from "../assets/f8e8.png";
import Ban from "../assets/ffe267.png";
import { useDispatch, useSelector } from "react-redux";

const calculateSubtotal = (quantity, price) => quantity * price;

const ShowCart = ({ products, quantities }) => {
  if (!products.length) {
    return <Typography variant="h6"></Typography>;
  }

  return (
    <>
      {products.map((product, index) => (
        <Box key={product.id} sx={{width :"100%" }}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              marginY: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{ flex: 1, display: "flex", alignItems: "center" }}
            >
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
            <Typography variant="body1" sx={{ flex: 1 }}>
              ${calculateSubtotal(quantities[index], product.price).toFixed(2)}
            </Typography>
          </Paper> <br/> 
        </Box>
      ))}

      <Container>
        <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between" }}>
        <p>  <Radio
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />Bank</p>
          <Box sx={{ display: "flex", gap: 1 }}>
            <img src={Bank} alt="Bank" width={60}  height={40}/>
            <img src={Bk} alt="Bk" width={60} height={30} />
            <img src={Ba} alt="Ba" width={60} height={30} />
            <img src={Ban} alt="Ban" width={60}height={40} />
          </Box>
        </Typography>

        <Typography variant="body2" >
          <Radio
            name="paymentMethod"
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          Cash on Delivery
        </Typography>

        <Box sx={{ display: "flex", justifyContent:"flex-start" }}>
          <TextField size="small" label="Coupon Code" variant="outlined" color="error" />
          <Button variant="contained" size="large" color="error">
            Apply Coupon
          </Button>
        </Box>

        <Button variant="contained" color="error" sx={{ margin:"10px "}}>
          Place Order
        </Button>
      </Container>
    </>
  );
};

const CheckOut = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart) || [];
  const quantities = useSelector((state) => state.quantities) || [];

  return (
    <Container sx={{ display: "flex", gap: 4 }}>
      <Box   sx={{ width :"50%"}}>
        <Typography variant="h5">Billing Details</Typography>
        <TextField label="First Name*" variant="filled" fullWidth margin="normal" />
        <TextField label="Company Name" variant="filled" fullWidth margin="normal" />
        <TextField label="Street Address*" variant="filled" fullWidth margin="normal" />
        <TextField
          label="Apartment, floor, etc. (optional)"
          variant="filled"
          fullWidth
          margin="normal"
        />
        <TextField label="Town/City*" variant="filled" fullWidth margin="normal" />
        <TextField label="Phone Number*" variant="filled" fullWidth margin="normal" />
        <TextField label="Email Address*" variant="filled" fullWidth margin="normal" />
        <Checkbox
          defaultChecked
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
        />
        Save this information for faster checkout next time
      </Box>
      <Box sx={{ flexGrow:"1"}}>
        <ShowCart products={products} quantities={quantities} />
      </Box>
    </Container>
  );
};

export default CheckOut;
