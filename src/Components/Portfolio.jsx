import { Box, Button, Divider, Image, Text, Border } from "@chakra-ui/react";
import { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <Box
        px={{ base: "20px", md: "30px", lg: "150px" }}
        py={{ base: "50px", md: "100px", lg: "100px" }}
        bgColor="#FFE9D9"
        id="portfolio"
      >
        <Text
          fontSize="18px"
          fontWeight="700"
          fontFamily="syne"
          color="#FF9B05"
          textAlign="center"
          // mb="-30px"
        >
          Portfolio
        </Text>

        <Text
          fontSize={{ base: "40px", md: "64px", lg: "64px" }}
          fontWeight="700"
          fontFamily="syne"
          color="#14120F"
          textAlign="center"
          mb="50px"
        >
          My recent work
        </Text>

        <Box
          display={{ base: "column", md: "flex", lg: "flex" }}
          alignItems="center"
          gap="20px"
          mb="20px"
        >
          <Box mb={{ base: "30px", md: "0", lg: "0" }}>
            <Image src="project1.png" mb="24px" />
            <Box display="flex" alignItems="center" gap="10px">
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                APP
              </Button>
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                DEVELOPMENT
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="26px"
                fontWeight="700"
                fontFamily="syne"
                color="#14120F"
              >
                Basinik Finance App
              </Text>
              <Image src="arrow3.png" />
            </Box>
          </Box>
          <Box mb={{ base: "30px", md: "0", lg: "0" }}>
            <Image src="project2.png" mb="24px" />
            <Box display="flex" alignItems="center" gap="10px">
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                APP
              </Button>
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                DEVELOPMENT
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="26px"
                fontWeight="700"
                fontFamily="syne"
                color="#14120F"
              >
                Oxilex Dashboard Dwsign
              </Text>
              <Image src="arrow3.png" />
            </Box>
          </Box>
        </Box>
        <Box
          display={{ base: "column", md: "flex", lg: "flex" }}
          alignItems="center"
          gap="20px"
          mb="20px"
        >
          <Box mb={{ base: "30px", md: "0", lg: "0" }}>
            <Image src="project2.png" mb="24px" />
            <Box display="flex" alignItems="center" gap="10px">
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                APP
              </Button>
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                DEVELOPMENT
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="26px"
                fontWeight="700"
                fontFamily="syne"
                color="#14120F"
              >
                Oxilex Dashboard Dwsign
              </Text>
              <Image src="arrow3.png" />
            </Box>
          </Box>
          <Box mb={{ base: "30px", md: "0", lg: "0" }}>
            <Image src="project1.png" mb="24px" />
            <Box display="flex" alignItems="center" gap="10px">
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                APP
              </Button>
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                DEVELOPMENT
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="26px"
                fontWeight="700"
                fontFamily="syne"
                color="#14120F"
              >
                Basinik Finance App
              </Text>
              <Image src="arrow3.png" />
            </Box>
          </Box>
        </Box>
        <Box
          display={{ base: "column", md: "flex", lg: "flex" }}
          alignItems="center"
          gap="20px"
          mb="20px"
        >
          <Box mb={{ base: "30px", md: "0", lg: "0" }}>
            <Image src="project1.png" mb="24px" />
            <Box display="flex" alignItems="center" gap="10px">
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                APP
              </Button>
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                DEVELOPMENT
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="26px"
                fontWeight="700"
                fontFamily="syne"
                color="#14120F"
              >
                Basinik Finance App
              </Text>
              <Image src="arrow3.png" />
            </Box>
          </Box>
          <Box>
            <Image src="project2.png" mb="24px" />
            <Box display="flex" alignItems="center" gap="10px">
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                APP
              </Button>
              <Button
                colorScheme="none"
                variant="outline"
                borderRadius="50px"
                px="18px"
              >
                DEVELOPMENT
              </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text
                fontSize="26px"
                fontWeight="700"
                fontFamily="syne"
                color="#14120F"
              >
                Oxilex Dashboard Dwsign
              </Text>
              <Image src="arrow3.png" />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Portfolio;
