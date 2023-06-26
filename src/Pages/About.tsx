import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import TextCard from "../Components/TextCard";
import { TurnKey } from "../TextInput/Headings";
import { TurnKeySection, philosophyText } from "../TextInput/TextContent";
import Footer from "../Components/Footer";
const About = () => (
  <Grid templateAreas={`"nav" "main" "footer"`}>
    <GridItem area="nav">
      <NavBar></NavBar>
      <Box height={{ base: "105px", lg: "130px" }}></Box>
      <Banner>Overview</Banner>
    </GridItem>
    <GridItem area="main">
      <Header
        headerTwo="A philosphy of knowledge and trust"
        paddingYTwo={2}
        paddingLeft={70}
        paddingRight={2}
        headerOne="About"
      ></Header>
      <TextCard
        headingOne={TurnKey}
        paragraphOne={TurnKeySection}
        paragraphTwo={philosophyText}
        headingColor="#474747"
        textColor="#6D6D6D"
      ></TextCard>
      <Header headerOne={"Our People"} paddingRight={0}></Header>
    </GridItem>
    <GridItem area="footer" bg={"#17733A"}>
      <Footer></Footer>
    </GridItem>
  </Grid>
);

export default About;
