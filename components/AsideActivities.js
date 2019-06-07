import Link from "next/link";

const AsideActivities = () => (
	<aside className="col-xs-12 col-md-2 order-sm-last">
		<Link href="/activities/walk">
			<a>
				<img
					className="rounded"
					src="/static/images/walk_70.jpg"
					alt="Walk"
					srcSet="/static/images/walk_70.jpg 1x, /static/images/walk_140.jpg 2x, /static/images/walk_210.jpg 3x"
				/>
				<h6>Walk</h6>
			</a>
		</Link>

		<Link href="/activities/bike">
			<a>
				<img
					className="rounded"
					src="/static/images/bike_70.jpg"
					alt="Bike"
					srcSet="/static/images/bike_70.jpg 1x, /static/images/bike_140.jpg 2x, /static/images/bike_210.jpg 3x"
				/>
				<h6>Bike</h6>
			</a>
		</Link>

		<Link href="/activities/swim">
			<a>
				<img
					className="rounded"
					src="/static/images/swim_70.jpg"
					alt="Swim"
					srcSet="/static/images/swim_70.jpg 1x, /static/images/swim_140.jpg 2x, /static/images/swim_210.jpg 3x"
				/>
				<h6>Swim</h6>
			</a>
		</Link>

		<Link href="/activities/canoe">
			<a>
				<img
					className="rounded"
					src="/static/images/canoe_70.jpg"
					alt="Canoe"
					srcSet="/static/images/canoe_70.jpg 1x, /static/images/canoe_140.jpg 2x, /static/images/canoe_210.jpg 3x"
				/>
				<h6>Canoe</h6>
			</a>
		</Link>

		<Link href="/activities/paragliders">
			<a>
				<img
					className="rounded"
					src="/static/images/paragliders_70.jpg"
					alt="Paragliders"
					srcSet="/static/images/paragliders_70.jpg 1x, /static/images/paragliders_140.jpg 2x, /static/images/paragliders_210.jpg 3x"
				/>
				<h6>Paragliders</h6>
			</a>
		</Link>

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
