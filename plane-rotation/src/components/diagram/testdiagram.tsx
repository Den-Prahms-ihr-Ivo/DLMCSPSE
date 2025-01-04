import { Box } from "@chakra-ui/react";
import Plot from "react-plotly.js";

const TestPlot = () => {
  return (
    <Box width="500px" height="400px">
      // @ts-ignore
      <Plot
        data={[
          {
            type: "mesh3d",
            x: [0, 0, 1, 1, 0],
            y: [0, 0, 1, 1, 1],
            z: [0, 1, 0, 1, 0],
            i: new Float64Array([0, 1, 0]),
            j: new Float64Array([1, 3, 4]),
            k: new Float64Array([2, 2, 2]),
          },
        ]}
        layout={{
          autosize: false,
          width: 500,
          height: 400,
          title: "Growth Rate in Boys",
        }}
      />
    </Box>
  );
};

export default TestPlot;
