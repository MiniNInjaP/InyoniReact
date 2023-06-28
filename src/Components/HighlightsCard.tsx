import { Card, Text, CardBody, Heading, HStack } from "@chakra-ui/react";

interface Content {
  heading: string;
  text: string;
}

interface Props {
  textColor: string;
  headingColor: string;
  intro: string;
  header: string;
  input: Content[];
}

const HighlightsCard = ({
  input,
  intro,
  header,
  textColor,
  headingColor,
}: Props) => {
  return (
    <Card boxShadow={0}>
      <CardBody
        justifyContent={"space-between"}
        marginTop={"1%"}
        paddingX={{ base: "15%", md: "0%" }}
      >
        <Heading
          marginBottom={1}
          marginLeft={{ base: 0, lg: 20 }}
          fontSize={{ base: 20, md: 25 }}
          color={"primary.100"}
        >
          {header}
        </Heading>
        <Text
          marginBottom={{ base: 5, md: 2 }}
          marginLeft={{ base: 0, lg: 20 }}
          color={"primary.100"}
        >
          {intro}
        </Text>
        {input.map((input) => (
          <HStack
            paddingBottom={{ base: 5, md: 2 }}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={{ base: "flex-start", lg: "center" }}
          >
            <Heading fontSize={18} fontWeight={500} color={headingColor}>
              {input.heading} -
            </Heading>
            <Text
              fontSize={{ base: 15, lg: 17 }}
              whiteSpace={"pre-wrap"}
              color={textColor}
            >
              {input.text}
            </Text>
          </HStack>
        ))}
      </CardBody>
    </Card>
  );
};

export default HighlightsCard;
