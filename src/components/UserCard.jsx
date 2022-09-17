import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardClip } from "@fortawesome/free-solid-svg-icons";

import "../styles/UserCard.css";

export default function userCard({ user }) {
    return (
        <Link to={`/users/${user.id}`} className="user-card">
                <img className="user-card-image" src="/user.jpg" alt="pfp" />
            <div className="user-card-info">
                <div className="user-card-username">{user.username}</div>
                <div className="user-card-name">{user.name}</div>
            </div>
            <FontAwesomeIcon className="user-card-icon" icon={faIdCardClip} />
        </Link>
    );
}
