import { Box, Text } from "@chakra-ui/react";
import styles from "../Styles/HeroBanner.module.css";
const HeroBanner = () => {
  return (
    <Box
      height={{ base: "150px", md: "50vh", lg: "80vh" }}
      className={styles["hero-banner"]}
    >
      <Text
        fontSize={{ base: 8, md: 18, lg: 30 }}
        color={"white"}
        position={"relative"}
        top={{
          base: "110px",
          md: "205px",
          lg: "330px",
          xl: "380px",
        }}
        left={{
          base: "20px",
          md: "30px",
          lg: "40px",
          xl: "80px",
        }}
        textShadow={"2px 5px 5px #32a852"}
      >
        More than 40,000ha under irrigation - and growing
      </Text>
    </Box>
  );
};

export default HeroBanner;
