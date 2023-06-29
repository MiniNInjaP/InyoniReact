import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import TextCard from "../Components/TextCard";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import { ourFocusText, embracingText } from "../TextInput/TextContent";
import valleyPivot from "../assets/ValleyCenterPivotSwaziland.jpg";
import HighlightsCard from "../Components/HighlightsCard";
import CopyRightBanner from "../Components/CopyRightBanner";

const Services = () => {
  const input = [
    {
      heading: "Center Pivots",
      text: "Centralized system control, low labour requirements and low maintenance",
    },
    {
      heading: " Surface and Sub-surface Drip",
      text: "high system efficiency, low power demand, water savings; ",
    },
    {
      heading: " Micro",
      text: " medium to high efficiency, low power demand, water savings; and",
    },
    {
      heading: "Overhead Sprinkler ",
      text: " low implementation cost, higher labour requirements, higher power",
    },
  ];
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar pageId={3}></NavBar>
        <Box height={{ base: "105px", lg: "110px" }}></Box>
      </GridItem>
      <GridItem area="main">
        <Banner>Services</Banner>
        <Header headerOne="Our Focus" paddingRight={0}></Header>
        <TextCard
          showImage={true}
          image={valleyPivot}
          headingColor="heading.100"
          textColor="secondary.100"
          paragraphOne={ourFocusText}
        ></TextCard>
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(2,1fr)" }}
          gap={5}
          paddingX={{ base: 2, lg: 20 }}
        >
          <HighlightsCard
            header="The best solution for you"
            intro="We'll help you select the most appropriate solution for youm based on your specific requirement and your budget. The following systems are available, each with their own advatages"
            input={input}
            textColor={"secondary.100"}
            headingColor={"heading.100"}
          ></HighlightsCard>
          <TextCard
            showImage={false}
            textColor="secondary.100"
            headingColor="#17733A"
            headingOne="Embracing Technology"
            paragraphOne={embracingText}
          ></TextCard>
        </Grid>
      </GridItem>
      <GridItem area="footer" bg="primary.100">
        <Footer></Footer>
        <CopyRightBanner></CopyRightBanner>
      </GridItem>
    </Grid>
  );
};

export default Services;
