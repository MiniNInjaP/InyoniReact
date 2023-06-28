import { Card, CardBody, Heading, Text, Image, VStack } from "@chakra-ui/react";

interface Props {
  image: string;
  headingOne?: string;
  headingTwo?: string;
  paragraphOne?: string;
  paragraphTwo?: string;
  textColor: string;
  headingColor: string;
}

const ProjectCardLeft = ({
  image,
  textColor,
  paragraphOne,
  paragraphTwo,
  headingOne,
  headingTwo,
  headingColor,
}: Props) => {
  return (
    <Card
      boxShadow={0}
      borderRadius={0}
      bg={"white"}
      paddingY={50}
      paddingLeft={{ base: 0, md: 10 }}
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems={{ base: "center", lg: "flex-start" }}
      flexDir={{ base: "column", lg: "row" }}
    >
      <Image
        paddingRight={{ base: 0, lg: 10 }}
        paddingTop={{ base: 5 }}
        borderRadius={"5px"}
        overflow={"hidden"}
        width={{ base: "200px", md: "400px", xl: "600px" }}
        srcSet={image}
      ></Image>
      <CardBody
        flexWrap={"wrap"}
        paddingY={0}
        marginLeft={{ base: 0, lg: "10%" }}
      >
        <VStack alignItems={"flex-start"} marginBottom={6}>
          <Heading
            fontSize={{ base: 15, md: 20 }}
            fontWeight={600}
            color={headingColor}
            marginBottom={2}
          >
            {headingOne}
          </Heading>
          <Text
            fontSize={{ base: 17, md: 18, lg: 20 }}
            whiteSpace={"pre-wrap"}
            color={textColor}
          >
            {paragraphOne}
          </Text>
        </VStack>
        <Heading
          fontSize={{ base: 15, md: 20, lg: 20 }}
          fontWeight={600}
          color={headingColor}
          marginBottom={2}
        >
          {headingTwo}
        </Heading>
        <Text
          fontSize={{ base: 17, md: 18, lg: 20 }}
          whiteSpace={"pre-wrap"}
          color={textColor}
        >
          {paragraphTwo}
        </Text>
      </CardBody>
    </Card>
  );
};

export default ProjectCardLeft;
