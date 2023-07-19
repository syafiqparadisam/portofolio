
import AboutSection from "../components/AboutSection"
import Branding from "../components/Branding"
import Projek from "../components/Projek"
import Skill from "../components/Skill"
import Form from "../components/Form"
import { useContext } from "react"
import { CardContext } from "../Hooks/CardContext"
import imageportofolio from '../assets/portofolioweb.png'

const Home = () => {
  
  const card = useContext(CardContext)
  const cardArray1 = [
    card('PORTOFOLIO WEB', "fade-left",'SEE', imageportofolio),
    card('',"fade-down")
  ]
  const cardArray2 = [
    card('TO DO LIST', "fade-down"),
    card('',"fade-up")
  ]
  const cardArray3 = [
    card('GOOGLE CLONE', "fade-up"),
    card('',"fade-down")
  ]
  const cardArray4 = [
    card('MINI MARKETPLACE', "fade-right"),
    card('',"fade-up")
  ]

  return (
    <>
      <Branding />
      <AboutSection/>
      <Skill/>
      <Projek 
      card1={cardArray1.map(cardpertama => cardpertama)} 
      card2={cardArray2.map(cardpertama => cardpertama)} 
      card3={cardArray3.map(cardpertama => cardpertama)} 
      card4={cardArray4.map(cardpertama => cardpertama)}
      cardBASEHeight="390px"
      cardMDHeight="430px"
      />
      <Form/>
    </>
  )
}

export default Home