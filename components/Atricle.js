import PropTypes from "prop-types";

const Article = ({ title, imgSrc, imgAlt, decsription, articleLink }) => (
	<article>
		<h2>{title}</h2>
		<img
			className="rounded"
			src={`/static/images/${imgSrc}_600h.jpg`}
			alt={imgAlt}
			srcSet={`/static/images/${imgSrc}_320.jpg 320w, /static/images/${imgSrc}_400.jpg 400w, 
                        /static/images/${imgSrc}_480.jpg 480w, /static/images/${imgSrc}_575.jpg 575w,
                        /static/images/${imgSrc}_600.jpg 600w, /static/images/${imgSrc}_767.jpg 767w, 
                        /static/images/${imgSrc}_800.jpg 800w, /static/images/${imgSrc}_1000.jpg 1000w,
                        /static/images/${imgSrc}_1200.jpg 1200w, /static/images/${imgSrc}_1400.jpg 1400w`}
		/>
		<div className="row">
			<p className="col-sm-10">{decsription}</p>
			<div className="col-sm-2">
				<a href={articleLink} className="btn btn-secondary">
					More...
				</a>
			</div>
		</div>
		<style jsx>{`
			article {
				padding: 2.5em;
			}
			h2 {
				text-align: center;
			}
			img {
				width: 100%;
				height: 100%;
				text-align: center;
				box-shadow: 0.3em 0.4em 1em 0.0625em rgba(0, 0, 0, 0.3),
					0.3em 0.4em 1em 0.0625em rgba(0, 0, 0, 0.3);
				margin-bottom: 1.25em;
			}
			p {
				font-size: 1em;
			}
			a {
				box-shadow: 0em 0em 0.1125em 0.025em rgba(0, 0, 0, 0.3);
			}
		`}</style>
	</article>
);

Article.propTypes = {
	title: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	decsription: PropTypes.string.isRequired,
	articleLink: PropTypes.string.isRequired
};

export default Article;
