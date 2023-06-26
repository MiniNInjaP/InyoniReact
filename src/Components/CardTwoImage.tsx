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
  heading: string;
  paragraph: string;
  buttonLink: string;
  buttonText: string;
  textColor: string;
  headingColor: string;
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
}: Props) => {
  return (
    <Card
      borderRadius={0}
      bg={"white"}
      paddingY={50}
      display={"flex"}
      paddingX={{ base: 0, lg: 90 }}
      width={"100vw"}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems={{ base: "center", lg: "space-between" }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <CardBody
        marginTop={0}
        flexWrap={"wrap"}
        paddingY={10}
        paddingLeft={{ base: 10, md: 20, lg: 0 }}
        paddingRight={{ base: 10, md: 20, lg: "10%" }}
      >
        <Heading
          fontSize={{ base: 12, md: 20, lg: 30 }}
          fontWeight={400}
          color={headingColor}
          marginBottom={3}
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: 8, md: 15, lg: 17 }}
          whiteSpace={"pre-wrap"}
          color={textColor}
        >
          {paragraph}
        </Text>
        <Box marginTop={10}>
          <Link to={buttonLink}>
            <Button variant="primary">{buttonText}</Button>
          </Link>
        </Box>
      </CardBody>
      <HStack
        paddingLeft={{ base: 3, md: 0 }}
        paddingRight={{ base: 3 }}
        justifyContent={"space-evenly"}
      >
        <Image
          boxShadow={"0 0 5px black"}
          paddingX={5}
          marginRight={10}
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
