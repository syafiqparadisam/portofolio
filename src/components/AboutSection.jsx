import { Flex, Box, Heading, Text, Image, Card, CardHeader, CardBody } from "@chakra-ui/react"
import { TbClockBolt } from "react-icons/tb"
import { BsListCheck } from "react-icons/bs"
import { RiTeamFill } from "react-icons/ri"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const AboutSection = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            mirror: true,
            duration: 1000,
            offset: 150
        })
    }, [])

  return (
    <Flex
    as="section"
    width="100%"
    height="100%"
    flexDirection="column"
    bgImg="url(./src/image/2.jpg)"
    backgroundAttachment={'fixed'}
    backgroundSize={'cover'}
    backgroundPosition={'center'}
    >
        <Flex width="100%" justifyContent="center" alignItems="center"
        flexDirection="column"
        pt={{base: '12', md: '20'}}
        
        >
            <Heading fontSize={{base: '2xl', md: '4xl'}}
            color={'white'}
            fontFamily={'serif'}
            >About Me
            </Heading>
            
            <Text 
            fontSize={{base: 'sm', md: 'xl'}} 
            color={'white'}
            fontFamily={'serif'}
            >My Journey About Coding</Text>
        </Flex>
        <Flex
        justifyContent="center"
        alignItems="center"
        w={{base: '80vw', md: '100%'}}
        p="10px"
        my="30px"
        mx={'auto'}
        flexDir={{base: 'column', md: 'row'}}
        >
            <Box w="50%" p={{base: '5px', md: '20px'}} data-aos="fade-up-right">
                <Image
                src="/src/image/profileku.jpg"
                w={{base: '140px', md: '300px'}}
                borderRadius="20px"
                border={'2px solid white'}
                mx="auto"
                />
            </Box>
            <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            wrap="wrap"
            w={{base: '100%', md: '50%'}}
            >
                <Flex wrap={'wrap'} flexDir={'row'} justifyContent={'center'} alignItems={'center'} mt={5}>
                    <Card textAlign="center"
                    px="10px"
                    m={'10px'}
                    boxShadow="lg"
                    borderTop="4px solid blue"
                    size={{base: 'sm', md: 'md'}}
                    data-aos="flip-down"
                    >
                        <CardHeader mx="auto">
                            <span
                            ><TbClockBolt size="30px"/></span>                  
                        </CardHeader>
                        <CardBody mt={{base: '-6', md: '-8'}}>
                            <Text fontSize={{base: 'sm', md: 'md'}}>Experience</Text>
                            <Text
                            fontSize={{base: 'sm', md: 'md'}}
                            fontWeight={{base: 500, md: 700}}
                            >6 Month</Text>
                        </CardBody>
                    </Card>
                    <Card textAlign="center"
                    m="10px"
                    px="10px"
                    boxShadow="lg"
                    borderTop="4px solid blue"
                    size={{base: 'sm', md: 'md'}}
                    data-aos="flip-down"
                    >
                        <CardHeader mx="auto">
                        <BsListCheck size="30px"/> 
                        </CardHeader>
                        <CardBody mt={{base: '-6', md: '-8'}}>    
                            <Text fontSize={{base: 'sm', md: 'md'}}>Achieved</Text>
                            <Text
                            fontWeight={{base: 500, md: 700}}
                            fontSize={{base: 'sm', md: 'md'}}
                            >1++ Project</Text>
                        </CardBody>
                    </Card>
                    <Card textAlign="center"
                    m="10px"
                    px="10px"
                    boxShadow="lg"
                    borderTop="4px solid blue"
                    size={{base: 'sm', md: 'md'}}
                    data-aos="flip-down"
                    >
                        <CardHeader mx="auto">
                            <RiTeamFill size="30px"/>
                        </CardHeader>
                        <CardBody mt={{base: '-6', md: '-8'}}>
                            <Text fontSize={{base: 'sm', md: 'md'}}>My Teams</Text>
                            <Text
                            fontWeight={{base: 500, md: 700}}
                            fontSize={{base: 'sm', md: 'md'}}
                            >Just Me</Text>
                        </CardBody>
                    </Card>
                </Flex>
                <Flex
                p="10px"
                wrap={'wrap'}
                m="10px"
                data-aos="fade-up"
                >
                    <Text fontWeight={600} fontSize={{base: '10px', md: 'md'}} color={'white'} textAlign="center"
                    fontFamily={'serif'}
                    >Saya Adalah Seorang Junior Developer, Dengan Pengalamanku Yang Masih Belum Lama, Tetapi Saya Yakin Saya Bisa Membuat Website Yang Baik Layaknya Seorang Senior Developer, Saya Harap Para Clientku Akan Puas Dengan Hasil Kerjaku.</Text>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default AboutSection