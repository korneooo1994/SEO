import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCardImage } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow className="pt-5 mt-4 text-center d-flex justify-content-center">
        <MDBCol md="6">
        <MDBCardImage
						className="img-fluid "
						src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
						waves
					/>
          <form>
            <p className="h5 text-center mt-4 mb-4">Napisz do nas</p>
            <div className="grey-text">
              <MDBInput
                label="Twoje imię"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Twqój email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Temat"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Twoja wiadomość"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Wyślij <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;