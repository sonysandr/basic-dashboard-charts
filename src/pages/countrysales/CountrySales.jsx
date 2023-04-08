import React from 'react'
import './countrySales.css'
import CountryTable from '../../components/countryTable/CountryTable'
import { countrySales } from '../../dummyCountrySales'

export default function Population() {
  return (
    <div className='countrysales'>
        

        <CountryTable data={countrySales} title={"Sum of Sales per Country"} dataKey={'Sum of Sales (€million)'}/>
       
    </div>
  )
}
