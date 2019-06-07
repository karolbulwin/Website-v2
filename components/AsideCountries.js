import CountryLink from "./CountryLink";

const AsideCountries = () => (
	<aside className="col-sm-3 col-md-2 order-sm-first">
		<h4>Countries</h4>

		<div>
			<CountryLink
				country="peru"
				imgName="peru"
				imgAlt="Machupicchu."
				title="Peru"
			/>

			<CountryLink
				country="nepal"
				imgName="nepal"
				imgAlt="Himalaya."
				title="Nepal"
			/>

			<CountryLink
				country="thailand"
				imgName="thailand"
				imgAlt="Lonely mountain in the sea."
				title="Thailand"
			/>

			<CountryLink
				country="poland"
				imgName="poland"
				imgAlt="Wilderness."
				title="Poland"
			/>

			<CountryLink
				country="canada"
				imgName="canada"
				imgAlt="Lake and mountains above."
				title="Canada"
			/>
		</div>
		<style jsx>{`
			aside {
				background-color: var(--asideColor);
				padding-bottom: 2.5em;
				padding-top: 2.5em;
				width: 100%;
				text-align: center;
			}
			h4 {
				font-size: 2em;
				color: var(--asideTitle);
				text-shadow: 1.5px 1.3px 4px rgba(0, 0, 0, 0.3);
			}

			@media screen and (min-width: 576px) {
				h4 {
					font-size: 1.5em;
				}
			}
			@media screen and (min-width: 48em) {
				h4 {
					margin-left: -0.3em;
				}
			}
			@media screen and (min-width: 50.5em) {
				h4 {
					margin-left: -0.2em;
				}
			}
			@media screen and (min-width: 52em) {
				h4 {
					margin-left: -0.1em;
				}
			}
			@media screen and (min-width: 54.6em) {
				h4 {
					margin-left: 0em;
				}
			}
			@media screen and (min-width: 62em) {
				h4 {
					font-size: 1.8em;
				}
			}

			div {
				padding-bottom: 2.5em;
				padding-top: 2.5em;
			}
		`}</style>
	</aside>
);

export default AsideCountries;
