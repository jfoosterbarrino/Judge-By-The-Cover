import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ImageList from './components/ImageList';
import Dialog from './components/Dialog';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import Button from './components/Button';
import { CancelToken } from 'apisauce';
import {getUser} from './api/apiBasicAuth';
import apiUser from './api/apiUser';
import apiBook from './api/apiBook';

let userData = {
  "email" : "jalenfooster@gmail.com",
  "first_name" : "Jalen",
  "last_name" : "Fooster-Barrino",
  "password" : "DummyPassword"
}

const myToken = "fC87XwkBvWca7HVQbMWGPKnMi7O8F3HKecnhwGUv9WA"

const handleAPITest= async ()=>{
  const source = CancelToken.source();
  const response_object= await apiUser.putUser(myToken, userData, source.token);
  console.log(response_object)
}

function App() {
  return (
    <>
      <Navbar/>
      <br/>
      <LoginForm/>
      <br/>
      <RegisterForm/>
      <br/>
      <Card backgroundColor="primary">The Great Gatsby</Card>
      <br/>
      <Dialog>Add to My List</Dialog>
      <br/>
      <Button color="primary" onClick={handleAPITest}>API TESTER</Button>
      <br/>
      <ImageList/>
    </>
  );
}

export default App;
