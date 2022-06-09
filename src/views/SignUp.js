import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RegisterForm from '../forms/RegisterForm';
import image from '../img/library.jpg';

export default function SignUp() {
  return (
    <Paper style={{backgroundImage: `url(${image})`, height:"100vh", backgroundPosition: "center", backgroundSize:"cover", postion:"sticky"}}>
        <Typography color="#fffffa"variant="h2" sx={{display:"flex", justifyContent: 'center', pt:9, mb:1, fontFamily: 'Prata, serif'}}>Sign Up</Typography>
        <Typography sx={{display:"flex", justifyContent: 'center'}}><RegisterForm/></Typography>
    </Paper>
  )
}
