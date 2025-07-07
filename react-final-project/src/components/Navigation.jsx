import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
	return (
		<nav
			style={{
				backgroundColor: "#F0F0F0",
				padding: "12px 24px",
				marginBottom: 32,
			}}
		>
			<ul>
				<li style={{ listStyle: "none" }}>
					<Link to='/'>Events</Link>
				</li>
			</ul>
		</nav>
	);
};
