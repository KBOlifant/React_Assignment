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
import FormComponent from './components/InteractiveFormComponent';


function App() {
  return (
    <div className="App">
      <header id='Nav'>
        <Navbar />
      </header>
      <div className='PageTitle'>
        <h1>May The Force Be With You</h1>
      </div>
      <div className="carouselSection">
        <Carousel />
      </div>
      <Row className='Cards justify-content-md-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </Row>

      <Row className='Cards justify-content-md-center'>
        <Card />
        <Card />
        <Card />
        <Card />
      </Row>

      <div className='accordion'>
        <Accordion />
      </div>

      <div className='subscribe-form'>
        <FormComponent />
        </div>

      
      
    </div>
  );
}

export default App;
