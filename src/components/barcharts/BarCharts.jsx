import React from "react";
import "./barcharts.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  
} from "recharts";

export default function BarCharts({ data, title, dataKey }) {
  return (
    <div className="barcharts">
      <h3 className="barchartTitle"> {title}</h3>
      <ResponsiveContainer width='100%' aspect={4/2}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sector" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey={dataKey} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
