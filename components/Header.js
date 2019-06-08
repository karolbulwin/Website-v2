import { useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import ActiveLink from "../components/ActiveLink";

const Header = () => {
	useEffect(() => {
		function addOpacity() {
			if (document.documentElement.scrollTop > 17) {
				document.querySelector("nav").classList.add("nav-opacity");
				document.querySelector("nav").classList.remove("py-3");
			}
		}
		function removeOpacity() {
			document.querySelector("nav").classList.remove("nav-opacity");
			document.querySelector("nav").classList.add("py-3");
		}

		function listenToScroll() {
			if (document.documentElement.scrollTop > 17) {
				addOpacity();
			} else {
				removeOpacity();
			}
		}

		window.addEventListener("scroll", listenToScroll);
		document.querySelector("nav").addEventListener("mouseover", removeOpacity);
		document.querySelector("nav").addEventListener("mouseout", addOpacity);
		document.querySelector("nav").addEventListener("touchstart", removeOpacity);

		return () => {
			window.removeEventListener("scroll", listenToScroll);
			document
				.querySelector("nav")
				.removeEventListener("mouseover", removeOpacity);
			document.querySelector("nav").removeEventListener("mouseout", addOpacity);
			document
				.querySelector("nav")
				.removeEventListener("touchstart", removeOpacity);
		};
	});
	return (
		<header>
			<nav className="navbar fixed-top navbar-expand-lg navbar-dark py-3">
				<Link href="/">
					<a className="navbar-brands">
						<img
							src="/static/images/site-logo.svg"
							className="img-fluid d-inline-block align-top"
							alt="Somewhere in the woods"
						/>
					</a>
				</Link>
				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse mr-3" id="collapsibleNavId">
					<ul className="navbar-nav ml-auto mt-lg-0 flex-shrink-0 ">
						<ActiveLink href="/">Home</ActiveLink>

						<ActiveLink href="/countries">Countries</ActiveLink>

						<ActiveLink href="/activities">Activities</ActiveLink>

						<ActiveLink href="/contact">Contact us</ActiveLink>
					</ul>
				</div>
			</nav>
			<style jsx>{`
				.navbar {
					background-color: var(--mainColor);
					opacity: 1;
					transition-timing-function: ease-in;
					transition-duration: 0.5s;
					transition-delay: 50ms;
					transform-origin: top;
				}

				.navbar-brands img {
					max-width: 15em;
					width: 100%;
				}

				@media screen and (max-width: 25em) {
					.navbar > a {
						width: 70%;
					}
				}

				.nav-opacity {
					opacity: 0.9;
				}
			`}</style>
		</header>
	);
};

export default Header;
