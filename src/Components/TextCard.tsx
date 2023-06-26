import {
  Card,
  Text,
  CardBody,
  Heading,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";

interface Props {
  headingOne?: string;
  headingTwo?: string;
  paragraphOne: string;
  paragraphTwo: string;
  textColor: string;
  headingColor: string;
}

const TextCard = ({
  textColor,
  paragraphOne,
  paragraphTwo,
  headingOne,
  headingTwo,
  headingColor,
}: Props) => {
  return (
    <Card>
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
          <Box width={{ base: "auto", lg: "50vw" }} flexDirection={"column"}>
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
          <Box width={"50vw"}>
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
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default TextCard;
