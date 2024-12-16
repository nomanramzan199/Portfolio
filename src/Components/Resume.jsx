import {
  Box,
  Button,
  Divider,
  Image,
  Text,
  Border,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { Component } from "react";

class Resume extends Component {
  state = {};
  render() {
    return (
      <Box
        px={{ base: "20px", md: "30px", lg: "150px" }}
        py={{ base: "50px", md: "100px", lg: "100px" }}
        bgColor="#F8F8F6"
        id="resume"
      >
        <Box>
          <Text
            fontSize="18px"
            fontWeight="700"
            fontFamily="syne"
            color="#FF9B05"
            mb="10px"
          >
            Resume
          </Text>
          <Text
            bgImage="ellipse2.png"
            backgroundPosition="top left"
            backgroundRepeat="no-repeat"
            fontSize={{ base: "58px", md: "64px", lg: "64px" }}
            fontWeight="700"
            fontFamily="syne"
            color="#14120F"
            lineHeight="70px"
            mb="10px"
            w="484px"
          >
            All over my details find here...
          </Text>
          <Tabs
            orientation="vertical"
            variant="unstyled"
            display={{ base: "flex", md: "flex ", lg: "flex" }}
            flexDirection={{ base: "column", md: "column ", lg: "row" }}
          >
            <TabList mb={{ base: "0", md: "20px", lg: "0" }}>
              <Tab
                fontSize="15px"
                fontWeight="700"
                fontFamily="DM Sans"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bgColor="#fff"
                w={{ base: "100%", md: "100% ", lg: "411px" }}
                h="55px"
                borderRadius="5px"
                mb="10px"
                color="#14120F"
                border="none"
                _selected={{ color: "#fff", bgColor: "#14120F" }}
                _hover={{
                  bgColor: "#14120F",

                  color: "#fff",
                }}
              >
                About Me
                <Image src="arrow7.png" />
              </Tab>

              <Tab
                fontSize="15px"
                fontWeight="700"
                fontFamily="DM Sans"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bgColor="#fff"
                w={{ base: "100%", md: "100%", lg: "411px" }}
                h="55px"
                borderRadius="5px"
                mb="10px"
                color="#14120F"
                border="none"
                _selected={{ color: "#fff", bgColor: "#14120F" }}
                _hover={{
                  bgColor: "#14120F",

                  color: "#fff",
                }}
              >
                Experience
                <Image src="arrow7.png" />
              </Tab>

              <Tab
                fontSize="15px"
                fontWeight="700"
                fontFamily="DM Sans"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bgColor="#fff"
                w={{ base: "100%", md: "100% ", lg: "411px" }}
                h="55px"
                borderRadius="5px"
                mb="10px"
                color="#14120F"
                border="none"
                _selected={{ color: "#fff", bgColor: "#14120F" }}
                _hover={{
                  bgColor: "#14120F",

                  color: "#fff",
                }}
              >
                Education
                <Image src="arrow7.png" />
              </Tab>

              <Tab
                fontSize="15px"
                fontWeight="700"
                fontFamily="DM Sans"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bgColor="#fff"
                w={{ base: "100%", md: "100% ", lg: "411px" }}
                h="55px"
                borderRadius="5px"
                // mb="10px"
                color="#14120F"
                border="none"
                _selected={{ color: "#fff", bgColor: "#14120F" }}
                _hover={{
                  bgColor: "#14120F",

                  color: "#fff",
                }}
              >
                Skills
                <Image src="arrow7.png" />
              </Tab>
            </TabList>
            <TabPanels
              ml={{ base: "0", md: "0", lg: "70px" }}
              mt={{ base: "0", md: "0", lg: "-270px" }}
            >
              <TabPanel>
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  fontFamily="Syne"
                  color="#14120F"
                  mb="30px"
                >
                  Based in Pakistan
                </Text>
                <Text
                  fontSize="18px"
                  fontWeight="400"
                  fontFamily="DM Sans"
                  color="#26221C"
                  mb="50px"
                >
                  Muqarram Shaheer, UI/UX Designer, based in Pakistan. That is
                  where I come in. A lover of words, a wrangler of copy. Here to
                  create copy that not only reflects who you are and what you
                  stand for,<br></br>
                  <br></br>
                  but words that truly land with those that read them, calling
                  your audience in and making them want more.
                </Text>
                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  alignItems="center"
                  gap="50px"
                  mb="15px"
                >
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                    color="#26221C"
                    w="97px"
                  >
                    Name
                  </Text>

                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    fontFamily="Syne"
                    color="#14120F"
                    textAlign="left"
                  >
                    Muqarram Shaheer
                  </Text>
                </Box>
                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  alignItems="center"
                  gap="50px"
                  mb="15px"
                >
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                    color="#26221C"
                    w="97px"
                  >
                    Nationality
                  </Text>

                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    fontFamily="Syne"
                    color="#14120F"
                    textAlign="left"
                  >
                    Pakistan
                  </Text>
                </Box>

                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  alignItems="center"
                  gap="50px"
                  mb="15px"
                >
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                    color="#26221C"
                    w="97px"
                  >
                    Phone
                  </Text>
                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    fontFamily="Syne"
                    color="#14120F"
                  >
                    +92 315 1237475
                  </Text>
                </Box>

                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  alignItems="center"
                  gap="50px"
                  mb="15px"
                >
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                    color="#26221C"
                    w="97px"
                  >
                    Email
                  </Text>
                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    fontFamily="Syne"
                    color="#14120F"
                  >
                    muqarramshaheerO@gmail.com
                  </Text>
                </Box>

                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  alignItems="center"
                  gap="50px"
                  mb="15px"
                >
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                    color="#26221C"
                    w="97px"
                  >
                    Experience
                  </Text>
                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    fontFamily="Syne"
                    color="#14120F"
                  >
                    03+ years
                  </Text>
                </Box>

                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  alignItems="center"
                  gap="50px"
                  mb="15px"
                >
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                    color="#26221C"
                    w="97px"
                  >
                    Freelance
                  </Text>
                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    fontFamily="Syne"
                    color="#14120F"
                  >
                    Available
                  </Text>
                </Box>

                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  alignItems="center"
                  gap="50px"
                  mb="15px"
                >
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                    color="#26221C"
                    w="97px"
                  >
                    Skype
                  </Text>

                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    fontFamily="Syne"
                    color="#14120F"
                  >
                    muqarram shaheer
                  </Text>
                </Box>

                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  alignItems="center"
                  gap="50px"
                >
                  <Text
                    fontSize="18px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                    color="#26221C"
                    w="97px"
                  >
                    Language
                  </Text>

                  <Text
                    fontSize="24px"
                    fontWeight="700"
                    fontFamily="Syne"
                    color="#14120F"
                  >
                    Urdu, English
                  </Text>
                </Box>
              </TabPanel>

              <TabPanel>
                <Text
                  fontSize="24px"
                  fontWeight="700"
                  fontFamily="Syne"
                  color="#14120F"
                  mb="30px"
                >
                  Experience
                </Text>
                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  gap="20px"
                  mb="25px"
                >
                  <Box
                    bgColor="#fff"
                    p="30px 34px 39px 28px"
                    borderRadius="5px"
                    w={{ base: "100%", md: "300px", lg: "300px" }}
                    mb={{ base: "25px", md: "0", lg: "0" }}
                  >
                    <Text
                      color="#14120F"
                      fontSize="15px"
                      fontWeight="400"
                      fontFamily="DM Sans"
                      mb="30px"
                    >
                      Present
                    </Text>
                    <Box
                      display="flex"
                      mb="20px"
                      alignItems="center"
                      gap="10px"
                    >
                      <Box>
                        <Image src="ellipse3.png" />
                      </Box>
                      <Text
                        color="#14120F"
                        fontSize="16px"
                        fontWeight="400"
                        fontFamily="DM Sans"
                      >
                        Webring.ltd
                      </Text>
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="20px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      UI/UX Designer
                    </Text>
                  </Box>
                  <Box
                    bgColor="#fff"
                    p="30px 34px 39px 28px"
                    borderRadius="5px"
                    w={{ base: "100%", md: "300px", lg: "300px" }}
                  >
                    <Text
                      color="#14120F"
                      fontSize="15px"
                      fontWeight="400"
                      fontFamily="DM Sans"
                      mb="30px"
                    >
                      Remote 2023 - 2024
                    </Text>
                    <Box
                      display="flex"
                      mb="20px"
                      alignItems="center"
                      gap="10px"
                    >
                      <Box>
                        <Image src="ellipse3.png" />
                      </Box>
                      <Text
                        color="#14120F"
                        fontSize="16px"
                        fontWeight="400"
                        fontFamily="DM Sans"
                      >
                        EverWel Solutions
                      </Text>
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="20px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      UI/UX Designer
                    </Text>
                  </Box>
                </Box>

                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  gap="20px"
                >
                  <Box
                    bgColor="#fff"
                    p="30px 34px 39px 28px"
                    borderRadius="5px"
                    w={{ base: "100%", md: "300px", lg: "300px" }}
                    mb={{ base: "25px", md: "0", lg: "0" }}
                  >
                    <Text
                      color="#14120F"
                      fontSize="15px"
                      fontWeight="400"
                      fontFamily="DM Sans"
                      mb="30px"
                    >
                      2022 - 2023
                    </Text>
                    <Box
                      display="flex"
                      mb="20px"
                      alignItems="center"
                      gap="10px"
                    >
                      <Box>
                        <Image src="ellipse3.png" />
                      </Box>
                      <Text
                        color="#14120F"
                        fontSize="16px"
                        fontWeight="400"
                        fontFamily="DM Sans"
                      >
                        ZeeAn Technologies
                      </Text>
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="20px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Graphic Designer
                    </Text>
                  </Box>
                  <Box
                    bgColor="#fff"
                    p="30px 34px 39px 28px"
                    borderRadius="5px"
                    w={{ base: "100%", md: "300px", lg: "300px" }}
                  >
                    <Text
                      color="#14120F"
                      fontSize="15px"
                      fontWeight="400"
                      fontFamily="DM Sans"
                      mb="30px"
                    >
                      2021 - 2022
                    </Text>
                    <Box
                      display="flex"
                      mb="20px"
                      alignItems="center"
                      gap="10px"
                    >
                      <Box>
                        <Image src="ellipse3.png" />
                      </Box>
                      <Text
                        color="#14120F"
                        fontSize="16px"
                        fontWeight="400"
                        fontFamily="DM Sans"
                      >
                        Gino Media
                      </Text>
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="20px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Graphic Design Intern
                    </Text>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Text
                  color="#14120F"
                  fontSize="24px"
                  fontWeight="700"
                  fontFamily="Syne"
                  mb="30px"
                >
                  Education
                </Text>
                <Box
                  w={{ base: "100%", md: "650px", lg: "650px" }}
                  bgColor="#fff"
                  borderRadius="5px"
                  p="30px 87px 40px 27px"
                  mb="30px"
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  // alignItems="center"
                  gap="100px"
                >
                  <Text
                    color="#14120F"
                    fontSize="15px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                  >
                    2021
                  </Text>

                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="10px"
                      mb="10px"
                    >
                      <Box>
                        <Image src="ellipse3.png" />
                      </Box>
                      <Text
                        color="#14120F"
                        fontSize="18px"
                        fontWeight="400"
                        fontFamily="DM Sans"
                      >
                        Society For Education
                      </Text>
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="24px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Graphic & UI-UX Designing
                    </Text>
                  </Box>
                </Box>

                <Box
                  w={{ base: "100%", md: "650px", lg: "650px" }}
                  bgColor="#fff"
                  borderRadius="5px"
                  p="30px 87px 40px 27px"
                  mb="30px"
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  // alignItems="center"
                  gap="100px"
                >
                  <Text
                    color="#14120F"
                    fontSize="15px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                  >
                    2020
                  </Text>

                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="10px"
                      mb="10px"
                    >
                      <Box>
                        <Image src="ellipse3.png" />
                      </Box>
                      <Text
                        color="#14120F"
                        fontSize="18px"
                        fontWeight="400"
                        fontFamily="DM Sans"
                      >
                        Govt. Degree College
                      </Text>
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="24px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Intermediate
                    </Text>
                  </Box>
                </Box>

                <Box
                  w={{ base: "100%", md: "650px", lg: "650px" }}
                  bgColor="#fff"
                  borderRadius="5px"
                  p="30px 87px 40px 27px"
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  // alignItems="center"
                  gap="100px"
                >
                  <Text
                    color="#14120F"
                    fontSize="15px"
                    fontWeight="400"
                    fontFamily="DM Sans"
                  >
                    2018
                  </Text>

                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="10px"
                      mb="10px"
                    >
                      <Box>
                        <Image src="ellipse3.png" />
                      </Box>
                      <Text
                        color="#14120F"
                        fontSize="18px"
                        fontWeight="400"
                        fontFamily="DM Sans"
                      >
                        Jauhar Foundation
                      </Text>
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="24px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Matric
                    </Text>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Text
                  mb="30px"
                  color="#14120F"
                  fontSize="24px"
                  fontWeight="700"
                  fontFamily="Syne"
                >
                  Skills
                </Text>
                <Box
                  display={{ base: "column", md: "flex", lg: "flex" }}
                  gap="18px"
                  alignItems="center"
                  mb="30px"
                >
                  <Box
                    w={{ base: "100%", md: "215px", lg: "215px" }}
                    borderRadius="5px"
                    p="30px 28px 30px 28px"
                    bgColor="#fff"
                    display="flex"
                    alignItems="center"
                    gap="16px"
                    mb={{ base: "30px", md: "0", lg: "0" }}
                  >
                    <Box>
                      <Image src="figma.png" />
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="18px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Figma
                    </Text>
                  </Box>

                  <Box
                    w={{ base: "100%", md: "215px", lg: "215px" }}
                    borderRadius="5px"
                    p="30px 28px 30px 28px"
                    bgColor="#fff"
                    display="flex"
                    alignItems="center"
                    gap="16px"
                    mb={{ base: "30px", md: "0", lg: "0" }}
                  >
                    <Box>
                      <Image src="xd.png" />
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="18px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Adobe XD
                    </Text>
                  </Box>

                  <Box
                    w={{ base: "100%", md: "215px", lg: "215px" }}
                    borderRadius="5px"
                    p="30px 28px 30px 28px"
                    bgColor="#fff"
                    display="flex"
                    alignItems="center"
                    gap="16px"
                  >
                    <Box>
                      <Image src="ps.png" />
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="18px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Photoshop
                    </Text>
                  </Box>
                </Box>

                <Box>
                  <Box
                    w={{ base: "100%", md: "215px", lg: "215px" }}
                    borderRadius="5px"
                    p="30px 28px 30px 28px"
                    bgColor="#fff"
                    display="flex"
                    alignItems="center"
                    gap="16px"
                  >
                    <Box>
                      <Image src="ai.png" />
                    </Box>
                    <Text
                      color="#14120F"
                      fontSize="18px"
                      fontWeight="700"
                      fontFamily="Syne"
                    >
                      Illustrator
                    </Text>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    );
  }
}

export default Resume;
