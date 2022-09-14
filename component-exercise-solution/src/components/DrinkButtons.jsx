import React from 'react';
import './DrinkButtons.css';

export const DrinkButtons = () => {
	return (
		<>
			<h2>Would you like tea or coffee?</h2>
			<div className="Button-group">
				<button className="Button">Tea</button>
				<button className="Button">Coffee</button>
			</div>
		</>
	);
};
