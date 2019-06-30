import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class FormsPage extends React.Component {
	state = {
		name: {
			value: '',
			valid: false
		},
		state: {
			value: '',
			valid: false
		},
		city: {
			value: '',
			valid: false
		},
		adress: {
			value: '',
			valid: false
		},
		zip: {
			value: '',
			valid: false
		},
		nip: {
			value: '',
			valid: false
		},
		regon: {
			value: '',
			valid: false
		},
		year: {
			value: '',
			valid: false
		},
		tel: {
			value: '',
			valid: false
		},
		cell: {
			value: '',
			valid: false
		},
		fb: {
			value: '',
			valid: false
		},
		twitter: {
			value: '',
			valid: false
		},
		insta: {
			value: '',
			valid: false
		},
		email: {
			value: '',
			valid: false
		},
		website: {
			value: '',
			valid: false
		},
		description: {
			value: '',
			valid: false
		},
		category1: {
			value: '',
			valid: false
		},
		image1: {
			value: '',
			valid: false
		},
		image2: {
			value: '',
			valid: false
		},
		image3: {
			value: '',
			valid: false
		}
	};

	changeHandler = (event) => {
		this.setState({
			[event.target.name]: {
				value: event.target.value,
				valid: !!event.target.value
			}
		});
	};

	render() {
		return (
			<div>
				<form>
					<MDBRow>
						<MDBCol md="4" className="mb-3 mt-5">
							<label htmlFor="defaultFormRegisterNameEx" className="grey-text">
								Nazwa firmy
							</label>
							<input
								value={this.state.name.value}
								className={
									this.state.name.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								name="name"
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterNameEx"
								placeholder="Nazwa firmy"
								required
							/>
							<div className="valid-feedback">Wygląda ok!</div>
						</MDBCol>
						<MDBCol md="4" className="mb-3 mt-5">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3 mt-5">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label
								htmlFor="defaultFormRegisterPasswordEx4"
								className="grey-text"
							>
								Kolejne pole
							</label>
							<input
								value={this.state.zip.value}
								className={
									this.state.zip.valid
										? 'form-control is-valid'
										: 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>

					<MDBCol md="4" className="mb-3">
						<div className="custom-control custom-checkbox pl-3">
							<input
								className="custom-control-input"
								type="checkbox"
								value=""
								id="invalidCheck"
								required
							/>
							<label className="custom-control-label" htmlFor="invalidCheck">
								Zaakceptuj regulamin
							</label>
							<div className="invalid-feedback">
								Musisz zaakceptować przed kontynuowaniem
							</div>
						</div>
					</MDBCol>
					<MDBBtn color="primary" type="submit">
						Zgłoś ogłoszenie
					</MDBBtn>
				</form>
			</div>
		);
	}
}

export default FormsPage;
