import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import ProjectCardRight from "../Components/ProjectCardRight";
import CopyRightBanner from "../Components/CopyRightBanner";
import ProjectBanner from "../Components/ProjectBanner";

import xinavaneIimage from "../assets/XinavaneBarge.jpg";
import sipofaneImage from "../assets/SipofaneniSwaziland.jpg";

import { RoyalSwazi, UbomboSuagr, TPC, Xinavane } from "../TextInput/Headings";
import {
  royalSwaziText,
  ubomboSugarText,
  tpcText,
  xinavaneText,
} from "../TextInput/TextContent";
import ProjectCardLeft from "../Components/ProjectCardLeft";
import HighlightsCard from "../Components/HighlightsCard";

const Projects = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar pageId={5}></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
        <ProjectBanner> Project Highlights</ProjectBanner>
      </GridItem>
      <GridItem area="main">
        <ProjectCardRight
          image={sipofaneImage}
          textColor={"secondary.100"}
          headingColor={"heading.100"}
          headingOne={RoyalSwazi}
          paragraphOne={royalSwaziText}
          headingTwo={UbomboSuagr}
          paragraphTwo={ubomboSugarText}
        ></ProjectCardRight>
        <ProjectCardLeft
          image={xinavaneIimage}
          textColor={"secondary.100"}
          headingColor={"heading.100"}
          headingOne={TPC}
          paragraphOne={tpcText}
          headingTwo={Xinavane}
          paragraphTwo={xinavaneText}
        ></ProjectCardLeft>
        <HighlightsCard
          textColor={"secondary.100"}
          headingColor={"heading.100"}
        ></HighlightsCard>
      </GridItem>
      <GridItem area="footer" bg="primary.100">
        <CopyRightBanner></CopyRightBanner>
      </GridItem>
    </Grid>
  );
};

export default Projects;
