import { Box } from "@chakra-ui/react";

import Video from "../assets/2.mp4";

const Presentation = () => {
  return (
    <Box position="relative" width="100%" height="auto" my={5}>
      <video width="100%" height="521px" autoPlay loop muted playsInline>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default Presentation;
