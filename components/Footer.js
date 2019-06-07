const Footer = () => (
	<footer>
		<p>Created by: Karol Bulwin</p>
		<style jsx>{`
			footer {
				background-color: var(--mainColor);
				color: #e6e6e6;
				padding: 1.25em;
				text-align: center;
				border-top: 0.0625em solid #666;
			}
			@media screen and (min-width: 48em) {
				footer {
					border-top: none;
				}
			}
			p {
				margin: 1em 0;
				font-size: 0.9em;
			}
		`}</style>
	</footer>
);

export default Footer;
