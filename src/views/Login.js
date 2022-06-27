import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LoginForm from '../forms/LoginForm';
import image from '../img/library.jpg';

export default function Login() {
  return (
    <Paper style={{backgroundImage: `url(${image})`, height:"100vh", backgroundPosition: "center", backgroundSize:"cover"}}>
        <Typography color="#fffffa"variant="h2" sx={{display:"flex", justifyContent: 'center', pt:20, mb:2, fontFamily: 'Prata, serif'}}>Login</Typography>
        <Typography sx={{display:"flex", justifyContent: 'center'}}><LoginForm/></Typography>
    </Paper>
  )
}
