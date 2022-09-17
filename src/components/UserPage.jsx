import React from "react";
import { useParams } from "react-router-dom";
import PageLoading from "./PageLoading";
import "../styles/UserPage.css";

export default function UserPage({ users }) {
	let { id } = useParams();
	const user = users.find((user) => user.id === +id);

	if (!user) {
		return (
			<>
            <PageLoading />
            </>
		);
	}

	return (
		<div className="user-page-container">
			<div className="user-page">
				<div className="user-page-header">
					<div className="user-page-header-img">
						<img
							className="user-page-image"
							src="/user.jpg"
							alt="pfp"
						/>
					</div>
					<div className="user-page-header-info">
						<div className="user-page-header-info-username">
							{user.username}
						</div>
						<div className="user-page-header-info-details">
							{user.name}
						</div>
						<a
							className="user-page-header-info-details user-page-link"
							href={"mailto:" + user.email}>
							{user.email}
						</a>
					</div>
				</div>
				<div className="user-page-body">
					<div className="user-page-body-info">
						<div className="user-page-body-info-title">Website</div>
						<a
							className="user-page-body-info-text user-page-link"
							href={"https://" + user.website}>
							{user.website}
						</a>
					</div>
					<div className="user-page-body-info">
						<div className="user-page-body-info-title">Phone</div>
						<div className="user-page-body-info-text">
							{user.phone}
						</div>
					</div>
					<div className="user-page-body-info">
						<div className="user-page-body-info-title">Address</div>
						<div className="user-page-body-info-text">
							<i>Street:</i> {user.address.street}
						</div>
						<div className="user-page-body-info-text">
							<i>Suite:</i> {user.address.suite}
						</div>
						<div className="user-page-body-info-text">
							<i>City:</i> {user.address.city}
						</div>
						<div className="user-page-body-info-text">
							<i>Zipcode:</i> {user.address.zipcode}
						</div>
						<div className="user-page-body-info-text">
							<i>Geo:</i> {user.address.geo.lat},{" "}
							{user.address.geo.lng}
						</div>
					</div>
					<div className="user-page-body-info">
						<div className="user-page-body-info-title">Company</div>
						<div className="user-page-body-info-text">
							<i>Name:</i> {user.company.name}
						</div>
						<div className="user-page-body-info-text">
							<i>Catchphrase:</i> {user.company.catchPhrase}
						</div>
						<div className="user-page-body-info-text">
							<i>Bs:</i> {user.company.bs}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
