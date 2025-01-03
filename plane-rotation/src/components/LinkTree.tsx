import { Heading, Link, VStack } from "@chakra-ui/react";

interface Props {
  heading: string;
  links: string[];
}

const LinkTree = ({ heading, links }: Props) => {
  return (
    <VStack paddingLeft="4" paddingBottom="6" alignItems="flex-start">
      <Heading fontWeight="bold" paddingBottom="2.5" as="h2" size="md">
        {heading}
      </Heading>
      <VStack alignItems="flex-start">
        {links.map((link) => (
          <Link>{link}</Link>
        ))}
      </VStack>
    </VStack>
  );
};

export default LinkTree;
