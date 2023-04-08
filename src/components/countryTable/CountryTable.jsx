import React from "react";
import "./countrytable.css";
import Map from "../../assets/map.jpg";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PopulationTable({data,title,dataKey}) {
  

  return (
    <div className="populationtable">
      <div className="tableContainer">
        <h3 className="populationMap">{title}</h3>
        <div style={{ backgroundImage:`url(${Map})`,backgroundSize : 'contain' }} className="tableMapImg">
          <ResponsiveContainer
            className="tableChart"
            width="100%"
            aspect={4 / 2}
          >
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='Country' />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={dataKey}
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
