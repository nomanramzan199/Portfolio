import {
  Box,
  Button,
  Divider,
  Image,
  Text,
  Border,
  background,
} from "@chakra-ui/react";
import { Component } from "react";
import Btncomponent from "../Btncomponent";

class HeroSection extends Component {
  state = {};
  render() {
    return (
      <Box
        id="home"
        display={{ base: "column", md: "flex", lg: "flex" }}
        alignItems="center"
        justifyContent={{ base: "none", md: "space-between", lg: "none" }}
        mt={{ base: "0", md: "0", lg: "-80px" }}
        bgColor="#FFE9D9"
        pt={{ base: "50px", md: "50px", lg: "100px" }}
        // pb="100px"
        px={{ base: "20px", md: "30px", lg: "150px" }}
      >
        <Box maxW={{ base: "100%", md: "100%", lg: "60%" }}>
          <Box display="flex" alignItems="center">
            <Divider
              width={{ base: "40px", md: "40px", lg: "50px" }}
              border="1px"
              borderColor="#756857"
              mr={{ base: "10px", md: "10px", lg: "20px" }}
              ml={{ base: "3px", md: "3px", lg: "10px" }}
            />
            <Text
              fontSize={{ base: "16px", md: "16px", lg: "24px" }}
              fontWeight="700"
              fontFamily="syne"
              color="#14120F"
            >
              Hello, I’m
            </Text>
            <Image src="emoji.png" />
          </Box>
          <Text
            bgImage="ellipse.png"
            backgroundPosition=" top left"
            backgroundRepeat="no-repeat"
            fontSize={{ base: "56px", md: "56px", lg: "100px" }}
            fontWeight="700"
            fontFamily="syne"
            color="#14120F"
            lineHeight={{ base: "65px", md: "65px", lg: "85px" }}
            mb="20px"
          >
            Muqarram<br></br> Shaheer
          </Text>
          <Text
            fontSize={{ base: "17px", md: "17px", lg: "24px" }}
            fontWeight="700"
            fontFamily="syne"
            color="#14120F"
            mb="30px"
          >
            UI/UX Designer | Based in Pakistan
          </Text>
          {/* <Button
            bgColor="#14120F"
            color="#F8F8F6"
            colorScheme="transparent"
            py="20px"
            px="24px"
            borderRadius="4px"
            fontSize="18px"
            fontFamily="poppins"
            fontWeight="400"
            mb="70px"
          >
            Let's Talk
          </Button> */}

          <Button
            href="#contact"
            display="flex"
            gap="10px"
            bgColor="#14120F"
            color="#F8F8F6"
            colorScheme="none"
            size="lg"
            borderRadius="4px"
            fontSize="18px"
            fontFamily="poppins"
            fontWeight="400"
            mb={{ base: "30px", md: "30px", lg: "70px" }}
          >
            Let's Talk
            <Box>
              <Image src="arrow8.png" />
            </Box>
          </Button>

          <Box display="flex" alignItems="center">
            <Text
              fontSize={{ base: "28px", md: "28px", lg: "44px" }}
              fontWeight="700"
              fontFamily="syne"
              color="#14120F"
              mr="12px"
            >
              1.2k+
            </Text>
            <Text
              fontSize="18px"
              fontWeight="400"
              fontFamily="DM Sans"
              color="#26221C"
              mr="22px"
            >
              Worldwide client
            </Text>
            <Box display="flex" alignItems="center" gap="20px">
              <Image src="line.png" />
              <Image src="behance.png" />
              <Image src="linked.png" />
              {/* <Btncomponent text="hi" colorbg="green" /> */}
            </Box>
          </Box>
        </Box>
        <Box maxW="40%" display={{ base: "none", md: "block", lg: "block" }}>
          <Image src="muqarram2.png" />
          {/* <Btncomponent text="helo" colorbg="red" /> */}
        </Box>
      </Box>
    );
  }
}

export default HeroSection;
