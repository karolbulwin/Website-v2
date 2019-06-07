import ActivityLink from "../components/ActivityLink";

const Asideactivitys = () => (
	<aside className="col-xs-12 col-md-2 order-sm-last">
		<ActivityLink activity="walk" imgName="walk" imgAlt="Walk." title="Walk" />

		<ActivityLink activity="bike" imgName="bike" imgAlt="Bike." title="Bike" />

		<ActivityLink activity="swim" imgName="swim" imgAlt="Swim." title="Swim" />

		<ActivityLink
			activity="canoe"
			imgName="canoe"
			imgAlt="Canoe."
			title="Canoe"
		/>

		<ActivityLink
			activity="paragliders"
			imgName="paragliders"
			imgAlt="Paragliders."
			title="Paragliders"
		/>

		<style jsx>{`
			aside {
				background-color: var(--mainColor);
				padding-bottom: 2.5em;
				padding-top: 2.5em;
				width: 100%;
				text-align: center;
			}
		`}</style>
	</aside>
);

export default Asideactivitys;
