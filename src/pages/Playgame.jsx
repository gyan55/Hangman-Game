import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import MaskedText from "../components/MaskedText/MaskedText";



function PlayGame() {

const location = useLocation(); 
const wordSelected = location.state?.wordSelected;
  return (
    <div>
      <h1>Play Game {wordSelected}</h1>
      <MaskedText text ={wordSelected} usedLetters = {['G','N'] }/>
      <Link to = '/start' className="text-blue500">Start Game Link</Link>
    </div>
  );
}   

export default PlayGame;