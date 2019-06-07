import Layout from "../components/MyLayout.js";
import Head from "../components/Head.js";

const Index = () => (
	<>
		<Head title="contact" />
		<Layout>
			<div className="col-sm-9 col-md-8 order-sm-2 order-lg-first py-5 d-flex justify-content-center align-self-center">
				<section id="contact-us" className="row contact-us">
					<h1>CONTACT US</h1>
					<h3>Somewhere in woods</h3>
					<p>Second oak on the left</p>
					<p>Next to the spruce</p>
					<p>In the rabbit hole</p>
					<style jsx>{`
						section {
							display: block;
							margin: 3.125em;
							text-align: center;
						}
					`}</style>
				</section>
			</div>
		</Layout>
	</>
);

export default Index;
