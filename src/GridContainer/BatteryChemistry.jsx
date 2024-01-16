import React from "react";
import { VictoryPie, VictoryLabel } from "victory";

const myData = [
  { x: "Lithium Iron", y: 180 },
  { x: "Lithium Polymer", y: 90 },
  { x: "Lithium Phosphate", y: 90 },
];

const BatterChemistry = () => {
  return (
    <div
      style={{
        height: 250,
        width: 450,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        top: 70,
      }}
    >
      <h3
        style={{
          fontWeight: "bold",
          marginBottom: 10,
          color: "hsl(240, 10%, 20%",
        }}
      >
        Battery Chemistry in Use
      </h3>
      <VictoryPie
        data={myData}
        colorScale={["#009460", "#1E5C44 ", "#00E091"]}
        radius={160}
        startAngle={135}
        endAngle={-225}
        labelComponent={
          <VictoryLabel
            textAnchor="start"
            verticalAnchor="middle"
            style={{
              fontSize: 28,
              fill: "hsl(240, 10%, 45%)",
            }}
          />
        }
      />
    </div>
  );
};

export default BatterChemistry;
