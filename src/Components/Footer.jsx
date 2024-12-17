import { Box, Button, Divider, Image, Text, Border } from "@chakra-ui/react";
import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Box
        px={{ base: "20px", md: "30px", lg: "100px" }}
        pt={{ base: "50px", md: "100px", lg: "100px" }}
        pb="50px"
        bgColor="#"
      >
        <Box
          display={{ base: "column", md: "column", lg: "flex" }}
          gap="50px"
          alignItems="center"
          mb="40px"
        >
          <Box mb={{ base: "0", md: "30px", lg: "0" }}>
            <Text
              bgImage="ellipse2.png"
              backgroundPosition="top left"
              backgroundRepeat="no-repeat"
              fontSize="64px"
              fontWeight="700"
              fontFamily="syne"
              color="#F8F8F6"
              lineHeight="70px"
              mb="30px"
            >
              Let’s work together
            </Text>
            <Box
              display="flex"
              alignItems="center"
              gap="20px"
              mb={{ base: "20px", md: "0", lg: "0" }}
            >
              <Text
                fontSize="18px"
                fontWeight="700"
                fontFamily="syne"
                color="#F8F8F6"
              >
                Based in Pakistan
              </Text>
              <Box>
                <Image src="line2.png" />
              </Box>
              <Box>
                <Image src="behance2.png" />
              </Box>
              <Box>
                <Image src="linked2.png" />
              </Box>
            </Box>
          </Box>
          <Box
            display={{ base: "column", md: "column", lg: "flex" }}
            gap="20px"
          >
            <Box
              w={{ base: "100%", md: "100%", lg: "408px" }}
              // h="255px"
              p="39px 19px 26px 30px"
              borderRadius="10px"
              border="2px"
              borderColor="#26221C"
              mb={{ base: "20px", md: "30px", lg: "0" }}
            >
              <Text
                fontSize="15px"
                fontWeight="700"
                fontFamily="syne"
                color="#F8F8F6"
                mb="100px"
              >
                Looking for a hectic designer?
              </Text>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text
                  fontSize={{ base: "14px", md: "25px", lg: "15px" }}
                  fontWeight="700"
                  fontFamily="syne"
                  color="#FF9B05"
                >
                  muqarramshaheerO@gmail.com
                </Text>
                <Box>
                  <Image src="arrow6.png" />
                </Box>
              </Box>
            </Box>

            <Box
              w={{ base: "100%", md: "100%", lg: "408px" }}
              // h="255px"
              p="39px 19px 26px 30px"
              borderRadius="10px"
              border="2px"
              borderColor="#26221C"
            >
              <Text
                fontSize="15px"
                fontWeight="700"
                fontFamily="syne"
                color="#F8F8F6"
                mb="100px"
              >
                Want a more in-depth look at my history?
              </Text>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text
                  fontSize={{ base: "20px", md: "25px", lg: "20px" }}
                  fontWeight="700"
                  fontFamily="syne"
                  color="#FF9B05"
                >
                  +92 315 1237475
                </Text>
                <Box>
                  <Image src="arrow6.png" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Text
          pb="40px"
          borderBottom="2px"
          borderColor="#26221C"
          fontSize={{ base: "30px", md: "80px", lg: "109px" }}
          fontWeight="800"
          fontFamily="syne"
          color="#FFF1DB"
          textAlign="center"
        >
          Muqarram
        </Text>
        <Box
          display={{ base: "column", md: "flex", lg: "flex" }}
          alignItems="center"
          justifyContent="space-between"
          pt="20px"
        >
          <Text
            fontSize="15px"
            fontWeight="500"
            fontFamily="DM Sans"
            color="#F8F8F6"
            textAlign={{ base: "center", md: "left", lg: "left" }}
            mb={{ base: "10px", md: "0", lg: "0" }}
          >
            ©2024 Muqarram Shaheer, All Rights Reserved
          </Text>

          <Box
            // onClick={scrollToTop}
            href="#home"
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent={{ base: "center", md: "normal", lg: "normal" }}
          >
            <Text
              fontSize="15px"
              fontWeight="500"
              fontFamily="DM Sans"
              color="#F8F8F6"
            >
              Back to Top
            </Text>
            <Box ml="5px">
              <Image src="uparrow.png" />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Footer;
