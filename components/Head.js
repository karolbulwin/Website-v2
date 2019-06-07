import PropTypes from "prop-types";
import Head from "next/head";

const MyHead = ({ title }) => (
	<Head>
		<title>{title}</title>
		<meta name="theme-color" content="#333" />
		<meta name="description" content="Example of a website" />
		<meta name="keywords" content="Website, example" />
		<meta name="author" content="Karol Bulwin" />
		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		<link rel="shortcut icon" href="/static/favicon.ico" />
		<link rel="icon" sizes="16x16 32x32 64x64" href="/static/favicon.ico" />
		<script
			src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
			integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
			crossOrigin="anonymous"
		/>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
			integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
			crossOrigin="anonymous"
		/>
		<script
			src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
			integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
			crossOrigin="anonymous"
		/>
	</Head>
);

MyHead.propTypes = {
	title: PropTypes.string.isRequired
};

export default MyHead;
