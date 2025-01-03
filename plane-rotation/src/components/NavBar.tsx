import { HStack, VStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import LinkTree from "./LinkTree";
import Footer from "./Footer";

const NavBar = () => {
  return (
    <VStack height="100vh" justifyContent="space-between">
      <VStack>
        <HStack padding={4} paddingBottom={8}>
          <Image src={logo} boxSize="50px" paddingRight={2} />
          <Text fontSize="2xl" fontWeight="bold">
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
            heading="Playground"
            links={["Home", "Paper Plane", "Bird Details"]}
          />
          <LinkTree heading="Explanation" links={["Math", "Roadmap"]} />
        </VStack>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default NavBar;
