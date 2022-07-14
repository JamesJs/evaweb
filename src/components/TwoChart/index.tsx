import { Box } from "@mui/material";
import React, { PureComponent, useEffect, useState } from "react";
import "./styles.css"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TwoChart({data,compacto}:{data:any,compacto:boolean}) {
  return (
	  <Box
      
      sx={{
	      minWidth:"100%",
	      width:compacto ? "90vw" : 4*data.length,
      }}
      className="two-charts-warp"
    >
      <Box
        className="title-two-charts"
      >
        <h4>Temperatura</h4>
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
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
            content={(props) => {
              return (
                <div
                  className="legend-warp-two-charts"
                >
                  <h4 className="horario-legend">
                    Horário: {props.payload && props?.payload[0]?.payload?.name}
                  </h4>
                  <h4
                    className="temp-legend"
                  >
                    Temp: {props.payload && props?.payload[0]?.payload?.Temp} C
                  </h4>
                  <h4 className="litros-legend"
                  >
                    Litros: {props.payload && props?.payload[0]?.payload?.amt.toFixed(2)} L
                  </h4>
                </div>
              );
            }}
            payload={[
              {
                name: "Temp",
                value: "Temp",
              },
            ]}
          />
          <Area
            type="monotone"
            dataKey="Temp"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
      <Box sx={{ display: "flex", padding: "10px" }}>
        <h4>GL</h4>
      </Box>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
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
            content={(props) => {
              return (
                <div
                  className="legend-warp-two-charts"
                >
                  <h4 className="horario-legend">
                    Horário: {props.payload && props?.payload[0]?.payload?.name}
                  </h4>
                  <h4
                    className="GL-legend"
                  >
                    GL: {props.payload && props?.payload[0]?.payload?.GL} C
                  </h4>
                  <h4
                    className="litros-legend"
                  >
                    Litros: {props.payload && props?.payload[0]?.payload?.amt} L
                  </h4>
                </div>
              );
            }}
            payload={[
              {
                name: "GL",
                value: "GL",
              },
            ]}
          />
          <Area type="monotone" dataKey="GL" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}
