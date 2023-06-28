import { Grid, GridItem, Box } from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import CopyRightBanner from "../Components/CopyRightBanner";
import sipofaneImage from "../assets/SipofaneniSwaziland.jpg";
import ProjectBanner from "../Components/ProjectBanner";
import ProjectCardRight from "../Components/ProjectCardRight";

import { RoyalSwazi, UbomboSuagr } from "../TextInput/Headings";
import { royalSwaziText, ubomboSugarText } from "../TextInput/TextContent";

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
      </GridItem>
      <GridItem area="footer" bg="primary.100">
        <CopyRightBanner></CopyRightBanner>
      </GridItem>
    </Grid>
  );
};

export default Projects;
