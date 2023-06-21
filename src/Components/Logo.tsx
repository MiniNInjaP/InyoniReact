import { Image, Show } from "@chakra-ui/react";
import logo from "../assets/Inyoni-Africa-Logo-w_300.png";
import logoLg from "../assets/Inyoni-Africa-Logo-w_200.png";

const Logo = () => {
  return (
    <>
      <Show below="sm">
        <Image src={logoLg}></Image>
      </Show>
      <Show above="sm">
        <Image src={logo}></Image>
      </Show>
    </>
  );
};

export default Logo;
