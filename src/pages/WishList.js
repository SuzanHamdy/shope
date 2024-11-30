// import React from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardActionArea,
//   CardContent,

//   Container,
//   Grid,
//   IconButton,
//   Rating,
//   Typography,
// } from "@mui/material";
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { remove } from "../store/WishSlice";

// const WishList = () => {
//   const products = useSelector((state) => state.wish) || [];
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
 
//   const handleRemove = (productId) => {
//     dispatch(remove(productId));
//   };
//   const ShowWishlist = () => {
//     if (products.length === 0) {
//       return (
//         <Box textAlign="center" marginTop={5}>
//           <Typography variant="h5">Your wishlist is empty!</Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => navigate("/allproducts")}
//             sx={{ marginTop: 3 }}
//           >
//             Start Shopping
//           </Button>
//         </Box>
//       );
//     }
//     return (
//       <Grid container spacing={3}>
//         {products.map((product) => (
//          if(!product.id){
//           return (
//           <>
       
//           <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//             <Card
//               sx={{
//                 width: "100%",
//                 height: "450px",
//                 "&:hover #button": { display: "block" },
//               }}
//             >
//               <CardActionArea>
//                 <Box
//                   sx={{
//                     backgroundImage: `url(${product.thumbnail || product.image})`,
//                     height: "250px",
//                     backgroundPosition: "center",
//                     backgroundSize: "contain",
//                     backgroundRepeat: "no-repeat",
//                     display: "flex",
//                     justifyContent: "space-between",
//                     flexDirection: "column",
//                     p: "10px",
//                   }}
//                 >
//                   <Typography
//                     variant="body1"
//                     sx={{ display: "flex", justifyContent: "space-between" }}
//                   >
//                     <Typography sx={{ color: "red", fontWeight: "bolder" }}>
//                       {(product.rating.count / 10|| product.discountPercentage) }%
//                     </Typography>
//                       <IconButton   onClick={() => handleRemove(product.id)}>
//                       <DeleteForeverIcon/>
//                       </IconButton>
//                   </Typography>
//                   <Button
//                     id="button"
//                     variant="contained"
//                     sx={{
//                       display: "none",
//                       bgcolor: "black",
//                       color: "white",
//                     }}
//                     onClick={() => navigate(`/shope/${product.id}`)}
//                   >
//                     Add to Cart
//                   </Button>
//                 </Box>
//                 <CardContent>
//                   <Typography gutterBottom variant="h6" component="div">
//                     {product.title.substring(0, 15)}...
//                   </Typography>
//                   <Typography
//                     variant="h5"
//                     sx={{ color: "text.secondary", fontWeight: "bolder" }}
//                   >
//                     ${product.price}
//                   </Typography>
//                   <Rating
//                     name="rating"
//                     value={product.rating.rate || product.rating}
//                     readOnly
//                   />
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//           </>
//                   )
//          }
//         ))}
//       </Grid>
//     );
   
//   };

//   return (
//     <Container>
//          <Box
//         sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}
//       >
//         <Typography variant="body1">
//           Wishlist ({products.length})
//         </Typography>
//         <Button variant="outlined"  onClick={() => handleRemove()}>
//           Move All to Bag
//         </Button>
//       </Box>
//       <ShowWishlist />
//     </Container>
//   );
// };

// export default WishList;


















import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { remove } from "../store/WishSlice";

const WishList = () => {
  const products = useSelector((state) => state.wish) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleRemoveAll = () => {
    products.forEach((product) => {
      dispatch(remove(product.id));
    });
  };

  const ShowWishlist = () => {
    if (products.length === 0) {
      return (
        <Box textAlign="center" marginTop={5}>
          <Typography variant="h5">Your wishlist is empty!</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/allproducts")}
            sx={{ marginTop: 3 }}
          >
            Start Shopping
          </Button>
        </Box>
      );
    }

    return (
      <Grid container spacing={3}>
        {products.map((product) => {
          if (!product.id) return null; // Skip items without an ID

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  width: "100%",
                  height: "450px",
                  "&:hover #button": { display: "block" },
                }}
              >
                <CardActionArea>
                  <Box
                    sx={{
                      backgroundImage: `url(${product.thumbnail || product.image})`,
                      height: "250px",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      p: "10px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={{ color: "red", fontWeight: "bolder" }}>
                        {(product.rating?.count / 10 || product.discountPercentage) || 0}%
                      </Typography>
                      <IconButton onClick={() => handleRemove(product.id)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </Typography>
                    <Button
                      id="button"
                      variant="contained"
                      sx={{
                        display: "none",
                        bgcolor: "black",
                        color: "white",
                      }}
                      onClick={() => navigate(`/shop/${product.id}`)}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title.substring(0, 15)}...
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "text.secondary", fontWeight: "bolder" }}
                    >
                      ${product.price}
                    </Typography>
                    <Rating
                      name="rating"
                      value={product.rating?.rate || product.rating || 0}
                      readOnly
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  return (
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}
      >
        <Typography variant="body1">Wishlist ({products.length})</Typography>
        <Button variant="outlined" onClick={handleRemoveAll}>
          Move All to Bag
        </Button>
      </Box>
      {ShowWishlist()}
    </Container>
  );
};

export default WishList;
