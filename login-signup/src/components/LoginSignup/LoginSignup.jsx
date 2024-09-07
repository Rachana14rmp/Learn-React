import React from 'react'
import './LoginSingup.css'
import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/padlock.png'
import { useState } from 'react'
import { act } from 'react'
const LoginSignup = () => {

const [action, setAction] = useState("Login")

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
                <div className="underline"></div>
        </div>
        <div className="inputs">
        {action=='Login' ? <div></div> : 

            <div className="input">
                <img src={user_icon} alt=''height='30px'/>
                <input type='text' placeholder='Name'/>
            </div>
}
            <div className="input">
                <img src={email_icon} alt='' height='30px'/>
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt=''height='30px'/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        {action!=='Login' ? <div></div> : 

        <div className="forgot-password">Lost Password? <span>Click here!</span></div>
}
        <div className="submit-container">
            <div className={action=="Login" ? "submit gray": "submit"} onClick={() => {
                setAction('Sign Up')
            }}>SignUp</div>
            <div className={action=='Sign Up' ? "submit gray" : "submit"} onClick={() => {
                setAction("Login")
            }}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup