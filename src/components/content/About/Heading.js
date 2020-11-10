import React from "react";

function Heading(props) {
	return (
		<header class={`clear ${props.classCustomName}`}>
			{props.anchor === "true" ? (
				<h1 class="site-title">
					<a className="ahrefsimple" href={props.linkToSend}>
						{props.customText}
					</a>
				</h1>
			) : (
				<h1 class="site-title">{props.customText}</h1>
			)}
		</header>
	);
}

export default Heading;
