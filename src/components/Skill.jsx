import { Box, Card, CardBody, CardHeader, Flex, Heading, Text } from "@chakra-ui/react"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiChakraui, SiReact, SiExpress, SiLaravel, SiMysql, SiMongodb, SiPrisma } from "react-icons/si"
import TechSkill from "../EachComponent/TechSkill"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import image1 from "../assets/1.jpg"

const Skill = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
            duration: 1000,
            offset: 150
        })
    }, [])

  return (
    <Box w="100%" 
    as="section"
    h={{base: '100%', lg: '100vh'}}
    bgAttachment={'fixed'}
    bgPos={'center'}
    bgImage={image1}
    bgSize={'cover'}
    overflow={'hidden'}
    pb={8}
    >
    
    
    <Flex
    w="80%"
    flexDirection="column"
    m="auto"
    >
        <Box width="100%"
        textAlign="center"
        pb={{base: '12', md: '15'}}
        pt={8}
        >
            <Heading 
            fontSize={{base: '2xl', md: '4xl'}} 
            color={'white'}
            fontFamily={'serif'}
            >My Skills
            </Heading>
        </Box>
            <Flex my={'auto'} h={'100%'} justifyContent="space-around" w={{base: '80vw', md: '100%'}} pb={10} alignItems={'center'} mt={{base: '0px', md: '40px'}} flexDir={{base: 'column', lg: 'row'}}>
                <Card data-aos="fade-left" borderRadius={'20px'} textAlign="center" width={{base: '75%', md: '30%'}} boxShadow="2xl" display="flex" pb="15px" size={{base: 'sm', md: 'lg'}}>
                    <CardHeader>
                        <Text
                        fontWeight={700}
                        fontSize="20px"
                        fontFamily={'serif'}
                        >Frontend</Text>
                    </CardHeader>
                    <CardBody p="0 50px" display="flex" justifyContent="space-between" alignItems="center" flexDirection="column" w="100%">
                        <Flex justifyContent="space-between">
                            <TechSkill icon={<FaHtml5 size="40px" color="red"/>} text="HTML"/>
                            <TechSkill icon={<FaCss3Alt size="40px" color="blue"/>} text="CSS"/>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <TechSkill icon={<SiJavascript size="40px" color="yellow"/>}  text="JS"/>
                            <TechSkill icon={<FaBootstrap size="40px" color="blue"/>}  text="BS"/>
                        </Flex>
                        <Flex justifyContent="center">
                            <TechSkill icon={<SiChakraui size="40px" color="skyBlue"/>} text="CHAKRA UI"/>
                            <TechSkill icon={<SiReact size="40px" color="skyBlue"/>} text="REACTJS"/>
                        </Flex>
                    </CardBody>
                </Card>
                <Card data-aos="fade-right" borderRadius={'20px'} textAlign="center" my={{base: 10, lg: 0}} width={{base: '75%', md: '30%'}} boxShadow="2xl" display="flex">
                    <CardHeader>
                        <Text
                        fontWeight={700}
                        fontSize="20px"
                        fontFamily={'serif'}
                        >Backend
                        </Text>
                        <Text>ON STUDYING</Text>
                    </CardHeader>
                    <CardBody p="0 50px" display="flex" justifyContent="space-between" alignItems="center" flexDirection="column" w="100%">
                        <Flex justifyContent="center">
                            <TechSkill icon={<FaNodeJs size="40px" color="green"/>} text="NODE JS"/>
                            <TechSkill icon={<SiExpress size="40px" color="black"/>} text="EXPRESS JS"/>
                        </Flex>
                        <Flex justifyContent={'center'}>
                            <TechSkill icon={<SiMysql size="40px" color="black"/>} text="MY SQL"/>
                            <TechSkill icon={<SiMongodb size="40px" color="green"/>} text="MONGO DB"/>
                            </Flex>
                        <Flex justifyContent={'center'}>
                            <TechSkill icon={<SiPrisma size="40px" color="black"/>} text="PRISMA"/>
                            <TechSkill icon={<SiLaravel size="40px" color="red"/>} text="LARAVEL"/>

                        </Flex>
                    </CardBody>
                </Card>
                
            </Flex> 
        </Flex>
    </Box>
  )
}
export default Skill



