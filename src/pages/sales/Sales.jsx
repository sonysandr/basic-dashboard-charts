import React from 'react'
import './sales.css'
import Chart from '../../components/charts/Chart'
import { userData } from '../../dummyDataSales';


export default function Sales() {

    


  return (
    <div className='sales'>
        <Chart data={userData} dataKey={'Sum of Sales(€millions)'} title={'Sales per Year'}/>
    </div>
  )
}

