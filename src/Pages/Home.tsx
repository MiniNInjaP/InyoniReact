import { GridItem, Box, Grid } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import HeroBanner from "../Components/HeroBanner";
import styles from "../Styles/HeroBanner.module.css";

const Home = () => {
  return (
    <Grid boxSizing="border-box" templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
      </GridItem>
      <GridItem height="200vh" area="main">
        <HeroBanner></HeroBanner>
      </GridItem>
      <GridItem area="footer" bg="yellow">
        Footer
      </GridItem>
    </Grid>
  );
};

export default Home;
