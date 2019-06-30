import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBInput,
	MDBCol,
	MDBRow,
	MDBContainer,
	MDBModalFooter,
	MDBIcon,
	MDBCardHeader
} from 'mdbreact';

const Example = () => (
	<React.Fragment>
		<MDBRow className="mt-5">
			<MDBCol md="6" className="mx-auto">
				<MDBCard>
					<MDBCardImage
						className="img-fluid"
						src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
						waves
					/>
					<div className="header pt-3 blue-gradient">
						<MDBRow className="d-flex justify-content-center">
							<h3 className="white-text mb-3 pt-3 font-weight-bold">
								Logowanie
							</h3>
						</MDBRow>
						<MDBRow className="mt-2 mb-3 d-flex justify-content-center">
							<a href="#!" className="fa-lg p-2 m-2 fb-ic">
								<MDBIcon
									fab
									icon="facebook-f"
									size="lg"
									className="white-text"
								/>
							</a>
							<a href="#!" className="fa-lg p-2 m-2 tw-ic ">
								<MDBIcon fab icon="google" size="lg" className="white-text" />{' '}
							</a>
							<a href="#!" className="fa-lg p-2 m-2 gplus-ic">
								<MDBIcon fab icon="twitter" size="lg" className="white-text" />
							</a>
						</MDBRow>
					</div>
					<MDBCardBody className="mx-4 mt-4">
						<MDBInput label="Twój email" group type="text" validate />
						<MDBInput
							label="Twoje hasło"
							group
							type="password"
							validate
							containerClass="mb-0"
						/>
						<p className="font-small grey-text d-flex justify-content-end">
							Zapomniałeś
							<a href="#!" className="dark-grey-text ml-1 font-weight-bold">
								Hasło?
							</a>
						</p>
						<MDBRow className="d-flex align-items-center mb-4 mt-5">
							<MDBCol md="5" className="d-flex align-items-start">
								<div className="text-center">
									<MDBBtn
										color="grey"
										rounded
										type="button"
										className="z-depth-1a"
									>
										Zaloguj się
									</MDBBtn>
								</div>
							</MDBCol>
							<MDBCol md="7" className="d-flex justify-content-end">
								<p className="font-small grey-text mt-3">
									Nie masz jeszcze konta?
									<a href="#!" className="dark-grey-text ml-1 font-weight-bold">
										Załóż konto
									</a>
								</p>
							</MDBCol>
						</MDBRow>
					</MDBCardBody>
				</MDBCard>
			</MDBCol>
		</MDBRow>
	</React.Fragment>
);

export default Example;
