import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";
const MainHeading = ({
  maxWidth,
  color,
  textAlign,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  title,
  lineHeight,
}) => {
  return (
    <Heading
      maxWidth={maxWidth}
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      textAlign={textAlign}>
      {title}
    </Heading>
  );
};
MainHeading.propTypes = {
  maxWidth: PropTypes.any,
  color: PropTypes.any,
  fontFamily: PropTypes.any,
  fontSize: PropTypes.any,
  fontStyle: PropTypes.any,
  fontWeight: PropTypes.any,
  title: PropTypes.any,
  lineHeight: PropTypes.any,
  textAlign: PropTypes.any,
};
export default MainHeading;
