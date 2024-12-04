import Phone from "../assets/Frame 563.png";
import EastIcon from "@mui/icons-material/East";
import Phoned from "../assets/22.jpg";
import {  useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
function Side() {
  const navigate = useNavigate();
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          width: "25%",
          borderRight: "1px solid gray",
          marginRight: "40px",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Woman's Clothing</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Men's Fashion</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Electronics</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Home & Lifestyle</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Medicine</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Sports & Outdoor</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Baby's & Toys</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>Groceries & Pets</ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText>"Health & Beauty"</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box>
        <Container
          sx={{
            bgcolor: "black",
            display: "flex",
            justifyContent: "space-between",
            height: "60vh",
          }}
        >
          <Box sx={{ width: "40%", padding: "20px" }}>
            <img src={Phone} alt="Phone" height="90px" />
            <br /> <br />
            <Typography
              variant="body1"
              sx={{
                color: "white",
                mx: { sm: "10px" },
                fontSize: { sm: "30px" },
              }}
            >
              {" "}
              iPhone 14 Series
              <br /> Up to 10% off Voucher <br />
            </Typography>{" "}
            <br />
            <Button
            onClick={()=>{navigate('/AllProducts')}}
              component="a"
              sx={{ color: "white", mx: "10px", fontSize: { sm: "30px" } }}
              endIcon={<EastIcon />}
            >
              Shop Now
            </Button>
          </Box>
          <Box sx={{ width: "40%" }}>
            <img src={Phoned} alt="Phone" width=" 100%" height="400px" />
          </Box>
        </Container>
      </Box>
    </Container>
  );
}

export default Side;
