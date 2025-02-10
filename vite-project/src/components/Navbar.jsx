import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-listitem">
           <Link to="/">Home</Link>
         </li>
        <li className="nav-listitem">
          <Link to="/Todo">To-do list</Link>
        </li>
        <li className="nav-listitem">
          <Link to="/Omoss">Om oss</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;