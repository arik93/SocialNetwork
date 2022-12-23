import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarStyle from './Sidebar.module.css';

export default function Sidebar(props) {
  return (
    <nav className={SidebarStyle.sidebar}>
      <div className={SidebarStyle.item}>
        <NavLink 
          to={'/profile'}
          className={({ isActive }) => isActive ? SidebarStyle.activeLink : undefined}
        >
          Profile
        </NavLink>
      </div>
      <div className={SidebarStyle.item}>
        <NavLink 
          to='/dialogs'
          className={({ isActive }) => isActive ? SidebarStyle.activeLink : undefined}
        >
          Messages
        </NavLink>
      </div>
      <div className={SidebarStyle.item}>
        <NavLink 
          to='/users'
          className={({ isActive }) => isActive ? SidebarStyle.activeLink : undefined}
        >
          Users
        </NavLink>
      </div>
    </nav>
  )
}
