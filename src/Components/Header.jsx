import {
  Box,
  Button,
  Divider,
  Image,
  Text,
  Border,
  Link,
  Menu,
  MenuButton,
  MenuIcon,
  IconButton,
  MenuList,
  MenuItem,
  Img,
} from "@chakra-ui/react";
import { Component } from "react";
import { Link as RouterLink } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

class header extends Component {
  state = {};
  render() {
    return (
      <Box
        as="header"
        position="sticky"
        top="0"
        zIndex="1000"
        bgColor="#FFE9D9"
      >
        <Box display={{ base: "none", md: "block", lg: "block" }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            py="20px"
            px={{ base: "", md: "20px", lg: "100px" }}
          >
            <Box href="#home" cursor="pointer">
              <Image src="logo.png" />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={{ base: "", md: "20px", lg: "30px" }}
              fontSize="18px"
              fontWeight="500"
              fontFamily="syne"
              lineHeight="24px"
              color="#14120F"
            >
              <Link
                href="#home"
                // as={ReactRouterLink}
                // to="/"
                _hover={{ textDecoration: "none" }}
              >
                Home
              </Link>
              {/* <Link href="#services">Services</Link> */}
              <Link href="#services" _hover={{ textDecoration: "none" }}>
                Services
              </Link>
              <Link href="#about" _hover={{ textDecoration: "none" }}>
                About
              </Link>
              <Link href="#resume" _hover={{ textDecoration: "none" }}>
                Resume
              </Link>
              <Link href="#portfolio" _hover={{ textDecoration: "none" }}>
                Portfolio
              </Link>
              <Link href="#contact" _hover={{ textDecoration: "none" }}>
                Contact
              </Link>
              {/* <Link
              as={ReactRouterLink}
              to="/example"
              _hover={{ textDecoration: "none" }}
            >
              <Text>Newpage</Text>
            </Link> */}
              {/* <Link
              as={ReactRouterLink}
              to="/exampletwo"
              _hover={{ textDecoration: "none" }}
            >
              Newpage2
            </Link> */}
            </Box>

            <Button
              href="contact"
              bgColor="#14120F"
              color="#F8F8F6"
              colorScheme="none"
              borderRadius="4px"
              fontSize="16px"
              fontFamily="poppins"
              fontWeight="400"
            >
              Get in Touch
            </Button>
          </Box>
          <Box textAlign="center">
            <Divider width="86%" mx="auto" borderColor="#D3CDC5" />
          </Box>
        </Box>
        <Box
          as="header"
          position="sticky"
          top="0"
          zIndex="1000"
          px="20px"
          py="20px"
          display={{ base: "block", md: "none", lg: "none" }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Image src="logo.png" />
            </Box>
            <Box>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<Img src="hamburger.png" w="40px" h="40px" />}
                  variant="none"
                />
                <MenuList>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Services</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Resume</MenuItem>
                  <MenuItem>Portfolio</MenuItem>
                  <MenuItem>Contact</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>
        <Box
          display={{ base: "block", md: "none", lg: "none" }}
          textAlign="center"
        >
          <Divider width="90%" mx="auto" borderColor="#D3CDC5" />
        </Box>
      </Box>
    );
  }
}

export default header;
