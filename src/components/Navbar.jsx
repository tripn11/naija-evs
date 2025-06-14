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
      </nav>

      <nav>
        <Link to="/cars">Electric Cars</Link>
        <Link to="/buses">Electric Buses</Link>
        <Link to="/tricycle">Electric Tricycles</Link>
        <Link to="/motorcycles">Electric Motorcycles</Link>
        <Link to="/bikes">Electric Bikes</Link>
        <Link to="/monocycles">Electric Monocycles</Link>
        <Link to="/drones">Drones</Link>
      </nav> 
    </header>
  );
};

export default Navbar;
