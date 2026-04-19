import React from 'react'
import './staff.css'
import TableComp from '../Table/tableComp'
const Staff = () => {
  const staffHeader = ["Name", "Designation", "Email Id", "Contact No."];
  const rowData = [
    {
      name : "Shravann",
      designation : "HR",
      email : "hello@gmail.com",
      contact : "1234567890"
    },
    {
      name : "upii",
      designation : "HR",
      email : "hello@gmail.com",
      contact : "1234567890"
    },
    {
      name : "Depuu",
      designation : "HR",
      email : "hello@gmail.com",
      contact : "1234567890"
    },
    {
      name : "Simu",
      designation : "HR",
      email : "hello@gmail.com",
      contact : "1234567890"
    }
  ]
  return (
    <div className = 'staff'>
      <TableComp header = {staffHeader} data = {rowData}/>

    </div>
  )
}

export default Staff;
