import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBInput,
	MDBCol,
	MDBRow
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
					<MDBCardBody>
						<form>
							<p className="h5 text-center mb-4">Załóż konto</p>
							<div className="grey-text">
								<MDBInput
									label="Nick"
									icon="user"
									group
									type="text"
									validate
									error="wrong"
									success="right"
								/>
								<MDBInput
									label="Twój email"
									icon="envelope"
									group
									type="email"
									validate
									error="wrong"
									success="right"
								/>
								<MDBInput
									label="Potwierdź twój email"
									icon="exclamation-triangle"
									group
									type="text"
									validate
									error="wrong"
									success="right"
								/>
								<MDBInput
									label="Hasło "
									icon="lock"
									group
									type="password"
									validate
								/>
							</div>
							<div className="text-center">
								<MDBBtn color="primary">Potwierdź</MDBBtn>
							</div>
						</form>
					</MDBCardBody>
				</MDBCard>
			</MDBCol>
		</MDBRow>
	</React.Fragment>
);

export default Example;
