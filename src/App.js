import './App.css';
import Navbar from './components/Navbar';
import MyReadingList from './views/MyReadingList';
import Box from '@mui/material/Box';
import {Routes, Route} from 'react-router-dom';
import HomePage from './views/HomePage';
import Login from './views/Login';
import Logout from './views/Logout';
import BookList from './views/BookList';
import SignUp from './views/SignUp';
import SingleBook from './components/SingleBook';
import RequireAccount from './components/RequireAccount';


function App() {

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
