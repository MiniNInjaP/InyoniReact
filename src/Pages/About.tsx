import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import CardLeft from "../Components/CardLeft";
import CardRight from "../Components/CardRight";
import image from "../assets/XinavaneBarge.jpg";

const About = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <h1>This is the Homepage</h1>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
      </GridItem>
      <GridItem height="200vh" area="main">
        <CardLeft color="white" image={image}></CardLeft>
        <CardRight color={"white"} image={image}></CardRight>
      </GridItem>
      <GridItem area="footer" bg="yellow">
        Footer
      </GridItem>
    </Grid>
  );
};

export default About;
