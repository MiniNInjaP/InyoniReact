import { Card, CardBody, Text, Image, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

interface Props {
  image: string;
  color: string;
  heading: string;
  paragraph: string;
  buttonLink: string;
  buttonText: string;
}

const CardRight = ({
  image,
  color,
  paragraph,
  heading,
  buttonLink,
  buttonText,
}: Props) => {
  return (
    <Card
      borderRadius={0}
      bg={"white"}
      padding={50}
      display={"flex"}
      justifyContent={"space-between"}
      flexDir={"row"}
    >
      <CardBody marginTop={0} paddingY={0} paddingRight={"10%"}>
        <Heading fontSize={30} color={color} marginBottom={3}>
          {heading}
        </Heading>
        <Text fontSize={17} whiteSpace={"pre-wrap"} color={color}>
          {paragraph}
        </Text>
        <Box marginTop={10}>
          <Link to={buttonLink}>
            <Button variant="secondary">{buttonText}</Button>
          </Link>
        </Box>
      </CardBody>
      <Image
        borderRadius={"5px"}
        overflow={"hidden"}
        maxWidth={"550px"}
        maxHeight={"415px"}
        src={image}
      ></Image>
    </Card>
  );
};

export default CardRight;
