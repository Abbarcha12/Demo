import { Box, Container, Image } from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import IconBox from "../assets/ico-1.png";
const Clients = () => {
  return (
    <Box my={10}>
      <Box display={"flex"} justifyContent={"center"}>
        <MainHeading
          maxWidth="550px"
          color="#000"
          fontFamily="Sofia Sans"
          fontSize="34px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="40.2px"
          title="Our Clients"
          textAlign="center"
        />
      </Box>
      <Container
        maxW={{ md: "container.md", base: "container.lg" }}
        display={"flex"}
        my={10}
        gap={10}
        justifyContent={{ md: "start", base: "center" }}
        flexWrap={"wrap"}>
        <Box>
          <Image src={IconBox} boxSize={100} />
        </Box>
        <Box>
          <Image src={IconBox} boxSize={100} />
        </Box>
        <Box>
          <Image src={IconBox} boxSize={100} />
        </Box>
        <Box>
          <Image src={IconBox} boxSize={100} />
        </Box>

        <Box>
          <Image src={IconBox} boxSize={100} />
        </Box>
      </Container>
    </Box>
  );
};

export default Clients;
