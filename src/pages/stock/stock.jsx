import React, { useState, useEffect } from 'react'
import './stock.css'
import SearchBox from '../../components/SearchBox/searchBox'
import TableComp from '../../components/Table/tableComp'

const Stock = () => {
   
    const [medicineName, setMedicineName]= useState("")
    const handleInputChange=(value)=>{
        setMedicineName(value)
    }

    const headers=["Sr No","Name","Quantity","Usage"];
    const rowData=[
        {
            sno:1,
            name: "sarvan",
            quan: 22,
            usage: "singer"
        }
    ]
    return (
        <div className='stock-page'>
            <SearchBox placeholder="Seach Medicine" value={medicineName} onChange={handleInputChange} />
          
          <div className="stock-page-card">
            <TableComp header={headers} data={rowData} />
          </div>
        </div>
    )
}

export default Stock