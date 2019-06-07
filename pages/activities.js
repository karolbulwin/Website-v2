import Layout from "../components/MyLayout.js";
import Head from "../components/Head.js";
import Card from "../components/Card";

const Index = () => (
	<>
		<Head title="activities" />
		<Layout hide="activities">
			<section className="col-sm-9 col-md-10 order-sm-last order-lg-first">
				<h1 className="display-4 text-center my-4">Choose your way</h1>

				<Card
					imgName="a_walk"
					imgAlt="Walk"
					title="Walk"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="walk"
					siteLink="/activities/walk"
				/>

				<Card
					imgName="a_bike"
					imgAlt="Bike"
					title="Bike"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="bike"
					siteLink="/activities/bike"
				/>

				<Card
					imgName="a_swim"
					imgAlt="Swim"
					title="Swim"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="swim"
					siteLink="/activities/swim"
				/>

				<Card
					imgName="a_canoe"
					imgAlt="Canoe"
					title="Canoe"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="canoe"
					siteLink="/activities/canoe"
				/>

				<Card
					imgName="a_paragliders"
					imgAlt="Paragliders"
					title="Paragliders"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					activitie="paragliders"
					siteLink="/activities/paragliders"
				/>
			</section>
		</Layout>
	</>
);

export default Index;
