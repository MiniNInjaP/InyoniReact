import { Card, Text, CardBody, Heading, HStack } from "@chakra-ui/react";

interface Props {
  textColor: string;
  headingColor: string;
}

const HighlightsCard = ({ textColor, headingColor }: Props) => {
  const input = [
    {
      heading: "Gurue, Mozambique",
      text: "430 ha - Micro, Overhead Sprinklers and Center Pivots",
    },
    {
      heading: "Ghana ",
      text: "13 ha - Pivots, Drip, Overhead Sprinklers and Flood",
    },
    {
      heading: "Xinavane Sugar, Mozambique",
      text: "4380 ha – Semisolid Set Development",
    },
    {
      heading: "Royal Swaziland Sugar",
      text: " – 12,000 ha Sub Surface Drip Developments",
    },
    {
      heading: "Nchalo Sugar, Malawi ",
      text: "Center Pivot Developments",
    },
    {
      heading: "MozPEL, Mozambique",
      text: "Center Pivot Development",
    },
    {
      heading: "Xinavane Sugar, Mozambique ",
      text: "Floppy Conversion Projects",
    },
    {
      heading: "Markala Sugar, Mali",
      text: "Center Pivot Development",
    },
    {
      heading: "LUSIP, Swaziland ",
      text: " Small Farmer Irrigation Development",
    },
    {
      heading: "Dwanga Sugar, Malawi ",
      text: "Center Pivot Development",
    },
  ];

  return (
    <Card width={{ base: "auto", lg: "50%" }} boxShadow={0}>
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
          Other Major Projects
        </Heading>
        <Text
          marginBottom={{ base: 5, md: 2 }}
          marginLeft={{ base: 0, lg: 20 }}
          color={"primary.100"}
        >
          Some of our other projects
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
