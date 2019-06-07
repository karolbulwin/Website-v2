import Layout from "../components/MyLayout";
import Head from "../components/Head";
import Article from "../components/Atricle";

export default function Index() {
	return (
		<>
			<Head title="Somewhere in the woods" />
			<Layout>
				<section className="col-sm-9 col-md-8 order-sm-2 order-lg-first">
					<h1 className="display-4 text-center mt-4 mb-0">Last trips</h1>

					<Article
						title="Visit the woods"
						imgSrc="waterandhills"
						imgAlt="The mist flows to the riverbed"
						decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat."
						articleLink="/countries/thailand/visit-the-woods"
					/>

					<Article
						title="Take a walk"
						imgSrc="suntrees"
						imgAlt="The trees are dripping in the sun"
						decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat."
						articleLink="/activities/walk/take-a-walk"
					/>

					<Article
						title="Go canoe"
						imgSrc="forest"
						imgAlt="Lake in the valley"
						decsription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat."
						articleLink="/activities/canoe/go-canoe"
					/>
				</section>
			</Layout>
		</>
	);
}
