import React, { useState } from 'react'
import './login.css'

import { useNavigate } from 'react-router-dom'

const Login = () => {


    return (
        <div className='login-page'>

            <div className='login-page-card'>
              <div className="card-header-form">Login </div>
                <div className="form-input-fields">
                    <input type="email" className="form-input"  placeholder='Enter Email id'/>
                    <input type="password" className="form-input" placeholder='Your Password' />
                    <div className="form-btn">Login</div>
                </div>
              <div className="forgot-password-link">Forgot Password</div>
            </div>

            <div className='signup-page-card'>
                <div className='card-header-form'>Register</div>
                <div className='form-input-fields'>
            
                     <input type="text" className="form-input"  placeholder='Enter Your Name'/>
                      <input type="email" className="form-input"  placeholder='Enteryour Email id'/>
                    <input type="password" className="form-input" placeholder='Your Password' />
                    <input type="text" className="form-input" placeholder='Your roll no' />
                    <div className="form-btn">Register</div>
                </div>
            </div>
       
          
        </div>
    )
}

export default Login