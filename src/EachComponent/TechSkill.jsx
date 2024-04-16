import { Flex, Text } from "@chakra-ui/react"
import propTypes from "prop-types"

const TechSkill = ({ icon, text }) => {
  return (
    <>
        { icon && text ? 
          <Flex flexDirection="column" p={{base: '8px', md: '10px'}}>
            <span style={{
                margin: '0 20px 0 20px',
                textAlign: 'center'
            }}>{ icon }</span>
            <br/>
            <Text mt="-6" fontWeight={500} fontSize={{base: 'xs', md: 'lg'}}
            fontFamily={'serif'}
            >{ text }</Text>                   
        </Flex> 
      : '' 
    }
    </>
  )
}

TechSkill.propTypes = {
  icon: propTypes.node.isRequired,
  text: propTypes.string.isRequired
}

export default TechSkill
