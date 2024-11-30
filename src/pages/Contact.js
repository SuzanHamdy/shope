import { Box, Container, Paper, TextField, Typography } from '@mui/material'
import React from 'react';
import Divider from '@mui/material/Divider';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

import { Button, FloatingLabel, Form } from 'react-bootstrap';
const Contact = () => {
  return (
    <Container>
      <Box sx={{display:"flex" ,justifyContent :"space-between" ,flexWrap :"wrap", m:"40px 5px"}}>
      <Paper elevation={3} sx={{p :"20px"}}>
<Typography variant="h3" color="initial">  <Button  variant="danger" ><CallIcon/> </Button> Call To Us </Typography><br/> 
<Typography variant="body1" color="initial"> We are available 24/7, 7 days a week. <br/> Phone: +8801611112222
<br/>
</Typography><br/> 
<Divider component="div" role="presentation"/><br/> 
<Typography variant="body1" color="initial">  <Button  variant="danger" ><MailIcon/></Button>  Write To US <br/>
Fill out our form and we will contact you within 24 hours.<br/>
Emails: customer@exclusive.com<br/>
Emails: support@exclusive.com<br/>
</Typography>

      </Paper>
      <Paper elevation={3} >
      <TextField label="Your Name *" variant="filled" />{' '}
      <TextField label="Your Email *" variant="filled" />{' '}
      <TextField label="Your Phone *" variant="filled" /><br/> <br/>
      <FloatingLabel controlId="floatingTextarea2" label="Send Massage"  >
        <Form.Control
          as="textarea"
          placeholder="Send Massage "
          style={{ height: '200px' ,backgroundColor :"gray",opacity :"0.1" }}
        />
      </FloatingLabel><br/>
      <Button  variant="danger"  style={{width:"100%" }}>
      Send Massage</Button>
      </Paper>
      </Box>
    </Container>
  )
}

export default Contact ;


