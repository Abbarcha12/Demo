import { Box } from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import Description from "./Description";

const Features = () => {
  return (
    <Box>
      <Box my={{ md: "50px", base: "20px" }}>
        <MainHeading
          maxWidth="550px"
          color="#000"
          fontFamily="Sofia Sans"
          fontSize={{ md: "34px", base: "28px" }}
          fontStyle="normal"
          fontWeight="700"
          lineHeight="40.2px"
          title="Lorem ipsum"
        />
      </Box>
      <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
        <Box>
          <MainHeading
            maxWidth="336px"
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "30px", base: "20px" }}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="31.2px"
            title="Lorem ipsum"
          />
          <Description
            maxWidth={{ md: "354px", base: "auto" }}
            color="#000"
            fontFamily="Sofia Sans"
            fontSize="16px"
            fontStyle="normal"
            my={{ md: 5, base: 2 }}
            fontWeight="400"
            lineHeight="normal"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-
            "
          />
        </Box>
        <Box>
          <MainHeading
            maxWidth="336px"
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "30px", base: "20px" }}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="31.2px"
            title="Lorem ipsum"
          />
          <Description
            maxWidth={{ md: "354px", base: "auto" }}
            color="#000"
            fontFamily="Sofia Sans"
            fontSize="16px"
            fontStyle="normal"
            my={{ md: 5, base: 2 }}
            fontWeight="400"
            lineHeight="normal"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-
            "
          />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        my={{ md: 10, base: 3 }}
        flexWrap={"wrap"}>
        <Box>
          <MainHeading
            maxWidth="336px"
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "30px", base: "20px" }}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="31.2px"
            title="Lorem ipsum"
          />
          <Description
            maxWidth={{ md: "354px", base: "auto" }}
            color="#000"
            fontFamily="Sofia Sans"
            fontSize="16px"
            fontStyle="normal"
            my={{ md: 5, base: 2 }}
            fontWeight="400"
            lineHeight="normal"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-
            "
          />
        </Box>
        <Box>
          <MainHeading
            maxWidth="336px"
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "30px", base: "20px" }}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="31.2px"
            title="Lorem ipsum"
          />
          <Description
            maxWidth={{ md: "354px", base: "auto" }}
            color="#000"
            fontFamily="Sofia Sans"
            fontSize="16px"
            fontStyle="normal"
            my={{ md: 5, base: 2 }}
            fontWeight="400"
            lineHeight="normal"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-
            "
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
