import React from 'react'
import Typography from '@mui/material/Typography';
import image from '../img/books.jpg';

export default function HomePage() {

  return (<Typography style={{backgroundImage: `url(${image})`, height:"100vh", backgroundPosition: "center", backgroundSize:"contain"}}>
    <Typography variant="h3" color="#fffffa" style={{display:"flex", justifyContent: "center", position:"absolute", left:"50%", top:"35.5%", transform:"translate(-50%, -50%)", fontFamily: 'Prata, serif', border:"2px solid #fffffa", padding:40, backgroundColor: "rgba(255,192,203,.6)"}}>Judge By The Cover</Typography>
  </Typography>)
}
