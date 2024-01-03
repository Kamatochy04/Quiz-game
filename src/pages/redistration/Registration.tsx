import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react'
import { useAddUserMutation } from '../../store/userApi/user.api';

import './_register.scss'
import { Link } from 'react-router-dom'


const Redistration = () => {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [addUser, {error}] = useAddUserMutation() 

  const registerUser: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    addUser({id: uuidv4(),  name: userName, password:userPassword})
  }

  return (
    <div className='reg'>
      <span className='reg__wrapper'>
        <h2 className="reg__title">Registration</h2>
        <form  className="reg__form">
          <span>
            <p className="reg__txt">User name</p>
            <input className='reg__input' type="text" value={userName} onChange={(event) => setUserName(event.target.value)}/>
          </span>
          <span>
            <p className="reg__txt ">Password</p>
            <input className='reg__input'  type="password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)}/>
          </span>
          <span>
            <p className="reg__txt">Confirm password</p>
            <input className='reg__input' type="password" />
          </span>
          {/* <button className="reg__button button">Submit</button> */}
          <button className='reg__button' onClick={registerUser}>Register</button>
        </form>
        <Link to="/login" className='reg__login'>Already have an account?</Link>
      </span>
    
    </div>
  )
}

export default Redistration