import './App.css';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import ImageList from './components/ImageList';
import Dialog from './components/Dialog';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import Button from './components/Button';
import { CancelToken } from 'apisauce';
import {getUser} from './api/apiBasicAuth';
import apiUser from './api/apiUser';
import apiBook from './api/apiBook';
import BookBrowser from './components/BookBrowser';
import SubjectBar from './components/SubjectBar';
import Typography from '@mui/material/Typography';
import Test from './components/Test';
import MyReadingList from './views/MyReadingList';

let userData = {
  "email" : "jalenfooster@gmail.com",
  "first_name" : "Jalen",
  "last_name" : "Fooster-Barrino",
  "password" : "DummyPassword"
}

const myToken = "fC87XwkBvWca7HVQbMWGPKnMi7O8F3HKecnhwGUv9WA"

const handleAPITest= async ()=>{
  const source = CancelToken.source();
  const response_object= await apiBook.getBooks(source.token);
  console.log(response_object)
}

function App() {
  return (
    <>
      <Navbar/>
      <LoginForm/>
      <br/>
      <RegisterForm/>
      {/* <Test/>
      <br/>
      <LoginForm/>
      <br/>
      <Typography sx={{mb:10, display: "flex", justifyContent: 'center'}}>
      <Button color="info" onClick={handleAPITest}>API TESTER</Button>
      </Typography>
      <br/> */}
      {/* <MyReadingList/> 
      <br/>
      <BookBrowser/>     
      <br/> */}
      
    </>
  );
}

export default App;
