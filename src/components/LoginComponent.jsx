import React, { useState } from 'react'
import { LoginAPI } from '../api/AuthAPI';
import "../Sass/LoginComponent.scss";


export default function LoginComponent() {
    const [credentails, setCredentials] = useState({});
        const login = async () => {
            try{
                let res = await LoginAPI(credentails.email, credentails.password)
                console.log(res)
            } catch (err) {
     console.log(err)
            }
            
        }
  return (
    <div className="login-wrapper">
    <h1>LoginComponent</h1>
    <div className='auth-inputs'>
        <input
        onChange={(event) =>
            setCredentials({...credentails, email: event.target.value })
        }
        className='common-input'
        placeholder='Enter your Email'
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
  )
        }
