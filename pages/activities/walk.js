import Layout from "../../components/MyLayout.js";
import Head from "../../components/Head.js";
import ExampleSite from "../../components/ExampleSite";

const Index = () => (
	<>
		<Head title="Walk" />
		<Layout>
			<div className="col-sm-9 col-md-8 order-sm-2 order-lg-first py-5 d-flex justify-content-center align-self-center text-center">
				<ExampleSite />
			</div>
		</Layout>
	</>
);

export default Index;
