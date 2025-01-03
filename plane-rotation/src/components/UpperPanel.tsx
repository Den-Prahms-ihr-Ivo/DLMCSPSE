import { Grid, GridItem } from "@chakra-ui/react";
import InputConsole from "./InputConsole";

const UpperPanel = () => {
  return (
    <Grid
      height="100%"
      templateAreas={`"inputs pigeon"`}
      templateColumns="1fr 1fr"
      gap={1}
    >
      <GridItem width="100%" area="inputs">
        <InputConsole />
      </GridItem>
      <GridItem width="100%" area="pigeon">
        right
      </GridItem>
    </Grid>
  );
};

export default UpperPanel;
