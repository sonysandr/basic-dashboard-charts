import React from "react";
import "./industries.css";
import BarCharts from "../../components/barcharts/BarCharts";
import {industryData} from '../../dummyDataIndustries'




export default function Industries() {
  

   
  return (
    <div className="industries">
      <BarCharts data={industryData} title={'Profit by Industries'} dataKey={'profits'} />
    </div>
  );
}
