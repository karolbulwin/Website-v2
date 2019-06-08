import Layout from "../../../components/MyLayout.js";
import Head from "../../../components/Head.js";

const Index = () => (
	<>
		<Head title="Visit the woods" />
		<Layout>
			<div className="col-sm-9 col-md-8 order-sm-2 order-lg-first py-5 d-flex justify-content-center align-self-center text-center">
				<section className="jackInTheBox animated">
					<h1 className="display-5 text-center p-3 ">
						This was just an example of a website
					</h1>
					<button type="button" className="btn btn-success btn-back">
						Go back
					</button>
				</section>
			</div>
		</Layout>
	</>
);

export default Index;
