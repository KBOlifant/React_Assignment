import Carousel from 'react-bootstrap/Carousel';
import NewHopePoster from '../assets/NewHopePoster.jpeg';
import EmpireStrikesBackPoster from '../assets/EmpireStrikesBackPoster.jpeg';  
import ReturnOfTheJediPoster from '../assets/ReturnoftheJediPoster.jpeg';
import PhantomMenacePoster from '../assets/PhantomMenacePoster.jpeg';
import AttackOfTheClonesPoster from '../assets/AttackoftheClonesPoster.jpeg';
import RevengeOfTheSithPoster from '../assets/RevengeoftheSithPoster.jpeg';
import ForceAwakensPoster from '../assets/ForceAwakensPoster.jpeg';
import LastJediPoster from '../assets/LastJediPoster.jpeg';
import RiseOfSkywalkerPoster from '../assets/RiseofSkywalkerPoster.jpeg';

function main_Carousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src = {NewHopePoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>A New Hope</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img src = {EmpireStrikesBackPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Empire Strikes Back</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {ReturnOfTheJediPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>Return of the Jedi</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {PhantomMenacePoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Phantom Menace</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {AttackOfTheClonesPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>Attack of the Clones</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {RevengeOfTheSithPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>Revenge of the Sith</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {ForceAwakensPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Force Awakens</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {LastJediPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Last Jedi</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {RiseOfSkywalkerPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Rise of Skywalker</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default main_Carousel;