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
import Box from '@mui/material/Box';
import {Routes, Route} from 'react-router-dom';
import {useContext} from 'react';
import {AppContext} from './context/AppContext'
import HomePage from './views/HomePage';
import Login from './views/Login';
import Logout from './views/Logout';
import BookList from './views/BookList';
import SignUp from './views/SignUp';
import SingleBook from './components/SingleBook';
import RequireAccount from './components/RequireAccount';


let userData = {
  "email" : "jalenfooster@gmail.com",
  "first_name" : "Jalen",
  "last_name" : "Fooster-Barrino",
  "password" : "DummyPassword"
}

const myToken = "fC87XwkBvWca7HVQbMWGPKnMi7O8F3HKecnhwGUv9WA"


const handleAPITest= async ()=>{
  const source = CancelToken.source();
  const response_object= await apiUser.delUser("DtS_-E7Rn0fBBAlHRt4BZKHqrANnhNWK5QK3R_YOpow", source.token);
  console.log(response_object)
}

function App() {

  const {user} = useContext(AppContext)

  return (
    <>
      <Navbar/>
        <Box sx={{minHeight: '90vh'}}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/bookstore" element={<RequireAccount redirectTo={'/login'}><BookList/></RequireAccount>}/>
            <Route path="/bookstore/:bookId" element={<RequireAccount redirectTo={'/login'}><SingleBook/></RequireAccount>}/>
            <Route path="/readinglist" element={<RequireAccount redirectTo={'/login'}><MyReadingList/></RequireAccount>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </Box>
      
    </>
  );
}

export default App;
