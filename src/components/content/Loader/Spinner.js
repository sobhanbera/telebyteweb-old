import React from "react";

function Spinner(props) {
	return (
		<div
			className="spinner"
			style={{ borderTop: props.borderTopColor }}
		></div>
	);
}

export default Spinner;
