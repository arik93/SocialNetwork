import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderStyle from './Header.module.css'

export default function Header(props) {

  const {
    isAuth,
    login,
    logout
  } = props

  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.loginBlock}>
        {
          isAuth ?
            <div>
              {login} - <button onClick={logout}>Logout</button>
            </div>
            :
            <NavLink to={"/login"}>Login</NavLink>
        }
      </div>
    </header>
  )
}