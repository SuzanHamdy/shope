import { Button, Container, Paper, TextField } from '@mui/material'
import React from 'react'

import { NavLink } from 'react-router-dom'

const Account = () => {


  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  return (
    <>
    <h3 style={{textAlign :"center"}}> Welcome({storedUser.username}  ! )    </h3>
    <Container sx={{marginTop:"30px" ,display :{sm :"flex"} ,justifyContent :"space-between", gap :"30px"}} >
      
      <section>
<h4> Manage My Account</h4>

<NavLink  to= "/order" >My Orders</NavLink>
<p>My Profile</p>
<p>Address Book</p>
<p>My Payment Options</p>
<NavLink to ="/wishlist" >My WishList</NavLink>
<p>My Returns</p>
<p>My Cancellations</p>
      </section>

    <Paper sx={{flexGrow :"1" , p:"20px"}}>
<Container>
  <h3> Edit Your Profile</h3>
  <TextField label="First Name" variant="filled" sx={{m:"10px" }}  />
  <TextField label="Last Name" variant="filled"  sx={{m:"10px" }}   /> <br/>
  <TextField label=" Email" variant="filled"  sx={{m:"10px" }}  />
  <TextField label="Address" variant="filled"  sx={{m:"10px" }}  /> <br/>
<h5>Password Changes</h5>
<TextField    fullWidth label="Current Password" variant="filled" type='password' sx={{m:"10px" }}  /> <br/>
  <TextField  fullWidth   label="New Password" variant="filled" type='password' sx={{m:"10px" }}  /> <br/>
  <TextField  fullWidth    label="Confirm New Password" type='password' variant="filled"  sx={{m:"10px" }}  /> <br/>
<div className='d-flex'>
  <div className='w-50'></div>
  <div>
<Button variant="text"  color='error' >Cancel</Button>
<Button variant="contained" color='error' >Save Changes</Button>
 </div>
</div>
</Container>
    </Paper>


    </Container>
    </>
  )
}

export default Account





