import React from "react";
import logo from "../assets/images/logo.png"
// import "@react-icons/all-files/fa/FaBeer";
import { Link } from "react-router";

const Navbar = () => {
    return (
        // <div>landing</div>
        <nav className="flex flex-row justify-around items-center">
            <div>
                <img className="h-[41px]" src={logo} alt="logo" />
            </div>
            <div className="w-[30%] flex flex-row justify-between">
                <Link to={'/home'}>Home</Link>
                <Link to={'/books'}>Books</Link>
                <Link to={'/add-book'}>AddBook</Link>
            </div>
        </nav>
    )
};

export default Navbar;

