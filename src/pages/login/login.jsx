import React, { useState } from 'react'
import './login.css'

import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginField, setLoginField] = useState({ email: "", password: "" });
    const [registerField, setRegisterField] = useState({ name: "", email: "", password: "", roll: "" });
    const handleOnChange = (event, key, card) => {
        if (card === "login") {
            setLoginField({ ...loginField, [key]: event.target.value })
        } else {
            setRegisterField({ ...registerField, [key]: event.target.value })
        }
    }
    return (
        <div className='login-page'>

            <div className='login-page-card'>

                <div className="card-header-form">Login </div>
                <div className="form-input-fields">
                    <input value={loginField.email} onChange={(event) => { handleOnChange(event, 'email', 'login') }} type="email" className="form-input" placeholder='Enter Email id' />
                    <input value={loginField.password} onChange={(event) => { handleOnChange(event, 'password', 'login') }} type="password" className="form-input" placeholder='Your Password' />
                    <div className="form-btn">Login</div>
                </div>
                <div className="forgot-password-link">Forgot Password ?</div>
                
            </div>

            <div className='signup-page-card'>
                <div className='card-header-form'>Register</div>
                <div className='form-input-fields'>

                    <input value={registerField.name} onChange={(event) => { handleOnChange(event, 'name', 'register') }} type="text" className="form-input" placeholder='Enter Your Name' />
                    <input value={registerField.email} onChange={(event) => { handleOnChange(event, 'email', 'register') }} type="email" className="form-input" placeholder='Enteryour Email id' />
                    <input value={registerField.password} onChange={(event) => { handleOnChange(event, 'password', 'register') }} type="password" className="form-input" placeholder='Your Password' />
                    <input value={registerField.roll} onChange={(event) => { handleOnChange(event, 'roll', 'register') }} type="text" className="form-input" placeholder='Your roll no' />
                    <div className="form-btn">Register</div>
                </div>
            </div>


        </div>
    )
}

export default Login