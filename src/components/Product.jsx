import { Grid, GridItem, Box } from "@chakra-ui/react";
import ProductImage from "../assets/product.jpg";
import { Image } from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import Description from "./Description";
const Product = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap={10}>
      <GridItem w="100%">
        <Image
          src={ProductImage}
          alt="Dan Abramov"
          height={{ md: "400px", base: "200px" }}
          width="100%"
        />
      </GridItem>
      <GridItem
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center">
        <Box>
          <MainHeading
            maxWidth="456.253px"
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "34px", base: "24px" }}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            title="Lorem ipsum "
          />
        </Box>

        <Box>
          <Description
            maxWidth="500px"
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "16px", base: "14px" }}
            fontStyle="normal"
            my={5}
            fontWeight="500"
            lineHeight="normal"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
          />
        </Box>
        <Box>
          <Description
            maxWidth="500px"
            color="#000"
            fontFamily="Sofia Sans"
            fontSize={{ md: "16px", base: "14px" }}
            fontStyle="normal"
            my={5}
            fontWeight="500"
            lineHeight="normal"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
          />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Product;
