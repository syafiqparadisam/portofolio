import { createContext } from 'react'
import CardProjek from '../EachComponent/CardProjek'



export const card = (text, animate, caption, image, link) => {
    return (
        <CardProjek animate={ animate } link={link} image={ image } caption={ caption } text={text}/>
    ) 
}


 
export const CardContext = createContext(card)