import { Box, Button, Divider, Image, Text, Border } from "@chakra-ui/react";
import { Component } from "react";

class Experiences extends Component {
  state = {};
  render() {
    return (
      <Box
        px={{ base: "20px", md: "30px", lg: "150px" }}
        py={{ base: "0", md: "100px", lg: "100px" }}
        pb={{ base: "50px", md: "0", lg: "0" }}
        display={{ base: "column", md: "flex", lg: "flex" }}
        gap="100px"
        id="about"
      >
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          mb={{ base: "20px", md: "0", lg: "0" }}
        >
          <Image src="mexperience.png" />
        </Box>
        <Box w={{ base: "100%", md: "100%", lg: "50%" }}>
          <Text
            fontSize="18px"
            fontWeight="700"
            fontFamily="syne"
            color="#FF9B05"
          >
            Hello I’m
          </Text>

          <Text
            bgImage="ellipse2.png"
            backgroundPosition="top left"
            backgroundRepeat="no-repeat"
            fontSize={{ base: "55px", md: "50px", lg: "64px" }}
            fontWeight="700"
            fontFamily="syne"
            color="#14120F"
            lineHeight="70px"
          >
            Muqarram, UI/UX<br></br> Designer
          </Text>

          <Text
            fontSize="16px"
            fontWeight="400"
            fontFamily="DM Sans"
            color="#26221C"
            lineHeight="24px"
            mb="30px"
          >
            That is where I come in. A lover of words, a wrangler of copy. Here
            to create copy that not only reflects who you are and what you stand
            for, but words that truly land with those that read them, calling
            your audience in and making them .
          </Text>
          <Box display="flex" alignItems="center" gap="34px" mb="34px">
            <Box>
              <Text
                fontSize="32px"
                fontWeight="700"
                fontFamily="syne"
                color="#000"
              >
                08
              </Text>
              <Text
                fontSize="16px"
                fontWeight="400"
                fontFamily="DM Sans"
                color="#26221C"
              >
                Award winner
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="32px"
                fontWeight="700"
                fontFamily="syne"
                color="#000"
              >
                1.2k
              </Text>
              <Text
                fontSize="16px"
                fontWeight="400"
                fontFamily="DM Sans"
                color="#26221C"
              >
                Worldwide client
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="32px"
                fontWeight="700"
                fontFamily="syne"
                color="#000"
              >
                3.5k
              </Text>
              <Text
                fontSize="16px"
                fontWeight="400"
                fontFamily="DM Sans"
                color="#26221C"
              >
                Job done successfully
              </Text>
            </Box>
          </Box>
          <Button
            display="flex"
            gap="10px"
            bgColor="#14120F"
            color="#F8F8F6"
            colorScheme="none"
            size="lg"
            borderRadius="4px"
            fontSize="16px"
            fontFamily="poppins"
            fontWeight="400"
          >
            Download My Resume
            <Image src="arrow8.png" />
          </Button>
        </Box>
      </Box>
    );
  }
}

export default Experiences;
