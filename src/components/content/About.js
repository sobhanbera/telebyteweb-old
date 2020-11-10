import React from "react";
import Heading from "./About/Heading";
import Cards from "./About/Cards";
import Info from "./About/Information";
import Footer from "./About/Footer";

function About() {
	document.title = "About TeleByte";
	return (
		<div className="centered">
			<Heading customText="Telebyte Web About Section" anchor="false" />
			<Cards />
			<Info />
			<Footer />
		</div>
	);
}

export default About;
