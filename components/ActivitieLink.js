import PropTypes from "prop-types";
import Link from "next/link";

const ActivitieLink = ({ activitie, imgName, imgAlt, title }) => (
	<Link href={`/activities/${activitie}`}>
		<a>
			<img
				className="rounded"
				src={`/static/images/${imgName}_70.jpg`}
				alt={imgAlt}
				srcSet={`/static/images/${imgName}_70.jpg 1x, /static/images/${imgName}_140.jpg 2x, /static/images/${imgName}_210.jpg 3x`}
			/>
			<h6>{title}</h6>
			<style jsx>{`
				a {
					color: rgba(255, 255, 255, 0.5);
					transition-duration: 200ms;
				}
				img {
					width: 4.375em;
					height: 4.375em;
				}
				h6 {
					margin-top: 0.125em;
					margin-bottom: 0.875em;
				}
				a:hover {
					text-decoration: none;
					color: rgba(255, 255, 255, 0.75);
				}
				a:hover img {
					box-shadow: 0.1em 0.1em 0.8em 0.0325em rgba(0, 0, 0, 0.3),
						0.1em 0.1em 0.8em 0.0325em rgba(255, 255, 255, 0.3);
				}
				@media screen and (max-width: 47.9375em) {
					a {
						display: inline-block;
						margin-left: 2%;
						margin-right: 2%;
					}
				}
			`}</style>
		</a>
	</Link>
);

ActivitieLink.propTypes = {
	activitie: PropTypes.string.isRequired,
	imgName: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};

export default ActivitieLink;
