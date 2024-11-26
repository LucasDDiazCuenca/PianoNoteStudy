import React from "react";

const Menu: React.FC = () => {
	return (
		<div className="menu bg-gray-200 p-4 flex justify-between items-center">
			<h2>App title</h2>
			<ul className="flex  gap-4">
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</div>
	);
};

export default Menu;
