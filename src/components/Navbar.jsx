import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prevState => !prevState);
    setSubMenuOpen(false)
  };

  const subMenuSetter = () => {
    setSubMenuOpen(prevState => !prevState)
  };

  return (
    <header>
      <div>
        <div id="logo">
          <img src={logo} alt="Logo" />
          <span>ENERPLAZ EVS</span>
        </div>
        <label className="hamburger">
          <input type="checkbox" onClick={handleMenuToggle} checked={menuOpen?true:false} />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            />
            <path className="line" d="M7 16 27 16" />
          </svg>
        </label>
      </div>

      <nav className={`${menuOpen ? ' open' : ''}`}>
        <NavLink to="/"  onClick={handleMenuToggle} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <label  onClick={subMenuSetter}  className={`${subMenuOpen?'active':''}`}><span>Explore</span><span><ion-icon name="chevron-down-outline"></ion-icon></span></label>
        <div id='submenu' className={`${subMenuOpen ? ' open' : ''} `}>
          <Link to="/vehicles/cars" onClick={handleMenuToggle}>Electric Cars</Link>
          <Link to="/vehicles/tricycles" onClick={handleMenuToggle}>Electric Tricycles</Link>
          <Link to="/vehicles/motorcycles" onClick={handleMenuToggle}>Electric Motorcycles</Link>
        </div>
        <NavLink to="/mission"  onClick={handleMenuToggle} className={({ isActive }) => isActive ? 'active' : ''}>Our Mission</NavLink>
        <NavLink to="/support"  onClick={handleMenuToggle} className={({ isActive }) => isActive ? 'active' : ''}>Support</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
