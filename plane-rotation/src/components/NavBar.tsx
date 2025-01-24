import { HStack, VStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import LinkTree from "./LinkTree";
import Footer from "./Footer";

import {
  FaHouse,
  FaPaperPlane,
  FaCrow,
  FaSuperscript,
  FaMap,
  FaChartLine,
} from "react-icons/fa6";
import { typographySystem } from "../theme";

interface Props {
  activeNavItem?: string;
}

const tmpLinksOne = [
  { displayText: "Home", icon: FaHouse, id: "/", to: "/" },
  {
    displayText: "Paper Plane",
    icon: FaPaperPlane,
    id: "/plane",
    to: "/plane",
  },
  { displayText: "Bird Details", icon: FaCrow, id: "/birds", to: "/birds" },
  {
    displayText: "Graph Detail View",
    icon: FaChartLine,
    id: "/detail",
    to: "/detail",
  },
];

const tmpLinksTwo = [
  { displayText: "Math", icon: FaSuperscript, id: "/math", to: "/math" },
];

const NavBar = ({ activeNavItem }: Props) => {
  return (
    <VStack height="100vh" justifyContent="space-between">
      <VStack>
        <HStack padding={4} paddingBottom={8}>
          <Image
            src={logo}
            mixBlendMode="soft-light"
            boxSize="50px"
            paddingRight={2}
          />
          <Text
            mixBlendMode="soft-light"
            fontSize={typographySystem.size_6}
            fontWeight="bold"
          >
            PaperPlane
          </Text>
        </HStack>
        // Links
        <VStack
          // divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          width="100%"
        >
          <LinkTree
            activeNavItem={activeNavItem}
            heading="Playground"
            links={tmpLinksOne}
          />
          <LinkTree
            activeNavItem={activeNavItem}
            heading="Explanation"
            links={tmpLinksTwo}
          />
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default NavBar;
