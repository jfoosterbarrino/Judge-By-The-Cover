import ImageList from '../components/ImageList';
import {useContext} from 'react';
import Typography from '@mui/material/Typography';
import {BookContext} from '../context/BookContext';

export default function MyReadingList(){
        const {readingList} = useContext(BookContext)
        if(readingList?.length<=0){
            return(
                <Typography variant="h3" color="primary" sx={{display:"flex", justifyContent: 'center', pt:10, backgroundColor: "#FDF2EE", height:"100vh"}}>No Books In Your List Yet</Typography>
            )
        }
    return(
        <>
        <Typography style={{backgroundColor: "#F3ECE7", backgroundSize:"100%"}}>
            <ImageList/>
        </Typography>
        </>
    )


}