import React from 'react'
import { Container} from 'react-bootstrap';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';



const Error = () => {
  const navigate = useNavigate()
  return (
    <>
     <Container   >
        <Typography sx={{ fontSize :"120px"  , textAlign :"center"}} variant="h2" color="initial">404 Not Found </Typography>  
        <Typography  textAlign ="center" variant="body1" color="initial"> Your visited page not found. You may go home page.</Typography> <br/> <br/>

       
       <Button  sx={{ marginLeft :"38%" ,}} onClick={()=>{navigate("./Home")}}  variant="contained" color="error" >
        Back to home page
        </Button>
    
        </Container> <br/> <br/> <br/>
    </>
  )
}

export default Error



// 
// 