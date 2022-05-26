import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import ImageList from './components/ImageList'
import Dialog from './components/Dialog'

function App() {
  return (
    <>
      <Navbar/>
      <br/>
      <Card>The Great Gatsby</Card>
      <br/>
      <Dialog>Add to My List</Dialog>
      <br/>
      <ImageList/>
    </>
  );
}

export default App;
