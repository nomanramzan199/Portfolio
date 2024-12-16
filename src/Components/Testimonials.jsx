import { Box, Button, Divider, Image, Text, Border } from "@chakra-ui/react";
import { Component } from "react";

class Testimonials extends Component {
  state = {};
  render() {
    return (
      <Box
        px={{ base: "20px", md: "30px", lg: "150px" }}
        py={{ base: "50px", md: "30px", lg: "100px" }}
        display={{ base: "column", md: "column", lg: "flex" }}
        gap="50px"
      >
        <Box mb={{ base: "30px", md: "30px", lg: "0" }}>
          <Text
            fontSize="18px"
            fontWeight="700"
            fontFamily="syne"
            color="#FF9B05"
            mb={{ base: "10px", md: "0", lg: "0" }}
          >
            Testimonial
          </Text>
          <Text
            bgImage="ellipse2.png"
            backgroundPosition="top left"
            backgroundRepeat="no-repeat"
            fontSize="57px"
            fontWeight="700"
            fontFamily="syne"
            color="#14120F"
            lineHeight="60px"
          >
            Client feedback
          </Text>
        </Box>
        <Box mb={{ base: "30px", md: "30px", lg: "0" }}>
          <Image src="comma.png" mb="15px" />
          <Text
            fontSize="18px"
            fontWeight="400"
            fontFamily="syne"
            color="#14120F"
            lineHeight="25px"
            mb="13px"
          >
            “Energistically build alternative scenarios via cross-unit
            applications. Credibly exploit one-to-one strategic theme areas and
            clicks-and-mortar services”
          </Text>
          <Box display="flex" alignItems="center">
            <Divider
              width="40px"
              border="1px"
              borderColor="#C6BEB3"
              mr="10px"
            />
            <Text
              fontSize="20px"
              fontWeight="700"
              fontFamily="syne"
              color="#14120F"
            >
              Jhon Smith
            </Text>
          </Box>
        </Box>
        <Box mb={{ base: "30px", md: "30px", lg: "0" }}>
          <Image src="comma.png" mb="15px" />
          <Text
            fontSize="18px"
            fontWeight="400"
            fontFamily="syne"
            color="#14120F"
            lineHeight="25px"
            mb="13px"
          >
            “Energistically build alternative scenarios via cross-unit
            applications. Credibly exploit one-to-one strategic theme areas and
            clicks-and-mortar services”
          </Text>
          <Box display="flex" alignItems="center">
            <Divider
              width="40px"
              border="1px"
              borderColor="#C6BEB3"
              mr="10px"
            />
            <Text
              fontSize="20px"
              fontWeight="700"
              fontFamily="syne"
              color="#14120F"
            >
              Jhon Smith
            </Text>
          </Box>
        </Box>
        <Box>
          <Image src="comma.png" mb="15px" />
          <Text
            fontSize="18px"
            fontWeight="400"
            fontFamily="syne"
            color="#14120F"
            lineHeight="25px"
            mb="13px"
          >
            “Energistically build alternative scenarios via cross-unit
            applications. Credibly exploit one-to-one strategic theme areas and
            clicks-and-mortar services”
          </Text>
          <Box display="flex" alignItems="center">
            <Divider
              width="40px"
              border="1px"
              borderColor="#C6BEB3"
              mr="10px"
            />
            <Text
              fontSize="20px"
              fontWeight="700"
              fontFamily="syne"
              color="#14120F"
            >
              Jhon Smith
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Testimonials;
