import React from 'react'
import './facilitymodal.css'
const FacilityModal = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='facilty-modal'>
      <form className="register-form" onSubmit={handleSubmit}>
                <div className="">
                    <div className="register-input-box">
                        <input type="text" className="input-box-register" placeholder='Enter Title' />    
                    </div>
                    <div className="register-input-box"style={{marginTop:20}}>
                        <textarea cols={450} rows={10} type='text' className='input-box-register' placeholder='Add Description'></textarea>    
                    </div>              
                </div>

                <button type='submit' className="form-btn reg-btn">Add</button>
                
            </form>
    </div>
  )
}

export default FacilityModal
