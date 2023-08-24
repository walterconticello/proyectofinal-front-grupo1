import CardSportCenter from '../components/cardSportCenter/CardSportCenter'
import SearchBar from '../components/SearchBar/SearchBar';
import { cardContext } from '../context/cardContext';
import {useContext} from "react"
import Slider from "../components/carouselPromo/Slider";

const SportCenter = () => {
  const { cards } = useContext(cardContext);
  return (

    <div className='card-container'>
      <Slider />
      <SearchBar/>
      <CardSportCenter cards={cards}/>
    </div>
  )
};


export default SportCenter;