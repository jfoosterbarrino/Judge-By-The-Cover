import React, {useContext} from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import RegisterForm from '../forms/RegisterForm';
import image from '../img/library.jpg';
import {AppContext} from '../context/AppContext';

export default function SignUp() {
  const {user} = useContext(AppContext)
  
  return (
    <Paper style={{backgroundImage: `url(${image})`, height:"100vh", backgroundPosition: "center", backgroundSize:"cover"}}>
        <Typography color="#fffffa"variant="h2" sx={{display:"flex", justifyContent: 'center', pt:9, mb:1, fontFamily: 'Prata, serif'}}>{user?.token? "Edit Profile":"Sign Up"}</Typography>
        <Typography sx={{display:"flex", justifyContent: 'center'}}><RegisterForm/></Typography>
    </Paper>
  )
}
