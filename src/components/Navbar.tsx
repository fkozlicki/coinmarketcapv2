import React from 'react';
import ThemeMenu from './ThemeMenu';

const Navbar = () => {
	return (
		<header className="p-4">
			<div className="flex justify-between items-center">
				<div>CMC</div>
				<ThemeMenu />
			</div>
		</header>
	);
};

export default Navbar;
