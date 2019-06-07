import ActivitieLink from "../components/ActivitieLink";

const AsideActivities = () => (
	<aside className="col-xs-12 col-md-2 order-sm-last">
		<ActivitieLink
			activitie="walk"
			imgName="walk"
			imgAlt="Walk."
			title="Walk"
		/>

		<ActivitieLink
			activitie="bike"
			imgName="bike"
			imgAlt="Bike."
			title="Bike"
		/>

		<ActivitieLink
			activitie="swim"
			imgName="swim"
			imgAlt="Swim."
			title="Swim"
		/>

		<ActivitieLink
			activitie="canoe"
			imgName="canoe"
			imgAlt="Canoe."
			title="Canoe"
		/>

		<ActivitieLink
			activitie="paragliders"
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

export default AsideActivities;
