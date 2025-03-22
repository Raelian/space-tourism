import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
    const [navbarWrapActive, setNavbarWrapActive] = useState(false);

    const toggleNavbarWrap = () => setNavbarWrapActive(!navbarWrapActive);

    return (
        <div className="navigation-container">
            <img className="logo" src="images/shared/logo.svg" alt="logo" />
            <span className="style-bar"></span>
            <button className={`burger-btn ${navbarWrapActive ? "inactive" : ""}`} onClick={toggleNavbarWrap}></button>
            <div className={navbarWrapActive ? 'navbar-wrap active-navbar' : 'navbar-wrap'}>
                <ul className="nav-list">
                    <li className="home-link">
                        <NavLink to="/" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
                            <span>00</span>
                            Home
                        </NavLink>
                    </li>
                    <li className="destination-link">
                        <NavLink to="/destination" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
                            <span>01</span>
                            Destination
                        </NavLink>
                    </li>
                    <li className="crew-link">
                        <NavLink to="/crew" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
                            <span>02</span>
                            Crew
                        </NavLink>
                    </li>
                    <li className="technology-link">
                        <NavLink to="/technology" className={({isActive}) => (isActive ? "nav-link active" : "nav-link")}>
                            <span>03</span>
                            Technology
                        </NavLink>
                    </li>
                </ul>
                <button className="close-btn" onClick={toggleNavbarWrap}></button>
            </div>     
        </div>
    )
}

export default Navigation;