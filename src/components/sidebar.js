import React, { useEffect } from 'react';
import '../styles/navbar.css';
import profile  from '../assets/images/user.png';

const Sidebar = () => {
	useEffect(()=> {
		toggleHeader();
		changeColor();
	},[])

	const toggleHeader = () => {
		const 
	    nav = document.getElementById('nav-bar'),
	    bodypd = document.getElementById('body-pd'),
	    headerpd = document.getElementById('header');
	    nav.classList.toggle('show-nav')
        bodypd.classList.toggle('body-pd')
        headerpd.classList.toggle('body-pd')
	}

	const changeColor = () => {
		const linkColor = document.querySelectorAll('.nav__link')
		if(linkColor){
		    linkColor.forEach(l=> l.classList.remove('active'))
		    //this.classList.add('active')
		}
	}

	return(
		<>
			<div id="body-pd">
				<header className="header" id="header">
		            <div className="header__toggle">
		                <i className='bx bx-menu' id="header-toggle" onClick={toggleHeader}></i>
		            </div>
		            <div className="d-flex justify-content-end">
		            	<i className='bx bx-bell mt-2' style={{marginRight:'42px',fontSize:'24px'}}></i>
		            	<img src={profile} className="header__img" alt="" />
		            </div>
		            
		        </header>

		        <div className="l-navbar" id="nav-bar">
		            <nav className="nav">
		                <div>
		                    <a href="/" className="nav__logo">
		                        <i className='bx bx-repeat nav__logo-icon'></i>
		                        <span className="nav__logo-name">ShopBridge</span>
		                    </a>

		                   
		                    <ul className="navbar-nav nav__list">
							  <li className="nav-item">
							    <a href="/" className="nav__link" onClick={changeColor}>
		                        	<i className='bx bx-grid-alt nav__icon' ></i>
		                            <span className="nav__name">Dashboard</span>
		                        </a>
							  </li>
							  <li className="nav-item active">
							    <a href="/products" className="nav__link" onClick={changeColor}>
		                            <i className='bx bx-cog nav__icon' ></i>
		                            <span className="nav__name">Products</span>
		                        </a> 
							  </li>
							</ul>
		                </div>

		                <a href="/login" className="nav__link">
		                    <i className='bx bx-log-out nav__icon' ></i>
		                    <span className="nav__name">Log Out</span>
		                </a>
		            </nav>
		        </div>
	        </div>
		</>
	)
}

export default Sidebar;