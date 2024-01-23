import { Container, Box, Image } from "@chakra-ui/react";

import MainHeading from "./MainHeading";
import IconBox from "../assets/ico-1.png";

const Confinanciamento = () => {
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
          title="Cofinanciamento"
        />
      </Box>
      <Box
        display={"flex"}
        gap={5}
        my={3}
        flexDirection={{ md: "row", base: "row" }}>
        <Box>
          <Image
            src={IconBox}
            boxSize={57}
            width={{ md: "300px", base: "auto" }}
          />
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

export default Confinanciamento;
