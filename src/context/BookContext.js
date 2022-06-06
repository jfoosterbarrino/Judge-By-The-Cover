import {createContext} from 'react';
import useBooks from '../hooks/useBooks';

export const BookContext = createContext()

const BookContextProvider = ({children})=>{

    

    const values = {
        bookList: useBooks()
    }

    return(
        <BookContext.Provider value = {values}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider