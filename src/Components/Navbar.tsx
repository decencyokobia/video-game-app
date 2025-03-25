import { HStack, Image, Text } from "@chakra-ui/react";
import cherry from "../assets/cherry.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={cherry} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
