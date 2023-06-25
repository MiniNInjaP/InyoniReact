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
      borderRadius={0}
      bg={"#17733A"}
      padding={50}
      display={"flex"}
      justifyContent={"space-between"}
      flexDir={"row"}
    >
      <Image
        borderRadius={"5px"}
        overflow={"hidden"}
        maxWidth={"550px"}
        maxHeight={"415px"}
        src={image}
      ></Image>
      <CardBody marginTop={0} paddingY={0} paddingLeft={"10%"}>
        <Heading paddingLeft={10} fontSize={30} color={color} marginBottom={3}>
          {heading}
        </Heading>
        <Text fontSize={17} fontWeight={100} whiteSpace={"pre-wrap"} color={color}>
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
