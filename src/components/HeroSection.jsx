import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import Video from "../assets/2.mp4";
import MainHeading from "./MainHeading";
import Description from "./Description";
const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <Box position="relative" width="100%" height="auto" my={5}>
      <video ref={videoRef} width="100%" height="519.5px" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box
        position="absolute"
        color="#000"
        top="50%"
        left="5%"
        transform="translateY(-50%)"
        textAlign="start">
        <MainHeading
          maxWidth="456.253px"
          color="#000"
          fontFamily="Sofia Sans"
          fontSize={{ md: "34px", base: "18px" }}
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
        />

        <Description
          maxWidth="335px"
          color="#000"
          fontFamily="Sofia Sans"
          fontSize={{ md: "18px", base: "14px" }}
          fontStyle="normal"
          my={5}
          fontWeight="600"
          lineHeight="normal"
          title={"“Lorem ipsum dolor sit amet, consectetur”"}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
