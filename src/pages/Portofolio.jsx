import { useContext } from "react"
import Projek from "../components/Projek"
import { CardContext } from '../Hooks/CardContext'

const Portofolio = () => {
  const card = useContext(CardContext)

 
 
  const cardArray1 = [
    card('PORTOFOLIO WEB', "fade-right", 'SEE','/src/image/portofolioweb.png', '/'),
  ]
  const cardArray2 = [
   card('TO DO LIST', "fade-down",)
  ]
  const cardArray3 = [
    card('GOOGLE CLONE', "fade-up"),
  ]
  const cardArray4 = [
    card('MINI MARKETPLACE', "fade-left"),
  ]
  return (
    
    
      <Projek 
      text='Full Project' 
      button={ false } 
      height={'100%'} 
      scrollOverflow='visible' 
      cardHeight="100%" 
      hiddenOverflow="visible"
      py='100px'
      cardBASEHeight="100%"
      card1={cardArray1.map(cardpertama => cardpertama)}
      card2={cardArray2.map(cardpertama => cardpertama)}
      card3={cardArray3.map(cardpertama => cardpertama)}
      card4={cardArray4.map(cardpertama => cardpertama)}
      />
  )
}

export default Portofolio;