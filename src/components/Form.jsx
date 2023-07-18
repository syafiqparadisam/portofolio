import {Box, Flex, Heading, Card, CardBody} from "@chakra-ui/react"
import { useRef, useEffect } from "react"
import Formcontrol from "../EachComponent/Formcontrol"
import AOS from "aos"
import "aos/dist/aos.css"

const Form = () => {
  
  useEffect(() => {
      AOS.init({
        once: false,
        mirror: true,
        duration: 1000,
        offset: 150
    })
  },[])

  return (
    <Flex
    w="100%"
    h="100%"
    as="section"
    backgroundImage="url(./src/image/5.jpg)"
    backgroundAttachment={'fixed'}
    backgroundSize={'cover'}
    backgroundPosition={'center'}
    justifyContent="center"
    flexDirection="column"
    pb={10}
    overflow={'hidden'}
    position="relative"
    >
      <Box w="100%" textAlign="center" mt={'20px'} mb={3} pt={{base: '40px', md: '10px'}}>
        <Heading as="h1" textAlign="center" fontSize={{base: '2xl', md: '4xl'}} color={'white'}
        fontFamily={'serif'}
        >Contact Me</Heading>
      </Box>
      <Card 
      justifyContent='center' 
      alignItems='center'
      py="15px"
      mx="auto"
      my="20px"
      data-aos="zoom-in"
      flexDir="column"
      boxShadow={'dark-lg'}
      border={'1px solid black'}
      w={{base: '70vw'}}
      >
        <CardBody w={"100%"} height={{md: '100%'}}>
          <Formcontrol/>
        </CardBody>
      </Card>
    </Flex>
  )
}

export default Form