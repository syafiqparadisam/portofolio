import { ModalBody, useDisclosure, Button, ModalCloseButton, ModalOverlay, Modal, ModalContent, ModalHeader, Card, CardBody, CardFooter, CardHeader, Image, Text, Box} 
from "@chakra-ui/react"
import { useRef, useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const CardProjek = ({ image = 'https://placehold.co/200x80', text = '', link = '/', caption = 'DEMO', animate}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()    
  const finalRef = useRef(null)
  const [size, setSize] = useState()

  const handleSizeClick = (newsize) => {
    setSize(newsize)
    onOpen()
  }
  
  useEffect(() => {
      AOS.init({
        once: false,
        mirror: true,
        duration: 1000,
        offset: 150
    })
  },[])
  
  

  return (
    <>
      <Card data-aos={animate} borderTop="5px solid darkBlue" size={{base: 'sm', md: 'md', lg: 'lg'}} mx="10px" style={{boxShadow: '15px -5px 40px rgba(0,0,0,0.2)'}} pb={'3px'} my={'10px'}_hover={{backgroundColor: 'skyBlue', color: 'white'}}>
        <CardHeader>
          <Text fontWeight="600" fontSize={{base: '12px', md: '20px'}} textAlign="center">{ text }</Text>
        </CardHeader>
        <CardBody display="flex" w="100%" justifyContent="center">
          <Image src={ image } w={{base: '90px', md: '200px'}} height={{base: '40px', md: '80px'}}  ref={finalRef} tabIndex={-1} aria-label="ss" borderRadius="5px" onClick={() => handleSizeClick('full')} cursor="pointer"/>
        </CardBody>
        <CardFooter  textAlign="center">
          <Button size={{base: 'sm', md: 'lg'}} onClick={() => {
            location.replace(link)
          }} w="100%" bg="blue.600" colorScheme="white">{ caption }</Button>
        </CardFooter>
      </Card>
    
     
      <Box w="80%">
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size={size}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader mx="auto" fontWeight="bolder">{ text }</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={ image } borderRadius="10px" mx="auto"/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box> 
    </>
  )
}

export default CardProjek