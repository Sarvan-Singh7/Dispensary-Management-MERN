import React, { useState } from 'react'
import './manageEvent.css'
import DeleteIcon from '@mui/icons-material/Delete';
const ManageEvent = () => {
    const [title, setTitle] = useState("");
    return (
        <div className='add-staffs-box'>
            <form className='register-form'>
                <div className="">
                    <div className="register-input-box">
                        <input value={title} onChange={(event) => { setTitle(event.target.value) }} type="text" className="input-box-register mngEventInp" placeholder='Event Title' />
                    </div>
                </div>
                <button type='submit' className="form-btn reg-btn">Add</button>
            </form>

            <div className="list-staffs">
                <div className="list-staff">
                    <div>Diwali Celebration</div>
                    <div className="list-staff-btns">

                        <div style={{ cursor: "pointer" }}><DeleteIcon /></div>
                    </div>
                </div>
            </div>
            <div className="list-staffs">
                <div className="list-staff">
                    <div>Holi</div>
                    <div className="list-staff-btns">

                        <div style={{ cursor: "pointer" }}><DeleteIcon /></div>
                    </div>
                </div>
            </div>
            <div className="list-staffs">
                <div className="list-staff">
                    <div>Independence Day</div>
                    <div className="list-staff-btns">

                        <div style={{ cursor: "pointer" }}><DeleteIcon /></div>
                    </div>
                </div>
            </div>
            <div className="list-staffs">
                <div className="list-staff">
                    <div>Republic Day</div>
                    <div className="list-staff-btns">

                        <div style={{ cursor: "pointer" }}><DeleteIcon /></div>
                    </div>
                </div>
            </div>
            <div className="list-staffs">
                <div className="list-staff">
                    <div>Eid al-Adha</div>
                    <div className="list-staff-btns">

                        <div style={{ cursor: "pointer" }}><DeleteIcon /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageEvent
