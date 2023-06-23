import { Box, Text } from "@chakra-ui/react";
import styles from "../Styles/HeroBanner.module.css";
const HeroBanner = () => {
  return (
    <Box
      height={{ base: "150px", md: "50vh", lg: "80vh" }}
      className={styles["hero-banner"]}
    >
      <Text
        color={"white"}
        position={"relative"}
        className={styles["hero-text"]}
        textShadow={"2px 5px 5px #32a852"}
      >
        More than 40,000ha under irrigation - and growing
      </Text>
    </Box>
  );
};

export default HeroBanner;
