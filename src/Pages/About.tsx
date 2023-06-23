import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Button from "../Components/Button";

const About = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <h1>This is the Homepage</h1>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
      </GridItem>
      <GridItem margin={10} height="200vh" area="main">
        <Button variant="secondary">First Button</Button>
        <Button variant="primary">First Button</Button>
      </GridItem>
      <GridItem area="footer" bg="yellow">
        Footer
      </GridItem>
    </Grid>
  );
};

export default About;
