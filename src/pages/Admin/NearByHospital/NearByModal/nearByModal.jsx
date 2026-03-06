import React from 'react'
import './nearByModal.css'
const NearByModal = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault()
    }
  return (
    <form className="register-form" onSubmit={handleSubmit}>
                <div className="register-form-div">
                    <div className="register-input-box">
                        <input type="text" className="input-box-register" placeholder='Name' />
                        
                    </div>
                     <div className="register-input-box">
                        <input type="text" className="input-box-register" placeholder='Address' />
                        
                    </div>
                     <div className="register-input-box">
                            <input type="text" className="input-box-register" placeholder='Contact No' />
                        
                    </div>
                     
                    
                            
                </div>
                <button type='submit' className="form-btn reg-btn">Add</button>

                
            </form>
  )
}

export default NearByModal
