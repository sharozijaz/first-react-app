import { Link, Outlet } from "react-router-dom";
import "./navbar.style.css";
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signUp">Sign Up</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
