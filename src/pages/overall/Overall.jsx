import React from 'react'
import './overall.css'
import CustomTable from '../../components/customtable/CustomTable'
import {overallData} from '../../dummyOverallData'

export default function Overall() {

    const coulmns = [
        {field : 'Year', header: "Year" },
        {field : 'Sum of Sales (€million)', header: "Sum of Sales (€million)" },
        {field : 'Sum of Capex (€million)', header: "Sum of Capex (€million)" },
        {field : 'Sum of Profits (€million)', header: "Sum of Profits (€million)" },
        {field : 'Sum of Market cap (€million)', header: "Sum of Market cap (€million)" },
    ]


  return (
    <div className='overall'>
       <CustomTable 
       data={overallData}
        columns={coulmns}
        title={"Overall Data"} />
    </div>
  )
}
