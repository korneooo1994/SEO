import React from 'react';
import App, { Container } from 'next/app';
import ScrollUpButton from 'react-scroll-up-button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Layout from '../components/Layout';
import FooterPage from '../components/Footer';
import NavbarPage from '../components/Navbar';

export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<NavbarPage />
				<Layout>
					<div>
						<ScrollUpButton />
					</div>
					<Component {...pageProps} />
				</Layout>
				<FooterPage />
			</Container>
		);
	}
}
