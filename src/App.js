import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserPage from "./components/UserPage";
import About from "./components/About";
import fetchUsers from "./api/fetchUsers";

export default function App() {
	const [users, setUsers] = useState([]);
	const url = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		fetchUsers(url)
			.then((res) => {
				if (res.status === 200) {
					setUsers(res.data);
                    console.log(res.data);
				}
			})
			.catch((res) => {
				console.log(res.data);
			});
	}, []);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<UserList users={users} />} />
				<Route path="/users/:id" element={<UserPage users={users} />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}
