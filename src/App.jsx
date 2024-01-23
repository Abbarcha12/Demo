import { Box, Container } from "@chakra-ui/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Product from "./components/Product";
import Presentation from "./components/Presentation";
import Values from "./components/Values";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Patners from "./components/Patners";
import Confinanciamento from "./components/Cofinanciamento";

const App = () => {
  return (
    <Box>
      <Box my={5} w={{ base: "90%", md: "80%" }} mx="auto">
        <Header />
        <HeroSection />
        <Product />
        <Presentation />
        <Values />
      </Box>
      <Box bg="#E1E1E1" p={{ md: 10, base: 2 }}>
        <Container maxW={{ base: "90%", md: "76%" }}>
          <Features />
        </Container>
      </Box>
      <Clients />
      <Box bg="#E1E1E1" p={{ md: 10, base: 2 }}>
        <Contact />
      </Box>
      <Box bg="#E1E1E1" p={{ md: 10, base: 2 }} my={1}>
        <Patners />
      </Box>
      <Box bg="#E1E1E1" p={{ md: 10, base: 2 }} my={1}>
        <Confinanciamento />
      </Box>
    </Box>
  );
};

export default App;
