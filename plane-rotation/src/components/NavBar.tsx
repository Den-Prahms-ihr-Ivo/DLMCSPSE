import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <HStack padding={4}>
      <Image src={logo} boxSize="50px" paddingRight={2} />
      <Text fontSize="2xl" fontWeight="bold">
        PaperPlane
      </Text>
    </HStack>
  );
};

export default NavBar;
