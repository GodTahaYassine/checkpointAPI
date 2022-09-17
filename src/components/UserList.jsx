import React from "react";
import UserCard from "./UserCard";
import "../styles/UserList.css";

export default function UserList({ users }) {
	return (
		<div className="user-list-container">
			<div className="user-list">
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</div>
	);
}
