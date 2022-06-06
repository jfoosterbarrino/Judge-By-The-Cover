import React, {useContext, useState} from 'react';
import {BookContext} from '../context/BookContext';
import Button from './Button';

export default function Test() {
    const {bookList} = useContext(BookContext)
    const [books, setBooks]= useState(bookList)

    const handleClick=()=>{
        setBooks(bookList)
        console.log("Here are the books")
        console.log(books)
    }

  return (<>
  <Button color="info" onClick={handleClick}>CONSOLE BOOKS</Button>

  </>)
}
