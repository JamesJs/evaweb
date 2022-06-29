import { Box } from "@mui/material";
import React from "react";
import "./styles.css"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
export default function TwoAxial({data}:{data:any}) {
  return (
    <Box
      className="warp-chart"
      sx={{
        minWidth:4*1000,
      }}
     
    >
      <ResponsiveContainer width={"100%"} height="90%">
        <AreaChart
          stackOffset="none"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            cursor={false}
            payload={[
              {
                name: "Temp",
                value: "Temp",
              },
            ]}
            animationDuration={0}
            animationEasing="linear"
            content={(props) => {
              return (
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "10px",
                  }}
                >
                  <h4>
                    Horário: {props.payload && props?.payload[0]?.payload?.name}
                  </h4>
                  <h4
                    style={{
                      color: "#82ca9d",
                    }}
                  >
                    GL: {props.payload && props?.payload[0]?.payload?.GL} C
                  </h4>
                  <h4
                    style={{
                      color: "#8884d8",
                    }}
                  >
                    Temp: {props.payload && props?.payload[0]?.payload?.Temp} C
                  </h4>
                  <h4
                    style={{
                      color: "blue",
                    }}
                  >
                    Litros: {props.payload && props?.payload[0]?.payload?.amt} L
                  </h4>
                </div>
              );
            }}
          />
          <Area
            isAnimationActive={false}
            type="monotone"
            dataKey="GL"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            isAnimationActive={false}
            type="monotone"
            dataKey="Temp"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}