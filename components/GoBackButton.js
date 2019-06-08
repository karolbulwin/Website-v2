import PropTypes from "prop-types";
import { withRouter } from "next/router";

const GoBackButton = ({ router }) => {
	const handleClick = () => {
		router.back();
	};
	return (
		<button
			onClick={handleClick}
			type="button"
			className="btn btn-success btn-back"
		>
			Go back
			<style jsx>{`
				.btn {
					box-shadow: 0em 0em 0.1125em 0.025em rgba(0, 0, 0, 0.3);
					background-color: #006400;
					border-color: #006400;
				}
				button {
					z-index: 1;
					font-size: inherit;
					font-family: inherit;
					padding: 0.5em 1em;
					outline: none;
				}

				button:hover {
					cursor: pointer;
					animation: jelly 0.5s;
					background-color: #005400;
				}

				@keyframes jelly {
					0%,
					100% {
						transform: scale(1, 1);
					}
					25% {
						transform: scale(0.9, 1.1);
					}
					50% {
						transform: scale(1.1, 0.9);
					}
					75% {
						transform: scale(0.95, 1.05);
					}
				}
			`}</style>
		</button>
	);
};

GoBackButton.propTypes = {
	router: PropTypes.object.isRequired
};

export default withRouter(GoBackButton);
