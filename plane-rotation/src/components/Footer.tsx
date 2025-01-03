import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
import { colourSystem, typographySystem } from "../theme";

const Footer = () => {
  return (
    <HStack
      justifyContent="space-between"
      fontSize="xs"
      width="100%"
      padding={5}
      color={colourSystem.Text.light}
    >
      <HStack>
        <Text fontSize={typographySystem.size_1}>Gemacht mit</Text>
        <Icon
          fontSize={typographySystem.size_1}
          as={FaHeart}
          color={colourSystem.Accent.accent_1}
        />
      </HStack>

      <Link fontSize={typographySystem.size_1}>Impressum</Link>
    </HStack>
  );
};

export default Footer;
