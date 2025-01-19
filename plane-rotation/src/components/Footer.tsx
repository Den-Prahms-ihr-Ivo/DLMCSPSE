import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa6";
import { colourSystem, typographySystem } from "../theme";
import { Link as DOMLink } from "react-router-dom";

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

      <DOMLink to="/impressum">
        <Link fontSize={typographySystem.size_1}>Impressum</Link>
      </DOMLink>
    </HStack>
  );
};

export default Footer;
