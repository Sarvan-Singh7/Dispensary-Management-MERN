import React from 'react'
import './nearByHospital.css'
import TableComp from '../Table/tableComp'
const NearByHospital = () => {
  const hosptalheaders = ["Sn No.", "Name", "Address", "Contact"];
  const rowData = [
    {
      SNo : "1",
      name : "Neelam Hospital",
      address : "Near Chitkara University, Village Jhansla,Punjab",
      contact : "1234567890"
    }
  ]
  return (
    <div>
      <TableComp header = {hosptalheaders} data = {rowData}/>
    </div>
  )
}

export default NearByHospital
