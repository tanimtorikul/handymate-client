import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-lg text-white font-medium">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "green" : "red",
              paddingBottom: isActive ? "1px " : "none",
            };
          }}
        >
          Home
        </NavLink>
      </li>

      <li className="text-lg text-white font-medium">
        <NavLink
          to="/services"
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "white" : "",
              fontWeight: isActive ? "medium" : "normal",
              color: isActive ? "green" : "black",
            };
          }}
        >
          All Services
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          HandyMate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
