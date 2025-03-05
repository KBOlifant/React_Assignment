import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AhsokePoster from '../assets/MoviePosters/Ahsoka poster.webp';
import AndorPoster from '../assets/MoviePosters/Andor poster.jpg';
import ObiWanPoster from '../assets/MoviePosters/obi wan kenobi poster.jpeg';
import SkeletonCrewPoster from '../assets/MoviePosters/skeleton crew poster.jpg';
import SoloPoster from '../assets/MoviePosters/solo a star wars story poster.jpg';
import NewHopePoster from '../assets/MoviePosters/Star Wars A New Hope poster.webp';
import ResistancePoster from '../assets/MoviePosters/Star Wars Resistance poster.jpg';
import JediPoster from '../assets/MoviePosters/Star Wars Return of the Jedi poster.jpg';
import SithiPoster from '../assets/MoviePosters/star wars Revenge of the Sithi poster.jpg';
import RebelsPoster from '../assets/MoviePosters/star wars rebels poster.jpg';

const CardInfo = () => {
  const cardDetails = [
    {image: AhsokePoster, title: 'Ahsoka', 'text': 'After the fall of the Galactic Empire, the former Jedi Ahsoka Tano investigates an emerging threat that endangers a vulnerable galaxy.'},
    {image: AndorPoster, title: 'Andor', 'text': 'Prequel series to Star Wars \'Rogue One\'. In an dangerous era, Cassian embarks on a path destined to turn him into a Rebel hero.'},
    {image: ObiWanPoster, title: 'Obi-Wan Kenobi', 'text': 'Jedi Master Obi-Wan Kenobi must save young Leia after she is kidnapped, while being pursued by Imperial Inquisitors and Darth Vader.'},
    {image: SkeletonCrewPoster, title: 'Skeleton Crew', 'text': 'The four kids make a mysterious discovery on their home planet that leads them to get lost in a strange and dangerous galaxy.'},
    {image: SoloPoster, title: 'Solo Star Wars', 'text': 'Adventuring in the criminal underworld, Han Solo meets his future co-pilot Chewbacca and Lando Calrissian years before joining the Rebel Alliance.'},
    {image: RebelsPoster, title: 'Star Wars Rebels', 'text': 'The crew of the spaceship Ghost defends those who cannot fight for themselves against the Empire, providing the spark for a rebellion.'}
  ];

  const displayCard = (card, index) => {
    return(
      <Card style={{ width: '18rem', borderRadius: '20px' }} key={index}>
        <Card.Img variant="top" src={card.image} className='mt-3 rounded-4' />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }

  return <Row className='Cards justify-content-md-center flex-wrap'>{cardDetails.map(displayCard)}</Row>
}

export default CardInfo;