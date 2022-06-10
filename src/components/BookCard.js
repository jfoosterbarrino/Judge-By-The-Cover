import React, {useContext} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import EditButton from './Button';
import {BookContext} from '../context/BookContext';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import {useNavigate} from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Error from './Error';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookCard({error, book}) {
  const [expanded, setExpanded] = React.useState(false); 
  const {addBook, removeBook, readingList} = useContext(BookContext)
  const navigate = useNavigate()


  if(error){
    return(
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

  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {console.log(book)}
    <Typography color="#05204a">
      <CardHeader
      
        action={
          <IconButton aria-label="Add/Remove" color="success">
            
          </IconButton>
        }
        title={book?.title}
        subheader={book?.author}
      />
      <Typography color="#3a6ea5" sx={{display:"flex", justifyContent: 'space-between', pr:2, pl:2,pb:1}}>
      <MenuBookOutlinedIcon key="info" color="success"onClick={()=>navigate('/bookstore/'+book.id)}/>
      {readingList.includes(book)?
            <RemoveCircleOutlineIcon key="remove" onClick={()=>{removeBook(book)}}/>
            :
            <AddCircleOutlineOutlinedIcon key="add" onClick={()=>{addBook(book)}}/>
            }</Typography>
    </Typography>
      <CardMedia
        component="img"
        height="194"
        image={book?.img}
        alt={book?.title}
      />
      <CardContent>
        <Typography  variant="body2" color="secondary" sx={{fontFamily:"Lato, sans-serif"}}>
        {book?.summary}
        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>            
          <hr/>
            <br/>
          <Typography variant="body2" color="primary" sx={{display:"flex", justifyContent: 'center', fontFamily:"Lato, sans-serif"}} paragraph>
            ID: {book?.id}
          </Typography>
          <Typography variant="body2" color="primary" sx={{display:"flex", justifyContent: 'center', fontFamily:"Lato, sans-serif"}} paragraph>
            Pages: {book?.pages}
          </Typography>
          <Typography variant="body2" color="primary" sx={{display:"flex", justifyContent: 'center', fontFamily:"Lato, sans-serif"}} paragraph>
            Subject: {book?.subject}
          </Typography>
          <Typography sx={{display:"flex", justifyContent: 'center'}} paragraph>
            {readingList.includes(book)?
            <EditButton color="info" key="remove" onClick={()=>{removeBook(book)}}>Remove From List</EditButton>
            :
            <EditButton color="info" key="add2" onClick={()=>{addBook(book)}}>Add To My List</EditButton>
            }
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
 

