import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from  './components/Card';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './components/Accordion';


function App() {
  return (
    <div className="App">
      <header id='Nav'>
        <Navbar />
      </header>
      <div className="carouselSection">
        <Carousel />
      </div>
      <div className='Cards'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='Accordion'>
        <Accordion />
        </div>
    </div>
  );
}

export default App;
