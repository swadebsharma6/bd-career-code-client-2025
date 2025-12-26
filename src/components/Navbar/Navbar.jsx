import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Navbar = () => {

  const {user, logOut} = use(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <span
              className={isActive ? "font-bold underline text-primary" : ""}
            >
              Home
            </span>
          )}
        </NavLink>
      </li>
      {/* Only for Applicant links check role as well */}
      {
        user  && <>
         <li>
        <NavLink to="/myApplications">
          {({ isActive }) => (
            <span
              className={isActive ? "font-bold underline text-primary" : ""}
            >
              My Applications
            </span>
          )}
        </NavLink>
      </li>
        </>
      }
      {/* for recruiter. check role as well */}
      {
        user && <>
           <li>
        <NavLink to="/addJob">
          {({ isActive }) => (
            <span
              className={isActive ? "font-bold underline text-primary" : ""}
            >
              Add a Job
            </span>
          )}
        </NavLink>
           </li>
           <li>
        <NavLink to="/myPostedJobs">
          {({ isActive }) => (
            <span
              className={isActive ? "font-bold underline text-primary" : ""}
            >
              My Posted Jobs-(recruiter)
            </span>
          )}
        </NavLink>
           </li>
        </>
      }
      <li>
        <NavLink to="/find-jobs">
          {({ isActive }) => (
            <span
              className={isActive ? "font-bold underline text-primary" : ""}
            >
              Find a Job
            </span>
          )}
        </NavLink>
      </li>
      
      
    </>
  );

  const handleSignOut = ()=>{
    logOut()
    .then(()=>{alert('user signout successfully')})
    .catch(error => console.log(error.message))
  }

  return (
    <div className="navbar bg-base-100 shadow-2xl sticky top-0 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <p className="mr-6">
          <NavLink to="/register">
          {({ isActive }) => (
            <span
              className={isActive ? "font-bold underline text-primary" : ""}
            >
             Register
            </span>
          )}
        </NavLink>
        </p>

        {
          user ? <button onClick={handleSignOut} className="btn btn-secondary">Sign Out</button> : <button className="btn btn-primary">
              <NavLink to="/signin">
          {({ isActive }) => (
            <span
              className={isActive ? "font-bold underline text-white" : ""}
            >
              Sign in
            </span>
          )}
        </NavLink>
        </button>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
