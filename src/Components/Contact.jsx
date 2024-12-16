import { Box, Button, Divider, Image, Text, Border } from "@chakra-ui/react";
import { Component } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <Box
        id="contact"
        bgColor="#F8F8F6"
        px={{ base: "20px", md: "30px", lg: "150px" }}
        py={{ base: "50px", md: "100px", lg: "100px" }}
        display={{ base: "column", md: "column", lg: "flex" }}
        alignItems="center"
        gap="125px"
      >
        <Box mb={{ base: "30px", md: "30px", lg: "0" }}>
          <Text
            fontSize="18px"
            fontWeight="700"
            fontFamily="syne"
            color="#FF9B05"
          >
            Contact
          </Text>
          <Text
            bgImage="ellipse2.png"
            backgroundPosition="top left"
            backgroundRepeat="no-repeat"
            fontSize="64px"
            fontWeight="700"
            fontFamily="syne"
            color="#14120F"
            lineHeight="70px"
            mb="36px"
          >
            Let’s Connect
          </Text>
          <Box
            display={{ base: "column", md: "flex", lg: "flex" }}
            alignItems="center"
            gap="20px"
            borderBottom="1px"
            borderColor="#D3CDC5"
            pb="15px"
            mb="20px"
          >
            <Box>
              <Image src="message.png" />
            </Box>
            <Box>
              <Text
                fontSize="18px"
                fontWeight="400"
                fontFamily="DM Sans"
                color="#26221C"
              >
                Email
              </Text>
              <Text
                fontSize={{ base: "18px", md: "20px", lg: "20px" }}
                fontWeight="700"
                fontFamily="Syne"
                color="#14120F"
              >
                muqarramshaheer0@gmail.com
              </Text>
            </Box>
          </Box>

          <Box
            display={{ base: "column", md: "flex", lg: "flex" }}
            alignItems="center"
            gap="20px"
            borderBottom="1px"
            borderColor="#D3CDC5"
            pb="15px"
            mb="50px"
          >
            <Box>
              <Image src="phone.png" />
            </Box>
            <Box>
              <Text
                fontSize="18px"
                fontWeight="400"
                fontFamily="DM Sans"
                color="#26221C"
              >
                Call
              </Text>
              <Text
                fontSize="20px"
                fontWeight="700"
                fontFamily="Syne"
                color="#14120F"
              >
                +92 315 1237475
              </Text>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap="20px">
            <Text
              fontSize="20px"
              fontWeight="700"
              fontFamily="Syne"
              color="#14120F"
            >
              Follow me
            </Text>
            <Box>
              <Image src="behance.png" />
            </Box>
            <Box>
              <Image src="linked.png" />
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            display={{ base: "column", md: "flex", lg: "flex" }}
            gap="24px"
            mb={{ base: "20px", md: "30px", lg: "30px" }}
          >
            <FormControl mb={{ base: "20px", md: "0", lg: "0" }}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Your name*"
                focusBorderColor="#d6d6d6"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Your email*"
                focusBorderColor="#d6d6d6"
              />
            </FormControl>
          </Box>

          <Box
            display={{ base: "column", md: "flex", lg: "flex" }}
            gap="24px"
            mb={{ base: "20px", md: "30px", lg: "30px" }}
          >
            <FormControl mb={{ base: "20px", md: "0", lg: "0" }}>
              <FormLabel>Phone</FormLabel>
              <Input
                type="tel"
                placeholder="Your number*"
                focusBorderColor="#d6d6d6"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                placeholder="Your subject*"
                focusBorderColor="#d6d6d6"
              />
            </FormControl>
          </Box>

          <Box mb="50px">
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Type your message"
              focusBorderColor="#d6d6d6"
            />
          </Box>
          <Button
            display="flex"
            gap="10px"
            size="lg"
            bgColor="#14120F"
            color="#F8F8F6"
            colorScheme="none"
            borderRadius="4px"
            fontSize="18px"
            fontFamily="poppins"
            fontWeight="400"
          >
            Submit
            <Image src="arrow8.png" />
          </Button>
        </Box>
      </Box>
    );
  }
}

export default Contact;
