import { Flex, Text } from "@chakra-ui/react"

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

export default TechSkill
