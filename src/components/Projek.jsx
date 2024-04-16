import { Box, Flex, Heading, Card, CardBody, CardFooter, Button } from "@chakra-ui/react"
import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom"
import Aos from "aos"
import { useEffect } from "react"
import "aos/dist/aos.css"
import image4 from '../assets/4.jpg'

const Projek = ({ card1, card2, card3, card4, text = 'My Project', py = '50px', scrollOverflow = 'scroll', button = true, hiddenOverflow = 'hidden', height = '100%', cardBASEHeight, cardMDHeight = '100%' }) => {

    useEffect(() => {
        Aos.init({
            once: false,
            mirror: true,
            duration: 1000,
            offset: 150
        })
    }, [])

    return (
        <Flex
            w="100%"
            h={{ base: '100%', md: height }}
            flexDirection="column"
            bgAttachment={'fixed'}
            bgPos={'center'}
            bgImage={image4}
            bgSize={'cover'}
            py={py}
            as="section"
            overflow={'hidden'}
            justifyContent={{ base: 'space-around', md: 'normal' }}
        >
            <Box w="100%" textAlign="center" pb={10}>
                <Heading as={'h2'} color="whiteAlpha.900" fontSize={{ base: '2xl', md: '4xl' }}
                    fontFamily={'serif'}
                >{text}</Heading>
            </Box>
            <Flex justifyContent="center" alignItems="center" w={{ base: '70vw', md: '80vw', lg: '90%' }} mx={'auto'} h={{ base: cardBASEHeight, md: cardMDHeight }} mb="70px">
                <Card style={{ boxShadow: 'inset 0px 0px 20px 5px rgba(0,0,0,0.2)' }} h="100%" data-aos="zoom-in-up">
                    <CardBody w="100%" overflow={hiddenOverflow}>
                        <Flex overflow={scrollOverflow} wrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                            <Box>
                                {card1}
                            </Box>
                            <Box>
                                {card2}
                            </Box>
                            <Box>
                                {card3}
                            </Box>
                            <Box>
                                {card4}
                            </Box>
                        </Flex>

                    </CardBody>
                    {button ? <CardFooter>

                        <Box w="100%">
                            <Link to="/portofolio" w="100px"><Button w="100%" bg="purple" color="white" textAlign="center">See More<span style={{ marginTop: '2px' }}><BiRightArrowAlt size="20px" /></span></Button></Link>
                        </Box>
                    </CardFooter>
                        : ''}
                </Card>
            </Flex>
        </Flex>
    )
}

export default Projek