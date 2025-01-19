import {
  Card,
  Text,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Alert,
  AlertIcon,
  Stack,
} from "@chakra-ui/react";
import illustration from "../assets/YawPitchRollIllustration.svg";

const Math = () => (
  <Card marginY={5} align="center">
    <CardHeader>
      <Heading size="md">The math behind these transformations.</Heading>
    </CardHeader>
    <CardBody>
      <Stack spacing={5}>
        <Alert status="info">
          <AlertIcon />
          This page will be fully implemented in Version 2.0! :)
        </Alert>
        <Text>Currently only an illustration of the plane and its axes.</Text>
        <Image
          src={illustration}
          alt="Explanation of coordinate system"
          borderRadius="lg"
        />
      </Stack>
    </CardBody>
  </Card>
);

export default Math;
