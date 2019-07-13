import Sticky from 'react-sticky-el';

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
				<MDBContainer>{this.props.children}</MDBContainer>
			</React.Fragment>
		);
	}
}

export default Layout;
