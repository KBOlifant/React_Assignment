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
    {image: AhsokePoster, title: 'Ahsoka', 'text': 'stuff stuff stuff idk'},
    {image: AndorPoster, title: 'Andor', 'text': 'stuff stuff stuff idk'},
    {image: ObiWanPoster, title: 'Obi-Wan Kenobi', 'text': 'stuff stuff stuff idk'},
    {image: SkeletonCrewPoster, title: 'Skeleton Crew', 'text': 'stuff stuff stuff idk'},
    {image: SoloPoster, title: 'Solo Star Wars', 'text': 'stuff stuff stuff idk'},
    {image: NewHopePoster, title: 'Start Wars A New Hope', 'text': 'stuff stuff stuff idk'},
    {image: ResistancePoster, title: 'Star Wars Resistance', 'text': 'stuff stuff stuff idk'},
    {image: JediPoster, title: 'Return Of The Jedi', 'text': 'stuff stuff stuff idk'},
    {image: SithiPoster, title: 'Star Wars Revenge of Sith', 'text': 'stuff stuff stuff idk'},
    {image: RebelsPoster, title: 'Star Wars Rebels', 'text': 'stuff stuff stuff idk'}
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