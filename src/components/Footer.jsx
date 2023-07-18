import { Show ,Flex, Heading, Text, Link, Box, List, ListItem, Grid, GridItem, Hide } from '@chakra-ui/react'
import { useEffect } from 'react'
import { BsGithub, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import { BiCopyright } from "react-icons/bi"
import { AiOutlineMail, AiOutlineArrowUp } from "react-icons/ai"

const Footer = () => {

  const goto = (Top) => {
    window.scrollTo({
        top: Top,
        left: 0,
        scrollBehavior: 'smooth'
    })
  }  

  return (
    <Flex bg="black"
    alignItems="center"
    as="footer"
    flexDirection={'column'}
    >   
        <Grid py="20px" justifyContent={'center'} templateColumns={{base: 'repeat(3, 70px)',sm: 'repeat(3, 1fr)'}} templateRows={{base: '1fr, 1fr', sm: '1fr'}} w={'100vw'}>
            <GridItem textAlign="center" colStart={1} rowStart={1}>
                <Box pb="15px">
                    <Text color="white" fontWeight="bold" fontSize={{base: 'sm', md: '20px'}}>Contact us</Text>
                </Box>
                <List>
                    <ListItem display='inline-block' p={'5px'}>
                        <Link href='https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ=='><BsInstagram color="white" size="25px"/></Link>
                    </ListItem>
                    <ListItem display='inline-block' p="5px">
                        <Link href='https://github.com/syafiqparadisam' my="10px"><BsGithub size="25px" color='white'/></Link>
                    </ListItem>
                    <ListItem display='inline-block' p={'5px'}>
                        <Link href='https://www.youtube.com/channel/UCkGkoStRD4GENfhJdbgPJmg'><BsYoutube color='white' size="25px"/></Link>
                    </ListItem>
                    <ListItem display='inline-block' p="5px">
                        <Link href='https://www.tiktok.com/@fikkzketchee?lang=id-ID' mt="10px"><BsTiktok size="25px" color='white'/></Link>
                    </ListItem>
                </List>
            </GridItem>
            <GridItem flexDir={'column'} textAlign="center" colStart={{base: 3, md: 3}} rowStart={1}>
                <NavLink to={'/portofolio'} style={{color: 'white', display: 'block', fontWeight: 'bold', fontSize: '17px'}}>Home</NavLink>
                <NavLink to={'portofolio/client'} style={{color: 'white', display: 'block', fontWeight: 'bold', fontSize: '17px', marginBlock: '5px'}}>Client</NavLink>
                <NavLink to={'/portofolio/portofolio'} style={{color: 'white', display: 'block', fontWeight: 'bold', fontSize: '17px'}}>Portofolio</NavLink>
                <NavLink to={'/portofolio/service'} style={{color: 'white', display: 'block', fontWeight: 'bold', fontSize: '17px', marginBlock: '5px'}}>Services</NavLink>
            </GridItem>
            <GridItem textAlign={'center'} wrap={'wrap'} colStart={{base: 2, md: 2}} rowStart={{base: 2, md: 1}}>
                <Text onClick={() => goto(0)} color={'white'} display={'inline-block'} fontSize={'15px'} fontWeight={'bold'}>Up<AiOutlineArrowUp color='white' size={'25px'} display={'inline-block'}/></Text>
            </GridItem>
        </Grid>
        <Flex overflow={'hidden'} justifyContent={'center'} alignItems="center" pt="20px" flexDir={'column'} textAlign={'center'}>
            <Flex justifyContent={'center'} alignItems={'center'}>
                <AiOutlineMail color='red' size="25px"/>
                <Text color={'white'} fontSize={{base: 'xs', md: '15px'}} ml={2}>Email : syafiqparadisam@gmail.com</Text>
            </Flex>
            <Show above='md'>
                <Text color={'white'} fontSize={{base: 'xs', md: '15px'}} mb={3}>Jl.Mlaten RT 26 / 06 Ds. Sidokepung Kec. Buduran Sidoarjo JawaTimur Indonesia</Text>
            </Show>
            <Flex justifyContent={'center'} alignItems={'center'} pb="10px">
                <BiCopyright color='white' size="20px"/>
                <Text color={'white'} ml={2} fontSize={{base: 'xs', md: '15px'}}>Copyright 2023. All Right Reserved</Text>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Footer