import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface Props {
  imageOne: string;
  imageTwo: string;
  heading?: string;
  paragraph: string;
  buttonLink: string;
  buttonText: string;
  textColor: string;
  headingColor: string;
  paddingY: number;
  showButton: boolean;
}

const CardTwoImage = ({
  imageOne,
  imageTwo,
  textColor,
  paragraph,
  heading,
  headingColor,
  buttonLink,
  buttonText,
  paddingY,
  showButton,
}: Props) => {
  return (
    <Card
      boxShadow={0}
      borderRadius={0}
      bg={"white"}
      paddingY={paddingY}
      display={"flex"}
      paddingX={{ base: 0, lg: 90 }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems={{ base: "center", lg: "space-between" }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <CardBody
        paddingY={10}
        paddingLeft={{ base: 10, md: 20, lg: 0 }}
        paddingRight={{ base: 10, md: 20, lg: "10%" }}
      >
        <Heading
          marginLeft={5}
          fontSize={{ base: 18, md: 20, lg: 30 }}
          fontWeight={400}
          color={headingColor}
          marginBottom={3}
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: 15, lg: 17 }}
          whiteSpace={"pre-wrap"}
          color={textColor}
        >
          {paragraph}
        </Text>
        <Box marginTop={10}>
          <Link to={buttonLink}>
            {showButton && <Button variant="primary">{buttonText}</Button>}
          </Link>
        </Box>
      </CardBody>
      <HStack
        paddingLeft={{ base: 3, md: 0 }}
        paddingRight={{ base: 3 }}
        spacing={{ base: 5, md: "150px", lg: 0 }}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-evenly"}
      >
        <Image
          boxShadow={"0 0 5px black"}
          marginX={5}
          borderRadius={"5px"}
          overflow={"hidden"}
          width={"280px"}
          height={"75px"}
          src={imageOne}
        ></Image>
        <Image
          boxShadow={"0 0 5px black"}
          borderRadius={"5px"}
          overflow={"hidden"}
          width={"100px"}
          height={"90px"}
          src={imageTwo}
        ></Image>
      </HStack>
    </Card>
  );
};

export default CardTwoImage;
