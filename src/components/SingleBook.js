import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {useParams} from 'react-router-dom';
import useBook from '../hooks/useBook';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Error from './Error';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {

    const {bookId} =  useParams()
  
    const {book, error} = useBook(bookId);
    
    if (error){
      return (
        <Box sx={{display:"flex"}}>
          <Error>{error}</Error>
        </Box>
      )
    }
    if(!book){
          return(
          <Box sx={{display:"flex"}}>
            <CircularProgress/>
          </Box>
          )
        }

  return (<>
   <Typography style={{backgroundColor: "#F3ECE7", height:"100vh"}}>
     <br/>
     <br/>
     <br/>
     <Typography variant ="h3" component="div" color ="#05204a" sx={{display: 'flex', justifyContent: 'center', border: '3px solid #6b0504', padding:3, mb:10, fontFamily:"Lato, sans-serif"}}>{book.title}</Typography>
    <Box sx={{ flexGrow: 1,pl:5,pr:5}}>
      <Grid container spacing={5}>
        <Grid item xs={3.5} md={3.5}>
          <Item sx={{backgroundColor:"#05204a", color:"#FFFFFA", fontFamily:"Lato, sans-serif"}}>              
            <h3>Title: </h3><h3>{book?.title}</h3>
            <hr/>
              <br/>
              <h3 color="#3a6ea5">Author: </h3><h3>{book?.author}</h3>
              <hr/>
              <br/>
              <h3>Summary: </h3><h3>{book?.summary}</h3>
            </Item>
        </Grid>
        <Grid item xs={5} md={5}>
          <Item sx={{backgroundColor:"#ba8f95"}}>
            <img width="400px" src= {book?.img} alt="book-img"/>
          </Item>
        </Grid>
        <Grid item xs={3.5} md={3.5}>
          <Item sx={{backgroundColor:"#05204a", color:"#fffffa", fontFamily:"Lato, sans-serif"}}>
              <h3>ID: </h3><h3>{book?.id}</h3>
              <hr/>
              <br/>
              <h3>Pages: </h3><h3>{book?.pages}</h3>
              <hr/>
              <br/>
              <h3>Subject: </h3><h3>{book?.subject}</h3>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Typography>
  </>);
}
