import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" href="/">useContext</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink 
              to='/' 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}` } 
            >
              Home
            </NavLink>
            <NavLink 
              to='/login' 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}` } 
            >
              Login
            </NavLink>
            <NavLink 
              to='/about' 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}` } 
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
