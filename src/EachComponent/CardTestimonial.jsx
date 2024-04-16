import { Avatar, Text, Flex, AvatarBadge, Heading, Card, CardBody, CardHeader, Stack } from "@chakra-ui/react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const CardTestimonial = ({ name, icon, message, rating, animate }) => {
  
  const maxRate = 5
  let filledStarts = Math.floor(rating)
  let remainingStars = maxRate - filledStarts

  if (rating > maxRate) {
    filledStarts = maxRate
    remainingStars = 0
  }
  if (rating == 0) {
    filledStarts = 0
    remainingStars = 5
  }
  
  const stars = []

  for (let i = 0; i < filledStarts; i++) {
    stars.push(
      <AiFillStar color="yellow" size="25px"/>
    )
  }
  for (let i = 0; i < remainingStars;i++) {
    stars.push(
      <AiOutlineStar color="yellow" size="25px"/>
    )
  }

  useEffect(() => {
      AOS.init({
        once: false,
        mirror: true,
        duration: 2000,
        offset: 150
    })
  },[])
   
  return (
    <Card boxShadow={'xl'} data-aos={animate}>
        <CardHeader textAlign={'center'} w={'100%'}>
          <Stack direction={'row'}>
            <Avatar icon={icon}>
                <AvatarBadge boxSize={'1.25em'} bg={
                 rating >= 3 ? 'green' : 'red'}/>
            </Avatar>
            <Heading my='auto' ml={3} as='h6' size='sm' float={'right'}>{ name }</Heading>
          </Stack>
        </CardHeader>
        <CardBody w={'100%'}>
          <Flex alignItems={'center'}>
            <Text fontWeight={500} mr={1} mb={1} display={{base: 'block', md: 'inline-block'}}>Rating : </Text>
            {stars}
          </Flex>
          <Card my={3} boxShadow={'xs'} w={'100%'} mx={'auto'}>
            <CardHeader>
              <Heading as='h3' size={'md'}>Message : </Heading>
            </CardHeader>
            <CardBody mt={'-7'}>
            { message }
            </CardBody>
          </Card>
        </CardBody>
    </Card>
  )
}

CardTestimonial.propTypes = {
  
}

export default CardTestimonial