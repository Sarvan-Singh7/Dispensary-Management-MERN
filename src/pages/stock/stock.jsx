import React, { useState, useEffect } from 'react'
import './stock.css'
import SearchBox from '../../components/SearchBox/searchBox'
import TableComp from '../../components/Table/tableComp'

const Stock = () => {

    const [medicineName, setMedicineName] = useState("")
    const handleInputChange = (value) => {
        setMedicineName(value)
    }

    const headers = ["Sr No", "Name", "Quantity", "Usage"];
    const rowData = [
        {
            sno: 1,
            name: "Paracetamol",
            quan: 22,
            usage: "Fever"
        },
        {
            sno: 2,
            name: "Liv52",
            quan: 222,
            usage: "Minor Liver Or Digestion Problem"
        },
        {
            sno: 3,
            name: "ofloxacin",
            quan: 333,
            usage: "antibiotic used to treat bacterial infections"
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