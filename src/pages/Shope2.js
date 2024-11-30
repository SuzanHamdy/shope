import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";

import {
  Button,
  Box,
  CardActionArea,
  CardContent,
  IconButton,
  Rating,
  Skeleton,
  Typography,
  Container,
  Card,
  Checkbox,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import "../index.css";
import { add } from "../store/WishSlice";
import { useDispatch } from "react-redux";



const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Shope2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
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

  const Loading = () => {
    const skeletonArray = new Array(4).fill(null);
    return (
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {skeletonArray.map((_, index) => (
          <Box key={index} className="mb-4">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={220}
              height={160}
            />
            <Skeleton variant="text" animation="wave" width={100} height={10} />
            <Skeleton variant="text" animation="wave" width={160} height={30} />
            <Skeleton variant="text" animation="wave" width={200} height={20} />
          </Box>
        ))}
      </Container>
    );
  };

  const addfavorate = (product) => {
    dispatch(add(product));
    document.getElementById("wis").disabled = true;
  };

  const storedUser = JSON.parse(localStorage.getItem("user"));










  const Show = () => {
    return (
      <Row xs={1} sm={2} md={3} lg={4}>
        {data.map((product) => (
          <Col>
            <Card
              key={product.id}
              sx={{
                Width: "250px",
                height: "450px",
                marginBottom: "30px",
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
                        <Checkbox
                          id="wis"
                          onClick={() => {
                            if (storedUser) {
                              addfavorate(product)
                            } else {
                              alert("Please login to add products to your cart.");
                            }
                          }}
                        
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                          {...label}
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                        />
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
                        />
                      </IconButton>
                    </Typography>
                 </Typography>
                 <Button
                    id="button"
                    variant="contained"
                    sx={{ display: "none", flexWrap: "wrap", bgcolor: "black" }}
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
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ color: "text.secondary", fontWeight: "bolder" }}
                  >
                    ${product.price}
                  </Typography>
                  <Rating name="simple-controlled" value={product.rating} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  return <Container> {loading ? <Loading /> : <Show />}</Container>;
};

export default Shope2;
