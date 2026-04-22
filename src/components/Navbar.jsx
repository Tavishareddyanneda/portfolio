import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Tavisha Reddy Anneda</span>
        </div>
        <ul className="navbar-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar