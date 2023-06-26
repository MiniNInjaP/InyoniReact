import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import Header from "../Components/Header";

const About = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
        <Banner>Overview</Banner>
        <Header
          headerTwo="A philosphy of knowledge and trust"
          paddingYTwo={2}
          paddingLeft={79}
          headerOne="About"
        ></Header>
      </GridItem>
      <GridItem height="200vh" area="main"></GridItem>
      <GridItem area="footer" bg="yellow">
        Footer
      </GridItem>
    </Grid>
  );
};

export default About;
