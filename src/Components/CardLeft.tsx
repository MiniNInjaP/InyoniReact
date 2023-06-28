import { Card, CardBody, Text, Image, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Button from "../Components/Button";

interface Props {
  image: string;
  color: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
}

const CardLeft = ({
  image,
  buttonText,
  color,
  heading,
  paragraph,
  buttonLink,
}: Props) => {
  return (
    <Card
      boxShadow={0}
      borderRadius={0}
      bg={"primary.100"}
      padding={50}
      display={"flex"}
      flexDir={{ base: "column", lg: "row" }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems={{ base: "center", lg: "flex-start" }}
    >
      <Image
        borderRadius={"5px"}
        overflow={"hidden"}
        width={{ base: "200px", md: "450px" }}
        height={{ base: "200px", md: "400px" }}
        src={image}
        paddingBottom={10}
      ></Image>
      <CardBody
        paddingRight={{ md: 10, lg: 0 }}
        marginTop={0}
        paddingY={0}
        paddingLeft={"10%"}
      >
        <Heading
          fontSize={{ base: 12, md: 20, lg: 30 }}
          color={color}
          marginBottom={3}
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: 8, md: 15, lg: 17 }}
          fontWeight={100}
          whiteSpace={"pre-wrap"}
          color={color}
        >
          {paragraph}
        </Text>
        <Box marginTop={10}>
          <Link to={buttonLink}>
            <Button variant="secondary">{buttonText}</Button>
          </Link>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CardLeft;
