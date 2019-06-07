import PropTypes from "prop-types";
import Link from "next/link";

const Card = ({ imgName, imgAlt, title, decsription, siteLink }) => (
	<div className="card mb-3">
		<img
			src={`/static/images/${imgName}_800.jpg`}
			className="card-img-top"
			alt={imgAlt}
			srcSet={`/static/images/${imgName}_320.jpg 320w, /static/images/${imgName}_400.jpg 400w, 
						/static/images/${imgName}_480.jpg 480w, /static/images/${imgName}_600.jpg 600w,
						/static/images/${imgName}_767.jpg 767w, /static/images/${imgName}_800.jpg 800w,
						/static/images/${imgName}_1000.jpg 1000w, /static/images/${imgName}_1200.jpg 1200w,
						/static/images/${imgName}_1400.jpg 1400w, /static/images/${imgName}_1600.jpg 1600w`}
		/>
		<div className="card-body">
			<h5 className="card-title">{title}</h5>
			<p className="card-text">{decsription}</p>
			<Link href={siteLink}>
				<a className="btn btn-secondary">Begin your journey</a>
			</Link>
		</div>
		<style jsx>{`
			.card {
				box-shadow: 0.3em 0.4em 1em 0.0625em rgba(0, 0, 0, 0.3),
					0.3em 0.4em 1em 0.0625em rgba(0, 0, 0, 0.3);
			}
			.btn {
				box-shadow: 0em 0em 0.1125em 0.025em rgba(0, 0, 0, 0.3);
			}
		`}</style>
	</div>
);

Card.propTypes = {
	imgName: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	decsription: PropTypes.string.isRequired,
	siteLink: PropTypes.string.isRequired
};

export default Card;
