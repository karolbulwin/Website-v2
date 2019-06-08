import { withRouter } from "next/router";
import PropTypes from "prop-types";

function ActiveLink({ children, router, href }) {
	const checkPath = () => {
		const regex = /[^/]+/;
		let result = router.pathname.match(regex);
		result = result === null ? "/" : `/${result[0]}`;
		return result;
	};

	const style = {
		color: checkPath() === href ? "#fff" : "none"
	};

	const handleClick = e => {
		e.preventDefault();
		router.push(href);
		window.scrollTo(0, 0);
	};

	return (
		<li className="nav-item">
			<a className="nav-link" href={href} onClick={handleClick} style={style}>
				{children}
				{router.pathname === href ? (
					<span className="sr-only">(current)</span>
				) : null}
			</a>
			<style jsx>{""}</style>
		</li>
	);
}

ActiveLink.propTypes = {
	children: PropTypes.string.isRequired,
	router: PropTypes.object.isRequired,
	href: PropTypes.string.isRequired
};

export default withRouter(ActiveLink);
