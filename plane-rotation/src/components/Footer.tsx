import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
const Footer = () => {
  return (
    <HStack
      justifyContent="space-between"
      fontSize="xs"
      width="100%"
      padding={5}
    >
      <HStack>
        <Text>Gemacht mit </Text>
        <Icon as={FaHeart} />
      </HStack>

      <Link>Impressum</Link>
    </HStack>
  );
};

export default Footer;
