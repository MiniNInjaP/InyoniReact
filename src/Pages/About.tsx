import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import TextCard from "../Components/TextCard";
import { TurnKey } from "../TextInput/Headings";
import {
  TurnKeySection,
  philosophyText,
  directorOneParagraph,
  directorTwoParagraph,
  directorThreeParagraph,
} from "../TextInput/TextContent";
import Footer from "../Components/Footer";
import DirectorCard from "../Components/DirectorCard";

const About = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar pageId={2}></NavBar>
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
          showImage={false}
          headingOne={TurnKey}
          paragraphOne={TurnKeySection}
          paragraphTwo={philosophyText}
          headingColor="heading.100"
          textColor="secondary.100"
        ></TextCard>
        <Header headerOne={"Our People"} paddingRight={0}></Header>
        <DirectorCard
          directorOne="Marnus von Wielligh"
          directorTwo="Jaco Boshoff"
          directorThree="David van der Merwe"
          paragraphOne={directorOneParagraph}
          paragraphTwo={directorTwoParagraph}
          paragraphThree={directorThreeParagraph}
          headingColor="primary.100"
          textColor="secondary.100"
        ></DirectorCard>
      </GridItem>
      <GridItem area="footer" bg={"primary.100"}>
        <Footer></Footer>
      </GridItem>
    </Grid>
  );
};

export default About;
