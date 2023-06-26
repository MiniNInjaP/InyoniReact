import {
  GridItem,
  Box,
  Grid,
  IconButton,
  Text,
  HStack,
} from "@chakra-ui/react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import ContactUs from "../Components/ContactUs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar></NavBar>
        <Box height={{ base: "105px", lg: "130px" }}></Box>
      </GridItem>
      <GridItem area="main">
        <Banner>Contact Us</Banner>
        <ContactUs></ContactUs>
      </GridItem>
      <GridItem area="footer" bg={"#17733A"}>
        <HStack
          width={"100vw"}
          paddingX={20}
          justifyContent={"space-between"}
          borderRadius={0}
          bgColor={"rgba(0,0,0,0.8)"}
        >
          <Text paddingRight={5} fontSize={5} color={"white"}>
            Copyrights Inyoni Africa (PTY)Ltd.
          </Text>
          <Link target="_blank" to={"https://www.facebook.com/InyoniAfrica/"}>
            <IconButton
              boxSize={5}
              fontSize={10}
              aria-label="Facebook-Link"
              icon={<FaFacebookF />}
            ></IconButton>
          </Link>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Contact;
