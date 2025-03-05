import Carousel from 'react-bootstrap/Carousel';
import NewHopePoster from '../assets/carousel/ANewHopeEpisode4.webp';
import EmpireStrikesBackPoster from '../assets/carousel/TheEmpireStrikesBackEpisode5.jpg';  
import ReturnOfTheJediPoster from '../assets/carousel/ReturnOfTheJediEpisode6.webp';
import PhantomMenacePoster from '../assets/carousel/ThePhantomMenaceEpisode1.webp';
import AttackOfTheClonesPoster from '../assets/carousel/AttachOfTheClonesEpisode2.webp';
import RevengeOfTheSithPoster from '../assets/carousel/RevengeOfTheSithEpisode3.jpeg';
import ForceAwakensPoster from '../assets/carousel/TheForceAwakensEpisode7.webp';
import LastJediPoster from '../assets/carousel/TheLastJediEpisode8.webp';
import RiseOfSkywalkerPoster from '../assets/carousel/TheRiseOfSkyWalkerEpisode9.webp';

const main_Carousel = () => {
  const carouselItems = [
    {image: NewHopePoster, title: 'A New Hope', 'text': 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.'},
    {image: EmpireStrikesBackPoster, title: 'The Empire Strikes Back', 'text': 'After the Empire overpowers the Rebel Alliance, Luke Skywalker begins training with Jedi Master Yoda, while Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.'},
    {image: ReturnOfTheJediPoster, title: 'Return of the Jedi', 'text': 'After rescuing Han Solo from Jabba the Hutt, the Rebel Alliance attempts to destroy the second Death Star while Luke struggles to help Darth Vader back from the dark side.'},
    {image: PhantomMenacePoster, title: 'The Phantom Menace', 'text': 'Two Jedi escape a hostile blockade to find allies and come across a young'},
    {image: AttackOfTheClonesPoster, title: 'Attack of the Clones', 'text': 'Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.'},
    {image: RevengeOfTheSithPoster, title: 'Revenge of the Sith', 'text': 'As the Clone Wars nears its end, Obi-Wan Kenobi pursues a new threat, while Anakin Skywalker is lured by Chancellor Palpatine into a sinister plot for galactic domination.'},
    {image: ForceAwakensPoster, title: 'The Force Awakens', 'text': 'As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.'},
    {image: LastJediPoster, title: 'The Last Jedi', 'text': 'Rey develops her abilities with the help of Luke Skywalker as the Resistance prepares for battle against the First Order.'},
    {image: RiseOfSkywalkerPoster, title: 'The Rise of Skywalker', 'text': 'The surviving Resistance faces the First Order once again.'}];

  const displayCarousel = (carousel, index) => {
    return(
      <Carousel.Item key={index}>
          <img src={carousel.image} width={1500} height={650} className='blackout' />
        
          <Carousel.Caption>
            <h3>{carousel.title}</h3>
            <p>{carousel.text}</p>
          </Carousel.Caption>
      </Carousel.Item>
    )
  }
  return <Carousel>{carouselItems.map(displayCarousel)}</Carousel>
  /* return (
    <Carousel>
      <Carousel.Item>
        <img src = {NewHopePoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>A New Hope</h3>
          <p>Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
      <img src = {EmpireStrikesBackPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Empire Strikes Back</h3>
          <p>After the Empire overpowers the Rebel Alliance, Luke Skywalker begins training with Jedi Master Yoda, while Darth Vader and bounty hunter Boba Fett pursue his friends across the galaxy.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {ReturnOfTheJediPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>Return of the Jedi</h3>
          <p>
          After rescuing Han Solo from Jabba the Hutt, the Rebel Alliance attempts to destroy the second Death Star while Luke struggles to help Darth Vader back from the dark side.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {PhantomMenacePoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Phantom Menace</h3>
          <p>
          Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long-dormant Sith resurface to claim their former glory.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {AttackOfTheClonesPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>Attack of the Clones</h3>
          <p>
          Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi discovers a secret clone army crafted for the Jedi.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {RevengeOfTheSithPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>Revenge of the Sith</h3>
          <p>
          As the Clone Wars nears its end, Obi-Wan Kenobi pursues a new threat, while Anakin Skywalker is lured by Chancellor Palpatine into a sinister plot for galactic domination..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {ForceAwakensPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Force Awakens</h3>
          <p>
          As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {LastJediPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Last Jedi</h3>
          <p>
          Rey develops her abilities with the help of Luke Skywalker as the Resistance prepares for battle against the First Order..
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src = {RiseOfSkywalkerPoster} width ={1500} height={650}/>
        <Carousel.Caption>
          <h3>The Rise of Skywalker</h3>
          <p>
          The surviving Resistance faces the First Order once again.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  ); */
}

export default main_Carousel;