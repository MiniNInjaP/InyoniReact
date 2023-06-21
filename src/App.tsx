import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav" bg="blue">
        Nav
      </GridItem>
      <GridItem area="main" bg="green">
        Main
      </GridItem>
      <GridItem area="footer" bg="yellow">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
