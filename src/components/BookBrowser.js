import React,{useContext} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BookCard from './BookCard';
import { Typography } from '@mui/material';
import useBooks from '../hooks/useBooks';
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error';
import {BookContext} from '../context/BookContext';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const {bookList, setBookList} = useContext(BookContext)
  const {error, books} = useBooks()
  setBookList(books)

  if(error){
    return(
      <Box sx={{display:"flex"}}>
        <Error>{error}</Error>
      </Box>
    )
  }

  if(!bookList){
    return(
      <Box sx={{display:"flex"}}>
        <CircularProgress/>
      </Box>
    )
  }


  return (<>
       <br/>
     <br/>
     <br/>
    <Typography variant ="h3" component="div" color ="#05204a" sx={{display: 'flex', justifyContent: 'center', border: '3px solid #6b0504', padding:3, mb:5, fontFamily:"Lato, sans-serif"}}>Explore Book Collection</Typography>
  
    <br/>
    {/* <SubjectBar/> */}
    <br/>
    <Box sx={{ flexGrow: 1, pl:5,pr:5}}>
      <Grid container spacing={10}>
        {bookList?.map((book)=>(
        <Grid item lg={3} md={4} sm={6} xs={12} key={book.id} sx={{display:"flex", justifyContent:"center"}}>
          <Item>
            <BookCard book={book}/>
          </Item>
        </Grid>
        ))}
      </Grid>
    </Box>
  </>);
}