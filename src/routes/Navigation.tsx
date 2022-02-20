import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"

import logo from '../logo.svg'
import { ShoopingPage } from '../02-component-patterns/pages/ShoopingPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''} >Shooping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''} >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<h1>about</h1>} />
          <Route path="users" element={<h1>users</h1>} />
          <Route path="/home" element={<ShoopingPage/>} />
          <Route path="/*" element={<Navigate to="home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
