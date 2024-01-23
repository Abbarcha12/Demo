import { Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
const Description = ({
  maxWidth,
  color,
  fontFamily,
  fontSize,
  my,
  fontStyle,
  fontWeight,
  lineHeight,
  title,
}) => {
  return (
    <Text
      maxWidth={maxWidth}
      color={color}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      my={my}>
      {title}
    </Text>
  );
};
Description.propTypes = {
  maxWidth: PropTypes.any,
  color: PropTypes.any,
  fontFamily: PropTypes.any,
  fontSize: PropTypes.any,
  fontStyle: PropTypes.any,
  fontWeight: PropTypes.any,
  lineHeight: PropTypes.any,
  title: PropTypes.any,
  my: PropTypes.any,
};
export default Description;
