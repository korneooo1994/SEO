import { MDBContainer } from 'mdbreact';

import CarouselPage from '../components/Carousel';
import CardExample from '../components/Card';
import FeaturesPage from '../components/BlogListing';

const WelcomePage = () => (
	<React.Fragment>
		<img
			src="/static/mdb-react-small.png"
			alt="MDBReact"
			className="img-fluid d-block mx-auto mt-4 mb-4"
		/>
		<CarouselPage />
		<MDBContainer className="mt-5 mb-5">
			<h3 className="text-center">Najciekawsze firmy</h3>
		</MDBContainer>
		<CardExample />
		<FeaturesPage />
	</React.Fragment>
);

export default WelcomePage;
