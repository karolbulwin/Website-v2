import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import AsideCountries from "./AsideCountries";
import AsideActivities from "./AsideActivities";

const Layout = ({ children, hide }) => (
	<>
		<Header />
		<main className="container-fluid mt-5em">
			<div className="row">
				{children}
				{hide === "countries" ? null : <AsideCountries />}
				{hide === "activities" ? null : <AsideActivities />}
			</div>
			<style jsx>{`
				.mt-5em {
					margin-top: 4.5em;
				}
			`}</style>
			<style global jsx>{`
				:root {
					--mainColor: #333;
					--asideColor: #e6e6e6;
					--asideTitle: black;
				}
				* {
					box-sizing: border-box;
				}
				html {
					font-family: "Open Sans", sans-serif;
					font-size: 1em;
					position: relative;
					user-select: none;
					scroll-behavior: smooth;
				}

				h1,
				h2 {
					text-shadow: 1.5px 1.3px 4px rgba(0, 0, 0, 0.3);
				}
				h1,
				h2,
				h3,
				p {
					user-select: text;
				}
			`}</style>
		</main>
		<Footer />
	</>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	hide: PropTypes.string
};

export default Layout;
