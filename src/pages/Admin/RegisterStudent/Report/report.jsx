import React, { useEffect, useState } from 'react'
import './report.css'
import DeleteIcon from '@mui/icons-material/Delete';
import SearchBox from '../../../../components/SearchBox/searchBox'
const Report = () => {
    const [searchMedicineName, setSearchmedicineName] = useState("")
    const [dropdown, setDropDown] = useState(false);
    const [stocks, setStocks] = useState([]);  //data base se stock lene ke liye
    const onChange = (value) => {
        setSearchmedicineName(value)
    }

    return (
        <div className="report-register">
            <div className="medicince-suggestion-block">
                <SearchBox value={searchMedicineName} onChange={onChange} placeholder="Search Medicine" />
                {dropdown && <div className="report-dropdown">
                    <div className="report-medicine-drpdown">Paracetamol </div>
                    <div className="report-medicine-drpdown">abcccccc </div>
                </div>}
            </div>

            <div className="report-form-rows">
                <div className="report-form-header">
                    <div className="col-1-rm">Medicine Name</div>
                    <div className="col-2-rm">Quantity Left</div>
                    <div className="col-3-rm">Required Quantity</div>
                    <div className="col-4-rm">Delete</div>
                </div>
                <div className="report-form-row-block">
                    <div className="report-form-row">
                        <div className="col-1-rm">Paracetamol</div>
                        <div className="col-2-rm">10</div>
                        <div className="col-3-rm"><input type="number" className="input-table" /></div>
                        <div className="delete-icon col-4-rm"><DeleteIcon /></div>
                    </div>
                    <div className="report-form-row">
                        <div className="col-1-rm">Oflaxin</div>
                        <div className="col-2-rm">100</div>
                        <div className="col-3-rm"><input type="number" className="input-table" /></div>
                        <div className="delete-icon col-4-rm"><DeleteIcon /></div>
                    </div>

                    {/* <div className="report-form-row">
                        <div>No Any Data yet</div>

                    </div> */}
                </div>

            </div>
            <div className="modal-submit">Submit</div>
        </div>
    )
}

export default Report
