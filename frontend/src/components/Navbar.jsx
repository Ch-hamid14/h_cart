import React from "react";
import cartimg from "../images/cart.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/slices/AuthSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={cartimg} alt="cart" style={{ width: 70, height: 50 }} />
          <span className="ml-3 text-xl">H-Cart</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center cursor-pointer">
          <Link to="/home" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact-us" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
          <Link to="/product" className="mr-5 hover:text-gray-900">
            Product
          </Link>
          {user.isAuthenticated ? (
            ""
          ) : (
            <Link to="/account" className="mr-5 hover:text-gray-900">
              Account
            </Link>
          )}
        </nav>
        {user.isAuthenticated ? (
          <button
            className="bg-indigo-500 w-[110px] p-2 rounded-lg text-white font-medium"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Navbar;
