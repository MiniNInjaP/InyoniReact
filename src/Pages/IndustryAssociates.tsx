import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";

const IndustryAssociates = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <h1>This is the Homepage</h1>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "110px" }}></Box>
      </GridItem>
      <GridItem height="200vh" area="main" bg="green">
        Main
      </GridItem>
      <GridItem area="footer" bg="yellow">
        Footer
      </GridItem>
    </Grid>
  );
};

export default IndustryAssociates;
