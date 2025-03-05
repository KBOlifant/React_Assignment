import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image';
import JediOrder from '../assets/accordion/jedi-order.webp';
import SithOrder from '../assets/accordion/sith-order.webp';
import GalacticRepublic from '../assets/accordion/galactic-republic.webp';
import SeparatistAlliance from '../assets/accordion/confederacy-of-independent-systems-separatist-alliance.webp';
import GalacticEmpire from '../assets/accordion/galactic-empire.webp';
import RebelAlliance from '../assets/accordion/rebel-alliance.webp';
import NewRepublic from '../assets/accordion/new-republic.webp';
import FirstOrder from '../assets/accordion/first-order.webp';
import FinalOrder from '../assets/accordion/final-order.webp';
import Resistance from '../assets/accordion/resistance.webp';



const accordionInfo = () => {

  const accordionData = [
    {image: JediOrder, title: 'Jedi Order', text: 'A noble order of protectors unified by their ability to tap into the power of the Force, the Jedi Order were the guardians of peace and justice in the Galactic Republic. The age of the Jedi would end, however, due to a nefarious plot by the Sith Lord Darth Sidious.'},
    {image: SithOrder, title: 'Sith Order', text: 'An ancient order of Force-wielders devoted to the dark side, the Sith practice hate, deception, and greed. Notable for their red-bladed lightsabers, black dress, and use of their aggressive feelings, the Sith look to amass power at all costs. The evil Darth Sidious, along with his apprentice Darth Vader, achieved the Sith goal of galactic conquest after a millennia of plotting.'},
    {image: GalacticRepublic, title: 'Galactic Republic', text: 'For over a thousand years, the Galactic Republic stood firm as a democratic union that governed the galaxy. The Republic was governed by the Galactic Senate, consisting of elected officials from each system and world, and Jedi Knights served as peacekeepers. With the rise of Supreme Chancellor Palpatine, however, the Galactic Republic -- and democracy -- would crumble.'},
    {image: SeparatistAlliance, title: 'Confederacy of Independent Systems/Separatist Alliance', text: 'The Confederacy of Independent Systems, also known as the Separatist Alliance, was a collection of star systems and corporate titans that left the Republic and fought for independence against the Republic’s clone armies and Jedi Knights. The charismatic former Jedi Count Dooku was the Alliance’s political leader, while its military power came from credits and assets donated by powerful galactic trade groups. No one suspected that the Alliance was actually a tool of Darth Sidious, who had engineered the Clone Wars as part of a Sith plot to rule the galaxy.'},
    {image: GalacticEmpire, title: 'Galactic Empire', text: 'The Galactic Empire ruled for years through fear, intimidation, and tyranny. With a mighty military force including stormtroopers, spy technology like probe droids, and the planet-destroying Death Star, Emperor Palpatine’s regime seemed unstoppable and permanent. But some dared to strike back….'},
    {image: RebelAlliance, title: 'Rebel Alliance', text: 'The Rebel Alliance stood bravely against the evil of the Galactic Empire, never backing down despite overwhelming odds. Formed from resistance movements that arose during the Clone Wars, the Rebellion worked in secret for decades to overthrow the Emperor and restore democracy to the galaxy. Eventually, armed with the firepower of ships like the X-wing and A-wing, and the leadership of figures including Princess Leia and Admiral Ackbar, the Rebel Alliance triumphed over the Empire at the Battle of Endor.'},
    {image: NewRepublic, title: 'New Republic', text: 'The Rebel Alliance became the New Republic after its victory over the Empire at the Battle of Endor. Eager to win over the war-weary citizens of the galaxy, the New Republic revived the Senate, signed a peace treaty – the Galactic Concordance – with the Empire’s remnants, and drastically reduced its military capabilities. That policy aroused the ire of rebel hero Leia Organa, who warned that elements of the Empire were still seeking power. Sidelined from the political process, Organa founded the Resistance to oppose the Empire’s successor state, the mysterious First Order.'},
    {image: FirstOrder, title: 'First Order', text: 'The New Republic’s rise reduced the once-mighty Empire to a rump state hemmed in by strict disarmament treaties and punishing reparations. But in the galaxy’s Unknown Regions, former Imperial officers, nobles and technologists plotted a return to power, building fleets and armies in secret. This movement became the First Order, ruled by Supreme Leader Snoke, and is now ready to reclaim the Imperial legacy.'},
    {image: FinalOrder, title: 'Final Order', text: 'The Final Order was the last card played by the Dark Forces. With no one to answer to, Supreme Leader Kylo sent his forces across the Galaxy to spread his reign of terror, while he himself went after whatever was left of Jedis, such as Luke Skywalker. However, soon after his conquest of different planets and Star systems, present both in Core World and the Outer Rims, Kylo encountered the strongest Dark Force present on the planet of Exogel. It was Darth Sidious who was revived by the members of the Sith cult!'},
    {image: Resistance, title: 'Resistance', text: 'A small, secretive private military force, the Resistance was founded by rebel hero Leia Organa to monitor the actions of the First Order. Most New Republic power brokers tolerate the Resistance while regarding Organa and her fighters as dead-enders with an unfortunate fixation on the past. Organa’s cash-strapped movement relies on credits, ships and equipment quietly funneled to it from the few senators who share her concerns. Resistance starfighters destroyed Starkiller Base, but the First Order’s retaliatory attack on D’Qar reduced its forces to a handful of brave freedom fighters.'}
  ];

    const displayAccordion = (accordion, index) => {
      return(
        
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header>{accordion.title}</Accordion.Header>
          <Accordion.Body>
            <Image src={accordion.image} width={200} height={200} rounded />
            <p>{accordion.text}</p>
          </Accordion.Body>
        </Accordion.Item>
  
      )
    }
    return<Accordion>{accordionData.map(displayAccordion)}</Accordion>
}
export default accordionInfo;
