import React, { Component } from 'react';
import Link from 'next/link';

import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavbarToggler,
	MDBCollapse,
	MDBFormInline,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBContainer
} from 'mdbreact';

class NavbarPage extends Component {
	state = {
		isOpen: false
	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar color="indigo" dark expand="md">
				<MDBNavbarBrand>
					<strong className="white-text">Nazwa stronki</strong>
				</MDBNavbarBrand>
				<MDBNavbarToggler onClick={this.toggleCollapse} />
				<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
					<MDBNavbarNav left>
						<MDBNavItem>
							<Link href="/">
								<a className="nav-link">Główna</a>
							</Link>
						</MDBNavItem>
						<MDBNavItem>
							<Link href="/dodajfirme">
								<a className="nav-link">Dodaj firme</a>
							</Link>
						</MDBNavItem>
						<MDBNavItem>
							<Link href="/register">
								<a className="nav-link">Załóż konto</a>
							</Link>
						</MDBNavItem>
						<MDBNavItem>
							<Link href="/login">
								<a className="nav-link">Zaloguj się</a>
							</Link>
						</MDBNavItem>
						<MDBNavItem>
							<Link href="/products">
								<a className="nav-link">Oferty</a>
							</Link>
						</MDBNavItem>
						<MDBNavItem>
							<MDBDropdown>
								<MDBDropdownToggle nav caret>
									<span className="mr-2">Więcej</span>
								</MDBDropdownToggle>
								<MDBDropdownMenu>
									<MDBDropdownItem href="/Onas">O nas</MDBDropdownItem>
									<MDBDropdownItem href="/regulamin">Regulamin</MDBDropdownItem>
									<MDBDropdownItem href="/kontakt">Kontakt</MDBDropdownItem>
									<MDBDropdownItem href="#!">Jeszcze coś</MDBDropdownItem>
								</MDBDropdownMenu>
							</MDBDropdown>
						</MDBNavItem>
					</MDBNavbarNav>
					<MDBNavbarNav right>
						<MDBNavItem>
							<MDBFormInline waves>
								<div className="md-form my-0">
									<input
										className="form-control mr-sm-2"
										type="text"
										placeholder="Szukaj"
										aria-label="Search"
									/>
								</div>
							</MDBFormInline>
						</MDBNavItem>
					</MDBNavbarNav>
				</MDBCollapse>
			</MDBNavbar>
		);
	}
}

export default NavbarPage;
