import { 
    Box, Hide, Flex, List, ListItem, Show, Text,  Heading
  } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { AiFillHome } from "react-icons/ai"
import { BsPeopleFill, BsListCheck } from "react-icons/bs"
import { HiOutlineViewList } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

const NavigationBar = () => {
  const [dropdown, setDropdown] = useState(false)
  const body = document.body
  const pathsvg = document.querySelector('.menubarsvg path')
  body.onclick = (e) => {
    if(!e.target.classList.contains('sidebar') && !e.target.classList.contains('menubar') && !e.target.classList.contains('menubarsvg')) {
      setDropdown(false)      
    }
    if(e.target == pathsvg) {
      setDropdown(true)
    }
  }

  

  return (
    <Flex 
    as="header" 
    w="100%" 
    justify={{base: 'space-between', md: 'space-around'}} 
    alignItems="center" 
    wrap="wrap" 
    flexDirection="row"
    position="fixed"
    top={0}
    zIndex={999}
    className="navbar"
    >         
        
        <Box 
        p="8px" 
        m="5px"
        ml={'15px'} 
        >
          <Text 
          color="white" 
          fontFamily={"serif"}
          fontSize="2xl" 
          size="lg"
          >Mr_Syafiq</Text>
        </Box>
        <Hide below="md">
          <List display={'flex'} as="nav" p="8px" m="5px">
            <ListItem color={'white'} py={'8px'} px={'15px'} borderRadius={'15px'} _hover={{backgroundColor: 'black'}}>
              <Link to="/portofolio/">Home</Link>
            </ListItem>
            <ListItem color={'white'} mx={'5px'} py={'8px'} px={'15px'} borderRadius={'15px'} _hover={{backgroundColor: 'black'}}>
              <Link to="/portofolio/client">Client</Link>
            </ListItem>
            <ListItem color={'white'} py={'8px'} px={'15px'} borderRadius={'15px'} _hover={{backgroundColor: 'black'}}>
              <Link to="/portofolio/portofolio">Portofolio</Link>
            </ListItem>
          </List>
        </Hide>
        <Show below="md">
          <Flex className="menubar" onClick={() => setDropdown(true)} justifyContent={'center'} m={'20px'} _hover={{cursor: 'pointer'}}>
            <HiOutlineViewList className="menubarsvg" color="white" onClick={() => setDropdown(true)} size={'35px'} />
          </Flex>
        </Show>
        { dropdown && 
          <Hide above="md">
              <Flex transition={'all 1s ease-in-out'} transform={'100px'} className="sidebar" position={'absolute'} top={0} right={0} w={'60vw'} height={'100vh'} bg={'black'} flexDir={'column'}>
                <Flex w={'100%'} justifyContent={'space-between'} p={'10px'} alignItems={'center'}>
                  <Heading as={'h4'} size={'md'} color={'white'} ml={'5px'} fontFamily={"serif"}>Mr_Syafiq</Heading>
                  <Text><AiOutlineClose size="25px" color="white" onClick={() => {
                    setDropdown(false)
                  }}/></Text>
              </Flex>
              <Link to={'/portofolio/'} style={{width: '100%'}} onClick={() => setDropdown(false)}>
                <Flex color={'white'} p={'5px'} _hover={{backgroundColor: 'gray'}} textAlign={'center'} justifyContent={'center'} alignItems={'center'}>
                  <AiFillHome color="white" style={{marginRight: '5px'}}/>Home
                </Flex>
              </Link>
              <hr style={{width: '90%'}}/>
              <Link to={'/portofolio/client'} style={{width: '100%'}} onClick={() => setDropdown(false)}>
                <Flex p="5px" color={'white'} _hover={{backgroundColor: 'gray'}} textAlign={'center'} justifyContent={'center'} alignItems={'center'}>
                  <BsPeopleFill color={'white'} style={{marginRight: '5px'}}/>Client
                </Flex>
              </Link>
              <hr style={{width: '90%'}}/>
              <Link to={'/portofolio/portofolio'} style={{width: '100%'}} onClick={() => setDropdown(false)}>
                <Flex p="5px" color={'white'} _hover={{backgroundColor: 'gray'}} textAlign={'center'} justifyContent={'center'} alignItems={'center'}>
                  <BsListCheck  size="20px" color="white" style={{marginRight: '5px', fontWeight: 'bolder'}}/>Portofolio
                </Flex> 
              </Link>            
            </Flex>              
              
              
          </Hide>
         }
        
    </Flex>
  )
}

export default NavigationBar

