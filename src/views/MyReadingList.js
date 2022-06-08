import ImageList from '../components/ImageList';
import {useContext} from 'react';
import Typography from '@mui/material/Typography';
import {BookContext} from '../context/BookContext';

export default function MyReadingList(){
        const {readingList} = useContext(BookContext)
        if(readingList.length<=0){
            return(
                <Typography variant="h3" color="primary" sx={{display:"flex", justifyContent: 'center'}}>No Books In Your List Yet</Typography>
            )
        }
    return(
        <>
            <ImageList/>
        </>
    )


}