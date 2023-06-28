import {
  Card,
  Text,
  CardBody,
  Heading,
  HStack,
  Box,
  Image,
} from "@chakra-ui/react";

interface Props {
  image?: string;
  headingOne?: string;
  headingTwo?: string;
  paragraphOne: string;
  paragraphTwo?: string;
  textColor: string;
  headingColor: string;
  showImage: boolean;
}

const TextCard = ({
  image,
  textColor,
  paragraphOne,
  paragraphTwo,
  headingOne,
  headingTwo,
  headingColor,
  showImage,
}: Props) => {
  return (
    <Card boxShadow={0}>
      <CardBody
        justifyContent={"space-between"}
        marginTop={"1%"}
        paddingX={"6%"}
      >
        <HStack
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          spacing={"10%"}
        >
          <Box flexDirection={"column"} marginBottom={{ base: 5, lg: 0 }}>
            <Heading
              fontSize={{ base: 20, md: 30, lg: 30 }}
              fontWeight={400}
              color={headingColor}
              marginBottom={5}
            >
              {headingOne}
            </Heading>
            <Text
              fontSize={{ base: 15, md: 15, lg: 17 }}
              whiteSpace={"pre-wrap"}
              color={textColor}
            >
              {paragraphOne}
            </Text>
          </Box>
          <Box>
            <Heading
              fontSize={{ base: 20, md: 30, lg: 30 }}
              fontWeight={400}
              color={headingColor}
              marginBottom={3}
            >
              {headingTwo}
            </Heading>
            <Text
              fontSize={{ base: 15, md: 15, lg: 17 }}
              whiteSpace={"pre-wrap"}
              color={textColor}
            >
              {paragraphTwo}
            </Text>

            {showImage && (
              <Image
                src={image}
                width={{ base: "200px", md: "400px", lg: "500px" }}
                marginRight={"200px"}
              ></Image>
            )}
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default TextCard;
