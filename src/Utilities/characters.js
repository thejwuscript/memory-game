import uniqid from 'uniqid';
import bowser from '../images/bowser.png';
import byleth from '../images/byleth.png';
import captainFalcon from '../images/captain_falcon.png';
import donkeyKong from '../images/donkey_kong.png';
import fox from '../images/fox.png';
import iceClimbers from '../images/ice_climbers.png';
import ike from '../images/ike.png';
import isabelle from '../images/isabelle.png';
import kazuya from '../images/kazuya.png';
import kirby from '../images/kirby.png';
import link from '../images/link.png';
import littleMac from '../images/link.png';
import lucina from '../images/lucina.png';
import luigi from '../images/luigi.png';
import mario from '../images/mario.png';
import ness from '../images/ness.png';
import pikachu from '../images/pikachu.png';
import samus from '../images/samus.png';
import villager from '../images/villager.png';
import yoshi from '../images/yoshi.png';
import zelda from '../images/zelda.png';

const ALL_CHARACTERS = [
  {id: uniqid(), name: "Bowser", image: bowser},
  {id: uniqid(), name: "Byleth", image: byleth},
  {id: uniqid(), name: "Captain Falcon", image: captainFalcon},
  {id: uniqid(), name: "Donkey Kong", image: donkeyKong},
  {id: uniqid(), name: "Fox", image: fox},
  {id: uniqid(), name: "Ice Climbers", image: iceClimbers},
  {id: uniqid(), name: "Ike", image: ike},
  {id: uniqid(), name: "Isabelle", image: isabelle},
  {id: uniqid(), name: "Kazuya", image: kazuya},
  {id: uniqid(), name: "Kirby", image: kirby},
  {id: uniqid(), name: "Link", image: link},
  {id: uniqid(), name: "Little Mac", image: littleMac},
  {id: uniqid(), name: "Lucina", image: lucina},
  {id: uniqid(), name: "Luigi", image: luigi},
  {id: uniqid(), name: "Mario", image: mario},
  {id: uniqid(), name: "Ness", image: ness},
  {id: uniqid(), name: "Pikachu", image: pikachu},
  {id: uniqid(), name: "Samus", image: samus},
  {id: uniqid(), name: "Villager", image: villager},
  {id: uniqid(), name: "Yoshi", image: yoshi},
  {id: uniqid(), name: "Zelda", image: zelda},
]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomCharacters() {
  return shuffle(ALL_CHARACTERS).slice(0, 12)
}

export default randomCharacters;
