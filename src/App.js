import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import ImageList from './components/ImageList';
import Dialog from './components/Dialog';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';
import Button from './components/Button';

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
      <Button>Submit</Button>
      <br/>
      <ImageList/>
    </>
  );
}

export default App;
