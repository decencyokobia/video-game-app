import { HStack, Image } from "@chakra-ui/react";
import cherry from "../assets/cherry.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={cherry} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
