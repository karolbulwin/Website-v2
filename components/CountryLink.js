import PropTypes from "prop-types";
import { withRouter } from "next/router";

const CountryLink = ({ country, imgName, imgAlt, title, router }) => {
	const href = `/countries/${country}`;

	const styleA = {
		color: router.pathname === href ? "black" : null
	};

	const styleImg = {
		boxShadow:
			router.pathname === href
				? "0.2em 0.2em 0.8em 0.0625em rgba(0, 0, 0, 0.3), 0.3em 0.3em 0.8em 0.0625em rgba(0, 0, 0, 0.5)"
				: null
	};

	const handleClick = e => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={href} onClick={handleClick} style={styleA}>
			<img
				style={styleImg}
				className="rounded"
				src={`/static/images/${imgName}_97.jpg`}
				alt={imgAlt}
				srcSet={`/static/images/${imgName}_97.jpg 1x, /static/images/${imgName}_194.jpg 2x, /static/images/${imgName}_291.jpg 3x`}
			/>
			<h4>{title}</h4>

			<style jsx>{`
				a {
					color: rgba(51, 51, 51, 0.6);
					transition-duration: 200ms;
				}
				a h4 {
					margin-bottom: 2.5em;
					font-weight: bold;
				}
				img {
					width: 100%;
					height: 100%;
					max-width: 6.0625em;
					max-height: 4.0625em;
					box-shadow: 0.2em 0.2em 0.8em 0.0625em rgba(0, 0, 0, 0.3),
						0.3em 0.3em 0.8em 0.0625em rgba(0, 0, 0, 0.3);
				}
				a:hover {
					text-decoration: none;
					color: var(--mainColor);
				}
				a img:hover {
					box-shadow: 0.2em 0.2em 0.8em 0.0625em rgba(0, 0, 0, 0.3),
						0.3em 0.3em 0.8em 0.0625em rgba(0, 0, 0, 0.5);
				}
			`}</style>
		</a>
	);
};

CountryLink.propTypes = {
	country: PropTypes.string.isRequired,
	imgName: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	router: PropTypes.object.isRequired
};

export default withRouter(CountryLink);
