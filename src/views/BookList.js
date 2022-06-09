import React from 'react';
import BookBrowser from '../components/BookBrowser';
import Typography from '@mui/material/Typography';

export default function BookList() {
  return (
    <Typography style={{backgroundColor: "#F3ECE7", height:"100vh"}}>
    <BookBrowser/>
    </Typography>
  )
}
