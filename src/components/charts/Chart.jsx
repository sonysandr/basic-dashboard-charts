import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({data,title,dataKey}) {
   

  return (
    <div className='chart'>
        <h3 className="chartTitle"> {title}</h3>
            <ResponsiveContainer width='100%'  aspect={4/1} >
                <LineChart data={data}>
                    <XAxis dataKey='year' stroke='black' />
                    <YAxis />
                    <Line type='monotone'
                     dataKey={dataKey} 
                     stroke='#ff9933'
                     strokeWidth={3}   
                     />
                    <Tooltip/>
                    <Legend/>
                    <CartesianGrid strokeDasharray='1 10' stroke='lightgray' />
                </LineChart>
            </ResponsiveContainer>
        
    </div>
  )
}
