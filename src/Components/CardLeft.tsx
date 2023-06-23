import { Card, CardBody, Text, Image } from "@chakra-ui/react";
import Button from "../Components/Button";
import { ReactElement } from "react";

interface Props {
  image: string;
  color: string;
}

const CardLeft = ({ image, color }: Props) => {
  return (
    <Card
      borderRadius={0}
      bg={"green"}
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
      <CardBody marginTop={0} paddingY={0} paddingLeft={"10%"}></CardBody>
    </Card>
  );
};

export default CardLeft;
