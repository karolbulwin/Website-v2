import Layout from "../components/MyLayout.js";
import Head from "../components/Head.js";
import Activitie from "../components/Activitie";

const Index = () => (
	<>
		<Head title="activities" />
		<Layout hide="activities">
			<section className="col-sm-9 col-md-10 order-sm-last order-lg-first">
				<h1 className="display-4 text-center my-4">Choose your way</h1>

				<Activitie
					imgName="walk"
					imgAlt="Walk"
					title="Walk"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="walk"
				/>

				<Activitie
					imgName="bike"
					imgAlt="Bike"
					title="Bike"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="bike"
				/>

				<Activitie
					imgName="swim"
					imgAlt="Swim"
					title="Swim"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="swim"
				/>

				<Activitie
					imgName="canoe"
					imgAlt="Canoe"
					title="Canoe"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="canoe"
				/>

				<Activitie
					imgName="paragliders"
					imgAlt="Paragliders"
					title="Paragliders"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="paragliders"
				/>
			</section>
		</Layout>
	</>
);

export default Index;
