import { Card, CardBody, Text, Image, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

interface Props {
  image: string;
  heading: string;
  paragraph: string;
  buttonLink: string;
  buttonText: string;
  textColor:string;
  headingColor: string
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
      display={"flex"}
      paddingX={90}
      justifyContent={"space-between"}
      flexDir={"row"}
    >
      <CardBody marginTop={0} flexWrap={'wrap'} marginRight={60} paddingY={0} paddingRight={"10%"}>
        <Heading paddingLeft={10} fontSize={30} fontWeight={400} color={headingColor} marginBottom={3}>
          {heading}
        </Heading>
        <Text fontSize={17} whiteSpace={"pre-wrap"} color={textColor}>
          {paragraph}
        </Text>
        <Box marginTop={10}>
          <Link to={buttonLink}>
            <Button variant="primary">{buttonText}</Button>
          </Link>
        </Box>
      </CardBody>
      <Image
        paddingRight={200}
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
