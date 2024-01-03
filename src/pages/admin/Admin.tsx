import React from 'react'

import "./_admin.scss"

const Admin = () => {
  return (
    <div className='admin'>
      <div className="admin__wrapper">
        <h2 className="admin__title">Admin</h2>
        <p className="admin__password">Admin password</p>
        <input type="password" className="reg__input" />
        <button className='admin__button '>Login</button>
      </div>
    </div>
  )
}

export default Admin