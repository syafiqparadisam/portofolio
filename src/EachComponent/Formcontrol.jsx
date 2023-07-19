import { useRef, useState } from "react"
import { Grid, useToast, CircularProgress, GridItem, FormControl, FormLabel, Flex, Link, Input, Textarea, Box } from "@chakra-ui/react"
import { BsGithub, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs"
import emailjs from '@emailjs/browser';

const Formcontrol =() => {
    const [progress, setProgress] = useState(false)
    const form = useRef()
    const name = useRef()
    const option = useRef()
    const toast = useToast()
    
    

    const sendEmail = (e) => {
        e.preventDefault();
        setProgress(true)
    
        emailjs.sendForm("service_gyicy3e", "template_fo97i6y", form.current, "Y5qSjyArYPDPZXVdM")
          .then((result) => {
              toast({
                  duration: 2000,
                  isClosable: true,
                  status: 'success',
                  title: `Thanks You For Your Message ${name.current.value}`,
                  position: 'top-left'
                })
                setProgress(false)
                e.target.reset()
            }, (error) => {
              if(error) throw error
          });
      };

return (
    
        <form ref={form} onSubmit={sendEmail}>
   
            <Grid templateColumns={{base: '1fr',md: 'repeat(5, 1fr)'}} templateRows={{base: '1fr, 1fr, 1fr, 3fr', md: 'repeat(3, 1fr)'}} gap={{base: 1, md: 5}} w="100%">
                <GridItem colStart="1" colEnd={{base: 0, md: 3}} rowStart={1}>
                
                <FormControl border="black">
                    <FormLabel>
                        Name :
                    </FormLabel>
                    <Input type="text" required minLength={2} ref={name} placeholder="Your Name" name="from_name"/>
                </FormControl>
                </GridItem>
                <GridItem colStart={{base: 0, md: 1}} colEnd={{base: 2, md: 3}} rowStart={2}>
                <FormControl border="black">
                    <FormLabel>
                        Email :
                    </FormLabel>
                    <Input type="email" minLength={2} required placeholder="example@gmail.com" name="from_email"/>
                </FormControl>
                </GridItem>
                <GridItem colStart={{base: 0, md: 1}} colEnd={{base: 0, md: 3}} rowStart={3}>
                <FormControl border="black">
                    <FormLabel>
                        Phone Number : <span ref={option} style={{color: 'orange'}}>*option</span>
                    </FormLabel>
                    <Input type="number" onChange={() => option.current.style.display = 'none'} minLength={10} placeholder="08123456789" name="from_number"/>
                </FormControl>
                </GridItem>
                <GridItem colStart={{base: 1, md: 3}} colEnd={{base: 0, md: 6}} rowStart={{base: 4, md: 1}} rowEnd={5}>
                <FormControl border="black">
                    <FormLabel>
                        Message :
                    </FormLabel>
                    <Textarea placeholder="Send Messsage" minLength={3} required name="message"/>
                    <Box textAlign="center" color="blue" mt="20px">
                        <Link>Follow My Social Media</Link>
                    </Box>
                    <Flex justifyContent="space-evenly" alignItems="center" py="10px" my="10px" w="45%" mx="auto">
                        <Link href="https://github.com/syafiqparadisam"><BsGithub size="25px"/></Link>
                        <Link mx={2} href="https://www.instagram.com/syafiqparadisam/?igshid=ZGUzMzM3NWJiOQ=="><BsInstagram size="25px" color="red"/></Link>
                        <Link href="https://www.tiktok.com/@fikkzketchee?lang=id-ID"><BsTiktok size="25px"/></Link>
                        <Link mx={2} href="https://www.youtube.com/channel/UCkGkoStRD4GENfhJdbgPJmg"><BsYoutube size="25px" color="red"/></Link>
                    </Flex>
                </FormControl>
                </GridItem>
            </Grid>
            <Flex pt={'10px'} w="100%" alignItems="flex-end">
                <Input bg="blue" w={'100%'} colorScheme="white" type="submit" color={'white'} value={'Send Message'}/>
            </Flex>
            { progress &&
                <CircularProgress position={'absolute'} top={'50%'} right={'50%'} isIndeterminate color="blue"/>   
            }
        </form>
    
  )
}

export default Formcontrol
