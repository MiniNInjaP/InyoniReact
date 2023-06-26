import { Card, CardBody, Text, Image, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

interface Props {
  image: string;
  heading: string;
  paragraph: string;
  buttonLink: string;
  buttonText: string;
  textColor: string;
  headingColor: string;
}

const CardRight = ({
  image,
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
      paddingX={{ base: 0, md: 90 }}
      width={"100vw"}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems={{ base: "center", lg: "space-between" }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <CardBody
        marginTop={0}
        flexWrap={"wrap"}
        paddingY={0}
        marginRight={"10%"}
      >
        <Heading
          paddingLeft={10}
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
      <Image
        paddingTop={10}
        paddingRight={{ base: 0, lg: 200 }}
        borderRadius={"5px"}
        overflow={"hidden"}
        maxWidth={"550px"}
        maxHeight={"400px"}
        srcSet={image}
      ></Image>
    </Card>
  );
};

export default CardRight;
