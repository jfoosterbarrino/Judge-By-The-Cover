import React,{useContext, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BookCard from './BookCard';
import { Typography } from '@mui/material';
import Button from './Button';
import SubjectBar from './SubjectBar';
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
//   const {bookList} = useContext(BookContext)
//   const [books, setBooks]= useState(bookList)

//   const handleClick=()=>{
//     setBooks(bookList)
//     console.log("Here are the books")
//     console.log(books)
// }
  
  const {error, books} = useBooks()

  if(error){
    return(
      <Box sx={{display:"flex"}}>
        <Error>{error}</Error>
      </Box>
    )
  }

  if(!books){
    return(
      <Box sx={{display:"flex"}}>
        <CircularProgress/>
      </Box>
    )
  }


  return (<>
    <Typography variant ="h3" component="div" color ="secondary" sx={{display: 'flex', justifyContent: 'center'}}>Explore Book Collection</Typography>
    <hr/>
    <br/>
    {/* <Button onClick={handleClick}>Show</Button>
    <br/> */}
    <SubjectBar/>
    <br/>
    <Box sx={{ flexGrow: 1, mb:10 }}>
      <Grid container spacing={10}>
        {books.map((book)=>(
        <Grid item lg={3} md={4} sm={6} xs={12} key={book.id} sx={{display:"flex", justifyContent:"center"}}>
          <Item>
            <BookCard book={book}/>
                {/* <Typography variant="h4" color="#ba8f95">
                {book.title}
                </Typography>
                <Typography variant="body1" color="#ba8f95">
                By: {book.author}
                </Typography>
                <br/>
                <img height="150" src={book.img}></img>
                <Typography variant="body1" color="#ba8f95">
                    <br/>
                    <EditButton>Add to My List</EditButton>
                    <br/>
                    <br/>
                    <strong>Summary</strong>
                <br/>
                {book.summary}
                <br/>
                <br/>
                <strong>Pages: </strong>{book.pages}
                <br/>
                <strong>Subject: </strong>{book.subject}
                <br/>
                <strong>ID: </strong>{book.id}
                </Typography> */}

          </Item>
        </Grid>
        ))}
        

      </Grid>
    </Box>
  </>);
}