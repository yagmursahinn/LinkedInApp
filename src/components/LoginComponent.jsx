import React, { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI';
import LinkedinLogo from '../assets/LinkedinLogo.png'
import "../Sass/LoginComponent.scss";


export default function LoginComponent() {
    const [credentails, setCredentials] = useState({});
        const login = async () => {
            try{
                let res = await LoginAPI(credentails.email, credentails.password)
                console.log(res?.user)
            } catch (err) {
              console.log(err)
            }
            
        }
  return (
    <div className="login-wrapper">
        <img src= {LinkedinLogo} className='linkedinLogo' />
        <div className="login-wrapper-inner">
    <h1 className='heading'>Sign In</h1>
    <p className='sub-heading'>Stay updated on your professional world</p>
  <div className='auth-inputs'>
        <input
        onChange={(event) =>
            setCredentials({...credentails, email: event.target.value })
        }
        type='email'
        className='common-input'
        placeholder='Email or Phone'
        />
        <input
         onChange={(event) =>
            setCredentials({ ...credentails, password: event.target.value })
          }
          type="password"
          className="common-input"
          placeholder="Password"
        /> 
        
        </div> 
          <button onClick={login} className="login-btn">
          Sign in
        </button> 
      </div>
      
      </div>
  )
        }
