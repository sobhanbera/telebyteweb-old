import React from "react";
import Login from "./Login";
import Register from "./Register";

function Authentication(props) {
	return (
		<div class="wrapper fadeInDown">
			<div className="formContent">
				<Login reloadFuntion={props.reloadFuntion} />
				<Register />
			</div>
		</div>
	);
}

export default Authentication;
