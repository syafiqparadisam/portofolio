import { Box, Flex, Heading, Grid, GridItem } from "@chakra-ui/react"
import CardTestimonial from "../EachComponent/CardTestimonial"

const Testimonial = () => {
  return (
    <Flex
    flexDir={'column'}
    as='section'
    pt={20}
    justifyContent={'center'}
    minH={'100vh'}
    bgAttachment={'fixed'}
    bgPos={'center'}
    bgImage="url(./src/image/5.jpg)"
    bgSize={'cover'}
    >
        <Box w={'100%'} mx={'auto'} py={'10px'} my={'8'}>
            <Heading textAlign={'center'} color={'white'} fontFamily={'serif'}>My Client</Heading>
        </Box>
        <Grid justifyContent={'center'} w={'80%'} mx="auto" justifyItems={'space-around'} gap={10} templateColumns={{base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)'}}>
          <GridItem>
            <CardTestimonial animate="fade-down" rating={5} message={'I Really Like Your Work Its Very Good'}/>
          </GridItem>
          <GridItem>
           <CardTestimonial animate="fade-up" rating={4} message={'I Really Like Your Work Its Very Good'}/>
          </GridItem>
          <GridItem>
            <CardTestimonial animate="fade-down" rating={5} message={'I Really Like Your Work Its Very Good'}/>
          </GridItem>
          <GridItem>
            <CardTestimonial animate="fade-up" rating={4} message={'I Really Like Your Work Its Very Good'}/>
          </GridItem>
          
        </Grid>
    </Flex>
  )
}

export default Testimonial