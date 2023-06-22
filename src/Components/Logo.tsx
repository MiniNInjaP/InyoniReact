import { Image, Show } from "@chakra-ui/react";
import logoLg from "../assets/Inyoni-Africa-Logo-w_300.png";
import logoSm from "../assets/Inyoni-Africa-Logo-w_200.png";

const Logo = () => {
  return (
    <>
      <Show below="sm">
        <Image src={logoSm}></Image>
      </Show>
      <Show above="sm">
        <Image src={logoLg}></Image>
      </Show>
    </>
  );
};

export default Logo;
