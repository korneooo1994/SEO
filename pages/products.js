import React, { Fragment, Component } from 'react';
import Link from 'next/link';

import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from 'mdbreact';

import Filter from '../components/Filter';

class ProjectsPage extends Component {
	render() {
		return (
			<Fragment>
 <Filter/>
				<section className="text-center my-5">


					<h2 className="h1-responsive font-weight-bold my-5">Oferty</h2>

					<MDBRow className="text-center">
						<MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-3">
                        <Link href="/product">
								
							<MDBView className="overlay rounded z-depth-1" waves>
								<img
                                
									src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
									alt=""
                                    className="img-fluid"
                                    
								/>
                             
							</MDBView>
                            </Link>
							<MDBCardBody className="pb-0">
								<h4 className="font-weight-bold my-3">Title of the news</h4>
						
                        		<h5 className="font-weight-bold my-3">Bydgoszcz</h5>
								<p className="grey-text">
									Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
									eveniet ut et voluptates repudiandae.
								</p>
                                <Link href="/product">

								<MDBBtn color="indigo" size="sm">
									<MDBIcon far icon="clone" className="left" /> MDBView project
								</MDBBtn>
                                </Link>
							</MDBCardBody>
						</MDBCol>
						<MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-3">
							<MDBView className="overlay rounded z-depth-1" waves>
								<img
									src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
									alt=""
									className="img-fluid"
								/>
								<a href="#!">
									<MDBMask overlay="white-slight" />
								</a>
							</MDBView>
							<MDBCardBody className="pb-0">
								<h4 className="font-weight-bold my-3">Title of the news</h4>
								<h5 className="font-weight-bold my-3">Bydgoszcz</h5>

								<p className="grey-text">
									Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
									eveniet ut et voluptates repudiandae.
								</p>
								<MDBBtn color="indigo" size="sm">
									<MDBIcon far icon="clone" className="left" /> MDBView project
								</MDBBtn>
							</MDBCardBody>
						</MDBCol>
						<MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-3">
							<MDBView className="overlay rounded z-depth-1" waves>
								<img
									src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
									alt=""
									className="img-fluid"
								/>
								<a href="#!">
									<MDBMask overlay="white-slight" />
								</a>
							</MDBView>
							<MDBCardBody className="pb-0">
								<h4 className="font-weight-bold my-3">Title of the news</h4>
								<h5 className="font-weight-bold my-3">Bydgoszcz</h5>

								<p className="grey-text">
									Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
									eveniet ut et voluptates repudiandae.
								</p>
								<MDBBtn color="indigo" size="sm">
									<MDBIcon far icon="clone" className="left" /> MDBView project
								</MDBBtn>
							</MDBCardBody>
						</MDBCol>
						<MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-3">
							<MDBView className="overlay rounded z-depth-1" waves>
								<img
									src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
									alt=""
									className="img-fluid"
								/>
								<a href="#!">
									<MDBMask overlay="white-slight" />
								</a>
							</MDBView>
							<MDBCardBody className="pb-0">
								<h4 className="font-weight-bold my-3">Title of the news</h4>
								<h5 className="font-weight-bold my-3">Bydgoszcz</h5>

								<p className="grey-text">
									Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
									eveniet ut et voluptates repudiandae.
								</p>
								<MDBBtn color="indigo" size="sm">
									<MDBIcon far icon="clone" className="left" /> MDBView project
								</MDBBtn>
							</MDBCardBody>
						</MDBCol>
					</MDBRow>
				</section>
			</Fragment>
		);
	}
}

export default ProjectsPage;
