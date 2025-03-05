import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from  './components/Card';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from './components/Accordion';
import Image from 'react-bootstrap/Image';


function App() {
  return (
    <div className="App">
      <header id='Nav'>
        <Navbar />
      </header>
      <div className='PageTitle'>
        <h1>May the force be with you</h1>
      </div>
      <div className="carouselSection">
        <Carousel />
      </div>
      
      <Card />

      <div className='Accordion'>
        <Accordion />
      </div>
      
    </div>
  );
}

export default App;
