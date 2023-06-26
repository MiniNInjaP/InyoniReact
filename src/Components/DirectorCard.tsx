import { Box, Card, Text, CardBody, HStack, Heading } from "@chakra-ui/react";

interface Props {
  directorOne?: string;
  directorTwo?: string;
  directorThree?: string;
  directorFour?: string;
  paragraphOne?: string;
  paragraphTwo?: string;
  paragraphThree?: string;
  paragraphFour?: string;
  textColor: string;
  headingColor: string;
}

const DirectorCard = ({
  textColor,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  directorOne,
  directorTwo,
  directorThree,
  directorFour,
  headingColor,
}: Props) => {
  return (
    <Card>
      <CardBody paddingX={"6%"} paddingTop={0}>
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
              {directorOne}
            </Heading>
            <Text
              fontSize={{ base: 15, md: 15, lg: 17 }}
              whiteSpace={"pre-wrap"}
              color={textColor}
            >
              {paragraphOne}
            </Text>
            <Heading
              fontSize={{ base: 20, md: 30, lg: 30 }}
              fontWeight={400}
              color={headingColor}
              marginBottom={5}
            >
              {directorTwo}
            </Heading>
            <Text
              fontSize={{ base: 15, md: 15, lg: 17 }}
              whiteSpace={"pre-wrap"}
              color={textColor}
            >
              {paragraphTwo}
            </Text>
          </Box>
          <Box width={"50vw"}>
            <Heading
              fontSize={{ base: 20, md: 30, lg: 30 }}
              fontWeight={400}
              color={headingColor}
              marginBottom={3}
            >
              {directorThree}
            </Heading>
            <Text
              fontSize={{ base: 15, md: 15, lg: 17 }}
              whiteSpace={"pre-wrap"}
              color={textColor}
            >
              {paragraphThree}
            </Text>
            <Heading
              fontSize={{ base: 20, md: 30, lg: 30 }}
              fontWeight={400}
              color={headingColor}
              marginBottom={3}
            >
              {directorFour}
            </Heading>
            <Text
              fontSize={{ base: 15, md: 15, lg: 17 }}
              whiteSpace={"pre-wrap"}
              color={textColor}
            >
              {paragraphFour}
            </Text>
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default DirectorCard;
