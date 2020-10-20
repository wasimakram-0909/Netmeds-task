import React from 'react'
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
        <div className=" custom-navbar-bar border d-flex align-items-center ">
            <NavLink  className="navbar-item px-2" to="/home">Home</NavLink>
            <NavLink  className="navbar-item px-2" to="/form">Forms</NavLink>
            <NavLink  className="navbar-item px-2" to="/records">Records</NavLink>
        </div>
        </>
    )
}