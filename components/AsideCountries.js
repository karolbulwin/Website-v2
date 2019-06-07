import Link from "next/link";

const AsideCountries = () => (
	<aside className="col-sm-3 col-md-2 order-sm-first">
		<h4 className="countries-title">Countries</h4>

		<div className="countries-list">
			<Link href="/countries/peru">
				<a>
					<img
						className="rounded"
						src="/static/images/peru_97.jpg"
						alt="Machupicchu"
						srcSet="/static/images/peru_97.jpg 1x, /static/images/peru_194.jpg 2x, /static/images/peru_291.jpg 3x"
					/>
					<h4>Peru</h4>
				</a>
			</Link>

			<Link href="/countries/nepal">
				<a>
					<img
						className="rounded"
						src="/static/images/nepal_97.jpg"
						alt="Himalaya"
						srcSet="/static/images/nepal_97.jpg 1x, /static/images/nepal_194.jpg 2x, /static/images/nepal_291.jpg 3x"
					/>
					<h4>Nepal</h4>
				</a>
			</Link>

			<Link href="/countries/thailand">
				<a>
					<img
						className="rounded"
						src="/static/images/thailand_97.jpg"
						alt="Lonely mountain in the sea"
						srcSet="/static/images/thailand_97.jpg 1x, /static/images/thailand_194.jpg 2x, /static/images/thailand_291.jpg 3x"
					/>
					<h4>Thailand</h4>
				</a>
			</Link>

			<Link href="/countries/poland">
				<a>
					<img
						className="rounded"
						src="/static/images/poland_97.jpg"
						alt="Wilderness"
						srcSet="/static/images/poland_97.jpg 1x, /static/images/poland_194.jpg 2x, /static/images/poland_291.jpg 3x"
					/>
					<h4>Poland</h4>
				</a>
			</Link>

			<Link href="/countries/canada">
				<a>
					<img
						className="rounded"
						src="/static/images/canada_97.jpg"
						alt="Lake and mountains above"
						srcSet="/static/images/canada_97.jpg 1x, /static/images/canada_194.jpg 2x, /static/images/canada_291.jpg 3x"
					/>
					<h4>Canada</h4>
				</a>
			</Link>
		</div>
		<style jsx>{`
			aside {
				background-color: var(--asideColor);
				padding-bottom: 2.5em;
				padding-top: 2.5em;

				width: 100%;
				text-align: center;
			}
			.countries-title {
				font-size: 2em;
				color: var(--asideTitle);
				text-shadow: 1.5px 1.3px 4px rgba(0, 0, 0, 0.3);
			}

			@media screen and (min-width: 576px) {
				.countries-title {
					font-size: 1.5em;
				}
			}
			@media screen and (min-width: 48em) {
				.countries-title {
					margin-left: -0.3em;
				}
			}
			@media screen and (min-width: 50.5em) {
				.countries-title {
					margin-left: -0.2em;
				}
			}
			@media screen and (min-width: 52em) {
				.countries-title {
					margin-left: -0.1em;
				}
			}
			@media screen and (min-width: 54.6em) {
				.countries-title {
					margin-left: 0em;
				}
			}
			@media screen and (min-width: 62em) {
				.countries-title {
					font-size: 1.8em;
				}
			}

			.countries-list {
				padding-bottom: 2.5em;
				padding-top: 2.5em;
			}
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
			img: hover {
				box-shadow: 0.2em 0.2em 0.8em 0.0625em rgba(0, 0, 0, 0.3),
					0.3em 0.3em 0.8em 0.0625em rgba(0, 0, 0, 0.5);
			}
		`}</style>
	</aside>
);

export default AsideCountries;
