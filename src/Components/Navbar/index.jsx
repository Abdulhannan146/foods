import React, { useState } from 'react';
import './Navbar.css';
import Navb_logo from '../../images/alpha-food-logo.png';
import { menu } from "../../data"; // Ensure this path is correct
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaBars, FaTimes } from "react-icons/fa";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6"; // Uncomment if you need this icon

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
        document.body.classList.toggle('dark-theme', !isDarkTheme);
        document.body.classList.toggle('light-theme', isDarkTheme);
    };

    return (
        <nav className="navbar-container">
            {showSidebar && (
                <div className='overlay' onClick={() => setShowSidebar(false)}></div>
            )}
            <div className="logo-container">
                <img src={Navb_logo} alt="Logo" />
            </div>
            <div className={`tab-group ${showSidebar ? 'show' : ''}`}>
                <span className="icon-container close-btn" onClick={() => setShowSidebar(false)}>
                    <FaTimes />
                </span>
                {menu && menu.length > 0 ? (
                    menu.map((list, index) => (
                        <Link
                            key={index}
                            className="tab-item"
                            to={list.path} // Use the path from your menu data
                            onClick={() => setShowSidebar(false)}
                        >
                            {list.name}
                        </Link>
                    ))
                ) : (
                    <p>No menu items available</p>
                )}
            </div>
            <div className="nav-buttons-group">
                <button className="btn-mode" onClick={toggleTheme}>
                    {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
                </button>
                
                <FaBars className="menu" onClick={() => setShowSidebar(!showSidebar)} />
            </div>
        </nav>
    );
};

export default Navbar;
