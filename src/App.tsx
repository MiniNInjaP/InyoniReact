import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
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

export default App;
