import { Card, Text, CardBody, HStack, Heading } from "@chakra-ui/react";

const RecentProjectsCard = () => {
  const input = [
    {
      id: 1,
      heading: "Gurue, Mozambique",
      text: "430 ha - Micro, Overhead Sprinklers and Center Pivots",
    },
    {
      id: 2,
      heading: "Ghana ",
      text: "13 ha - Pivots, Drip, Overhead Sprinklers and Flood",
    },
    {
      id: 3,
      heading: "Xinavane Sugar, Mozambique",
      text: "4380 ha – Semisolid Set Development",
    },
    {
      id: 4,
      heading: "Royal Swaziland Sugar",
      text: " – 12,000 ha Sub Surface Drip Developments",
    },
    {
      id: 5,
      heading: "Nchalo Sugar, Malawi ",
      text: "Center Pivot Developments",
    },
    {
      id: 6,
      heading: "MozPEL, Mozambique",
      text: "Center Pivot Development",
    },
    {
      id: 7,
      heading: "Xinavane Sugar, Mozambique ",
      text: "Floppy Conversion Projects",
    },
    {
      id: 8,
      heading: "Markala Sugar, Mali",
      text: "Center Pivot Development",
    },
    {
      id: 9,
      heading: "LUSIP, Swaziland ",
      text: " Small Farmer Irrigation Development",
    },
    {
      id: 10,
      heading: "Dwanga Sugar, Malawi ",
      text: "Center Pivot Development",
    },
  ];
  return (
    <Card width={{ base: "auto", lg: "50%" }} boxShadow={0}>
      <CardBody justifyContent={"space-between"} marginTop={"1%"}>
        <Heading
          bg={"primary.100"}
          color="white"
          paddingY={1}
          paddingX={10}
          fontSize={{ base: 20, md: 25 }}
        >
          Other Major Projects
        </Heading>
        {input.map((input) => (
          <HStack
            bg={input.id % 2 === 0 ? "gray.300" : "gray.100"}
            paddingBottom={{ base: 5, md: 2 }}
            paddingX={5}
            paddingY={1}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={"flex-start"}
          >
            <Heading fontSize={18} fontWeight={500}>
              {input.heading} -
            </Heading>
            <Text fontSize={{ base: 15, lg: 17 }} whiteSpace={"pre-wrap"}>
              {input.text}
            </Text>
          </HStack>
        ))}
      </CardBody>
    </Card>
  );
};

export default RecentProjectsCard;
