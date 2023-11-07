import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("User logged out successfully!");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
  <div className="bg-[#404040] mb-4">
      <div className="navbar  max-w-[900px] mx-auto">
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
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a>Dashboard</a>
              <ul className="px-4">
                <li>
                  <NavLink to="/add-services">Add Services</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-services">My Services</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/dashboard/all-services">All Services</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-white normal-case text-xl">
          HandyMate
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/services">All Services</NavLink>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </summary>
              <ul className="p-2 z-10">
                <li>
                  <NavLink to="/my-services">My Services</NavLink>
                </li>
                <li>
                  <NavLink to="/add-services">Add Services</NavLink>
                </li>
                <li>
                  <NavLink to="/my-schedules">My Schedules</NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end ml-10">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user?.email} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3  p-2 shadow bg-red-200 z-10 rounded-box w-52"
            >
              <li>
                <a>{user.displayName}</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="">
            Login
          </Link>
        )}
      </div>
    </div>
  </div>
  );
};

export default Navbar;
