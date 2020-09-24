import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';


const Navbar2 = () => {
  return (
    <div className="navbar">
    <div className="container">
            <div className="logo">
                    <h2 className="logo_text">Lorem Ip.</h2>
            </div>

            <input type="checkbox" name="" id="nav"/>
            <label htmlFor="nav"></label>

            <ul className="ul_list">
                <li className="list_item"><Link to="/">Home</Link></li>
                <li className="list_item"><a href="#service">Services</a></li>
                <li className="list_item"><a href="#portfolio">Portfolio</a></li>
                <li className="list_item"><a href="#about">About Us</a></li>
                <li className="list_item"><a href="#team">Team</a></li>
                <li className="list_item"><Link to="/contact">Conatct</Link></li>
            </ul>
    </div>
</div>

  );
}

export default Navbar2;
