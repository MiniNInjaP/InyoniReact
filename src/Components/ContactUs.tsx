import { FieldValues, useForm } from "react-hook-form";
import styles from "../Styles/Button.module.css";
import {saveAs} from 'file-saver'
import {
  Box,
  FormControl,
  HStack,
  Input,
  Text,
  Image,
  Heading,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import iaSAIcon from "../assets/IA-SA-Icon-Small.jpg";

const ContactUs = () => {
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data: FieldValues) => {
    const file = new Blob(data.message, {type='text/plain;charset=utf-8'});
    saveAs(file, data.name)

    reset();
  };
  return (
    <>
      <HStack
        spacing={20}
        paddingY={10}
        alignItems={"flex-start"}
        marginTop={5}
        paddingX={2}
        marginX={10}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={"space-around"}
      >
        <Box
          lineHeight={10}
          fontSize={20}
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ base: "flex-start", lg: "flex-end" }}
          color={"secondary.100"}
        >
          <Heading fontWeight={600} paddingBottom={3} fontSize={18}>
            Company name - Inyoni Africa Irrigation Specialists (Pty) Ltd
          </Heading>
          <Text>Registration number 2004/033490/07</Text>
          <Text>Contact details & Web address</Text>
          <Text>info@inyoniafrica.co.za</Text>
          <Text>Tel: +27 13 7122175</Text>
          <Text>Fax: +27 13 7124198</Text>
          <Text>
            Web:
            <Link to={"https://inyoniafrica.co.za/"}>
              {" "}
              www.inyoniacfrica.co.za
            </Link>
          </Text>
          <Text>Postal: PO Box 125, Barberton, 1300, South Africa</Text>
          <Text>
            Physical Address: 51 President Street, Barberton, 1300, South Africa
          </Text>
        </Box>
        <Image
          overflow={"hidden"}
          boxSize={"contain"}
          width={{ base: "200px", lg: "350px" }}
          src={iaSAIcon}
        ></Image>
      </HStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl marginBottom={10} paddingX={{ base: 10, lg: 300 }}>
          <FormLabel fontSize={30} color={"primary.100"} fontWeight={400}>
            Contact Form
          </FormLabel>
          <HStack flexDirection={{ base: "column", lg: "row" }} paddingY={5}>
            <Input
              {...register("input")}
              bg={"gray.200"}
              focusBorderColor="primary.100"
              placeholder="Name"
            ></Input>
            <Input
              {...register("email")}
              type="email"
              bg={"gray.200"}
              focusBorderColor="primary.100"
              placeholder="Email Address"
            ></Input>
          </HStack>
          <Textarea
            {...register("message")}
            bg={"gray.200"}
            focusBorderColor="primary.100"
            placeholder="Message"
            height={"200px"}
          ></Textarea>
          <HStack width={"100%"} marginTop={2} justifyContent={"flex-end"}>
            <Button
              type="submit"
              className={[styles["btn"], styles["btn-primary"]].join(" ")}
            >
              Send
            </Button>
          </HStack>
        </FormControl>
      </form>
    </>
  );
};

export default ContactUs;
