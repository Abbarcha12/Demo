import { Box, Container } from "@chakra-ui/react";
import MainHeading from "./MainHeading";
import ValuesCard from "./ValuesCard";
const Values = () => {
  return (
    <Box mx={"auto"} my={4}>
      <Box display={"flex "} justifyContent={"center"} textAlign={"center"}>
        <MainHeading
          maxWidth="800px"
          color="#000"
          fontFamily="Sofia Sans"
          fontSize={{ md: "34px", base: "18px" }}
          fontStyle="normal"
          fontWeight="700"
          lineHeight="normal"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
        />
      </Box>
      <Container
        maxW="container.lg"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap">
        <ValuesCard
          icon={
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="-0.5"
                y="0.5"
                width="99"
                height="98.5624"
                transform="matrix(-1 0 0 1 99 0)"
                stroke="#C3C3C3"
              />
            </svg>
          }
          title="Lorem ipsum"
          decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
        />
        <ValuesCard
          icon={
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="-0.5"
                y="0.5"
                width="99"
                height="98.5624"
                transform="matrix(-1 0 0 1 99 0)"
                stroke="#C3C3C3"
              />
            </svg>
          }
          title="Lorem ipsum"
          decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
        />
        <ValuesCard
          icon={
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="-0.5"
                y="0.5"
                width="99"
                height="98.5624"
                transform="matrix(-1 0 0 1 99 0)"
                stroke="#C3C3C3"
              />
            </svg>
          }
          title="Lorem ipsum"
          decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
        />
        <ValuesCard
          icon={
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="-0.5"
                y="0.5"
                width="99"
                height="98.5624"
                transform="matrix(-1 0 0 1 99 0)"
                stroke="#C3C3C3"
              />
            </svg>
          }
          title="Lorem ipsum"
          decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
        />
        <ValuesCard
          icon={
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="-0.5"
                y="0.5"
                width="99"
                height="98.5624"
                transform="matrix(-1 0 0 1 99 0)"
                stroke="#C3C3C3"
              />
            </svg>
          }
          title="Lorem ipsum"
          decs="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor-"
        />
      </Container>
    </Box>
  );
};

export default Values;
