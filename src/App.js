import { Box } from "@chakra-ui/react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Experiences from "./Components/Experiences";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Examplepage from "./Components/Examplepage";
// import Xampp from "./Components/Xampp";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";

function App() {
  return (
    <Box width="1920px" maxWidth="100%">
      {/* <Router> */}
      <Header />
      <HeroSection />
      <Services />
      <Experiences />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />

      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/example" element={<Examplepage />} />
          <Route path="/exampletwo" element={<Xampp />} />
        </Routes> */}

      <Footer />
      {/* </Router> */}
    </Box>
  );
}

export default App;
