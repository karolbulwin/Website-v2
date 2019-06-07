import Layout from "../components/MyLayout.js";
import Head from "../components/Head.js";
import Card from "../components/Card";

const Index = () => (
	<>
		<Head title="relax" />
		<Layout hide="countries">
			<section className="col-sm-12 col-md-10 order-sm-first">
				<h1 className="display-4 text-center my-4">Choose your destination</h1>

				<Card
					imgName="c_peru"
					imgAlt="Machupicchu"
					title="Peru"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					siteLink="/countries/peru"
				/>

				<Card
					imgName="c_nepal"
					imgAlt="Himalaya"
					title="Nepal"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					siteLink="/countries/nepal"
				/>

				<Card
					imgName="c_thailand"
					imgAlt="Lonely mountain in the sea"
					title="Thailand"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					siteLink="/countries/thailand"
				/>

				<Card
					imgName="c_poland"
					imgAlt="Wilderness"
					title="Poland"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					siteLink="/countries/poland"
				/>

				<Card
					imgName="c_canada"
					imgAlt="Lake and mountains above"
					title="Canada"
					decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat."
					siteLink="/countries/canada"
				/>
			</section>
			<style jsx>{`
				.card {
					box-shadow: 0.3em 0.4em 1em 0.0625em rgba(0, 0, 0, 0.3),
						0.3em 0.4em 1em 0.0625em rgba(0, 0, 0, 0.3);
				}
				.btn {
					box-shadow: 0em 0em 0.1125em 0.025em rgba(0, 0, 0, 0.3);
				}
			`}</style>
		</Layout>
	</>
);
export default Index;
