import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Topbar = () => {


	return(
		<>
			<Navbar bg="white" variant="white">
			    <Container>
			    	<Navbar.Brand href="/">
			      		<span className="brand-text">ShopBridge</span>
			      	</Navbar.Brand>
			    </Container>
			</Navbar>
		</>
	)
}

export default Topbar;