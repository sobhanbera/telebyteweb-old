import React, { useEffect, useState } from "react";
import error404gif from "../../../media/error404.gif";
import Footer from "../About/Footer";
import "./Error.css";

function PageNotFound(props) {
	const [secRemain, setSecRemain] = useState(10);

	useEffect(() => {
		const hello = () => {
			setTimeout(() => {
				if (secRemain > 0) {
					setSecRemain(secRemain - 1);
				} else {
					document.location.replace(
						"https://sobhanbera.github.io/telebyteweb"
					);
				}
			}, 1000);
		};
		hello();
	}, [secRemain]);

	return (
		<div>
			<div className="pagenotfound">
				<img src={error404gif} alt="Error 404 Page Not Found." />
				<h1>Error 404 Page Not Found.</h1>
				<br />
				<p>
					Redirecting to{" "}
					<a href="https://sobhanbera.github.io/telebyteweb">
						https://sobhanbera.github.io/telebyteweb
					</a>{" "}
					in <span>{secRemain}</span> seconds.
				</p>
			</div>
			<Footer />
		</div>
	);
}

export default PageNotFound;
