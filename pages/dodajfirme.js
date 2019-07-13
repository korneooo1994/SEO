import React from 'react';
import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

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
								className={this.state.name.valid ? 'form-control is-valid' : 'form-control is-invalid'}
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
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Województwo
							</label>
							<input
								value={this.state.state.value}
								className={this.state.state.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="state"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3 mt-5">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Miasto
							</label>
							<input
								value={this.state.city.value}
								className={this.state.city.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="city"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Adres
							</label>
							<input
								value={this.state.adress.value}
								className={
									this.state.adress.valid ? 'form-control is-valid' : 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="adress"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Kod pocztowy
							</label>
							<input
								value={this.state.zip.value}
								className={this.state.zip.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="zip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								NIP
							</label>
							<input
								value={this.state.nip.value}
								className={this.state.nip.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="nip"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								REGON
							</label>
							<input
								value={this.state.regon.value}
								className={this.state.regon.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="regon"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Rok założenia
							</label>
							<input
								value={this.state.year.value}
								className={this.state.year.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="year"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Numer stacjonarny
							</label>
							<input
								value={this.state.tel.value}
								className={this.state.tel.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="tel"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Numer komórkowy
							</label>
							<input
								value={this.state.cell.value}
								className={this.state.cell.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="cell"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Facebook
							</label>
							<input
								value={this.state.fb.value}
								className={this.state.fb.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="fb"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Twitter
							</label>
							<input
								value={this.state.twitter.value}
								className={
									this.state.twitter.valid ? 'form-control is-valid' : 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="twitter"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Instagram
							</label>
							<input
								value={this.state.insta.value}
								className={this.state.insta.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="insta"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								E-mail
							</label>
							<input
								value={this.state.email.value}
								className={this.state.email.valid ? 'form-control is-valid' : 'form-control is-invalid'}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="email"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Strona internetowa
							</label>
							<input
								value={this.state.website.value}
								className={
									this.state.website.valid ? 'form-control is-valid' : 'form-control is-invalid'
								}
								onChange={this.changeHandler}
								type="text"
								id="defaultFormRegisterPasswordEx4"
								className="form-control"
								name="website"
								placeholder="Kolejne pole"
							/>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							
							<MDBInput type="textarea" label="Twój opis"  />
						</MDBCol>
						<MDBCol md="4" className="mb-3 mt-5" >
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Kategoria
							</label>
							<div>
        <select className="browser-default custom-select">
          <option>Wybierz kategorię</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
						</MDBCol>
					</MDBRow>
					
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Zdjęcie główne
							</label>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroupFileAddon01">
										Plik
									</span>
								</div>
								<div className="custom-file">
									<input
										type="file"
										className="custom-file-input"
										id="inputGroupFile01"
										aria-describedby="inputGroupFileAddon01"
									/>
									<label className="custom-file-label" htmlFor="inputGroupFile01">
										Wybierz plik
									</label>
								</div>
							</div>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Zdjęcie 2
							</label>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroupFileAddon01">
										Plik
									</span>
								</div>
								<div className="custom-file">
									<input
										type="file"
										className="custom-file-input"
										id="inputGroupFile01"
										aria-describedby="inputGroupFileAddon01"
									/>
									<label className="custom-file-label" htmlFor="inputGroupFile01">
										Wybierz plik
									</label>
								</div>
							</div>
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol md="4" className="mb-3">
							<label htmlFor="defaultFormRegisterPasswordEx4" className="grey-text">
								Zdjęcie 3
							</label>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text" id="inputGroupFileAddon01">
										Plik
									</span>
								</div>
								<div className="custom-file">
									<input
										type="file"
										className="custom-file-input"
										id="inputGroupFile01"
										aria-describedby="inputGroupFileAddon01"
									/>
									<label className="custom-file-label" htmlFor="inputGroupFile01">
										Wybierz plik
									</label>
								</div>
							</div>
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
							<div className="invalid-feedback">Musisz zaakceptować przed kontynuowaniem</div>
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
