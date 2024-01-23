import { Container, Box, Image } from "@chakra-ui/react";

import MainHeading from "./MainHeading";
import IconBox from "../assets/ico-1.png";

const Patners = () => {
  return (
    <Container maxW="container.lg" mx={"auto"}>
      <Box>
        <MainHeading
          maxWidth="456.253px"
          color="#000"
          fontFamily="Sofia Sans"
          fontSize="12px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
          title="Partners"
        />
      </Box>
      <Box display={"flex"} gap={5} my={3}>
        <Box>
          <Image src={IconBox} boxSize={55} />
        </Box>
        <Box>
          <Image src={IconBox} boxSize={55} />
        </Box>
        <Box>
          <Image src={IconBox} boxSize={55} />
        </Box>
        <Box>
          <Image src={IconBox} boxSize={55} />
        </Box>

        <Box>
          <Image src={IconBox} boxSize={55} />
        </Box>
      </Box>
    </Container>
  );
};

export default Patners;
