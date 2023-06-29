import { Image, Show } from "@chakra-ui/react";
import logoLg from "../assets/Inyoni-Africa-Logo-w_300.png";
import logoSm from "../assets/Inyoni-Africa-Logo-w_200.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Show below="sm">
        <Image src={logoSm}></Image>
      </Show>
      <Show above="sm">
        <Link to={"/"}>
          <Image src={logoLg}></Image>
        </Link>
      </Show>
    </>
  );
};

export default Logo;
