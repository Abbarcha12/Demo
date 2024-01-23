import { Box } from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import Description from "./Description";
import PropTypes from "prop-types";
const ValuesCard = ({ title, decs, icon }) => {
  return (
    <Box
      my={5}
      textAlign={{ md: "center", base: "start" }}
      display="flex"
      flexDirection={{ md: "column", base: "row" }}
      justifyContent={{ md: "center", base: "space-between" }}>
      <Box
        display="flex"
        justifyContent={{ md: "center", base: "start" }}
        my={{ md: 2, base: 1 }}>
        {icon}
      </Box>
      <Box mx={{ md: 0, base: 3 }}>
        <Box my={{ md: 5, base: 0 }}>
          <MainHeading
            maxWidth={{ md: "252px", base: "400px" }}
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "26px", base: "18px" }}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="31.2px"
            title={title}
          />
        </Box>
        <Box my={0.4}>
          <Description
            maxWidth={{ md: "252px", base: "400px" }}
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "16px", base: "14px" }}
            fontStyle="normal"
            fontWeight="400"
            lineHeight="19.2px"
            title={decs}
          />
        </Box>
      </Box>
    </Box>
  );
};
ValuesCard.propTypes = {
  title: PropTypes.any,
  decs: PropTypes.any,
  icon: PropTypes.any,
};
export default ValuesCard;
