import { Box, Flex, Heading, List, ListItem, Text, Image } from '@chakra-ui/react'
import { BsGithub, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs"
import AOS from "aos"
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Branding = () => {

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
   h="100vh" 
   justifyContent="space-around" 
   alignItems="center"
   backgroundImage="url(./src/image/3.jpg)"
   backgroundAttachment={'fixed'}
   backgroundSize={'cover'}
   backgroundPosition={'center'}
   pt={{base: '20px', md: '0px'}}
   id='branding'
   >
   
    <Flex w={{base: '70vw', md: '50%'}} alignItems={'center'} justifyContent={'center'} data-aos="fade-right">
        <Box
        m={{base: '10px', md: '20px'}}
        p={{base: '4px', md: '8px'}}
        >
            <List>
                <ListItem p="5px" data-aos="fade-left">
                    <Text
                    fontWeight={900}
                    fontSize="20px"
                    ><a href="https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ=="><BsInstagram color='red'/></a>
                    </Text>
                </ListItem>
                    <ListItem my="10px" p="5px" data-aos="fade-right">
                    <Text
                    fontWeight={900}
                    fontSize="20px"
                    ><a href="https://github.com/syafiqparadisam"><BsGithub/></a>
                    </Text>
                </ListItem>
                <ListItem p="5px" data-aos="fade-left">
                    <Text
                    fontWeight={900}
                    fontSize="20px"
                    ><a href="https://www.tiktok.com/@fikkzketchee?lang=id-ID"><BsTiktok color='darkBlue'/></a>
                    </Text>
                </ListItem>
                <ListItem p="5px" mt="7px" data-aos="fade-right">
                    <Text
                    fontWeight={900}
                    fontSize="20px"
                    ><a href="https://www.youtube.com/channel/UCkGkoStRD4GENfhJdbgPJmg"><BsYoutube color='red' size={20}/></a>
                    </Text>
                </ListItem>
            </List>
        </Box>
        <Box>
            <Heading
            as="h2"
            fontSize={{base: 'xl', md: '4xl'}}
            data-aos="fade-down-left"
            color={'white'}
            fontFamily={'serif'}
            >Hello I'M Syafiq
            <br/>
            I'M Frontend Web Developer</Heading>
            <Text
            my="25px"
            fontSize={{base: 'md', md: '2xl'}}
            fontWeight={600}
            fontFamily={'serif'}
            >I Live In Sidoarjo, East Java Indonesia
            <br/>I Will Make Your Better Website
            </Text>
            <Link
            to="/service"
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "12px 20px",
                fontSize:"15px",
                borderRadius:"20px"
            }}
            >Service</Link>
        </Box>
    </Flex>
    <Box data-aos="fade-left" w={{base: '', md: '50%'}} display={{base: 'none', md: 'block'}}>
        <Image 
        src="/src/image/profileku.jpg"
        borderRadius="30px"
        border={'2px solid white'}
        width={'300px'}
        alt="profileku"
        mx={'auto'}
        />
    </Box>
   </Flex>
  )
}

export default Branding