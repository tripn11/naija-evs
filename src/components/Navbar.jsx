import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="#" activeClassName="active">Explore</NavLink>
        <NavLink to="/mission" activeClassName="active">Our Mission</NavLink>
      </nav>

      <nav>
        <Link to="/vehicles/cars">Electric Cars</Link>
        <Link to="/vehicles/tricycles">Electric Tricycles</Link>
        <Link to="/vehicles/motorcycles">Electric Motorcycles</Link>
      </nav>
    </header>
  );
};

export default Navbar;
