import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
    <h1>Vet Clinic</h1>
		<Bars />
		<NavMenu>
		<NavLink to='/'>
			Home
		</NavLink>
		<NavLink to='/users'>
			Users
		</NavLink>
		<NavLink to='/pets'>
			Pets
		</NavLink>
        </NavMenu>	
	</Nav>
	</>
);
};

export default Navbar;
