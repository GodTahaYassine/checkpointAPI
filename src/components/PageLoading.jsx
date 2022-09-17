import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/PageLoading.css";

export default function PageLoading() {
    const [warning, setWarning] = useState(false);
    
    setTimeout(() => {
        setWarning(true);
    }, 1000);

	return (
		<div className="page-container">
			<div className="page">
				{ !warning && <div className="page-loading"></div> }
				{ warning && (<div className="page-loading-text">User does not exist, <Link to="/" className="page-redirect">return to homepage</Link></div>) }
			</div>
		</div>
	);
}
