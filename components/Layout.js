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

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<React.Fragment>
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
								<Link href="/">
									<a className="nav-link">Kategorie</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<MDBDropdown>
									<MDBDropdownToggle nav caret>
										<span className="mr-2">Więcej</span>
									</MDBDropdownToggle>
									<MDBDropdownMenu>
										<MDBDropdownItem href="#!">O nas</MDBDropdownItem>
										<MDBDropdownItem href="#!">Regulamin</MDBDropdownItem>
										<MDBDropdownItem href="#!">Jeszcze coś</MDBDropdownItem>
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

				<MDBContainer>{this.props.children}</MDBContainer>
			</React.Fragment>
		);
	}
}

export default Layout;
