import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

export default function Navbar() {
	return (
		<div className="main-navbar">
			<Link to="/" className="nav-logo">
				<FontAwesomeIcon className="logo" icon={faDatabase} />
                <div className="logo-name">PartnersDB</div>
			</Link>
			<ul className="nav-links">
				<li>
					<Link to="/" className="link">
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" className="link">
						About
					</Link>
				</li>
			</ul>
		</div>
	);
}
