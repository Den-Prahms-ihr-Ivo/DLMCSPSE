import { Center, Container, Grid, GridItem } from "@chakra-ui/react";

const MainPage = () => {
  return (
    <Grid
      height="100%"
      templateAreas={`"inputField inputField" "diagram compass"`}
      gap={2}
    >
      <GridItem marginTop={4} marginBottom={1} area="inputField">
        <Center height="100%" width="100%">
          <Container>Input</Container>
        </Center>
      </GridItem>
      <GridItem marginTop={1} marginRight={1} marginBottom={4} area="diagram">
        <Center height="100%" width="100%">
          <Container>Diagram</Container>
        </Center>
      </GridItem>
      <GridItem marginTop={1} marginLeft={1} marginBottom={4} area="compass">
        <Center height="100%" width="100%">
          <Container margin={0}>Compass</Container>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default MainPage;
