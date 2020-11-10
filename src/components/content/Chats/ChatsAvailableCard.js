import React from "react";

function ChatsAvailableCard(props) {
	return (
		<div className="chat-avail-card">
			<div className="chat-avail-img-holder">
				<img src={props.image} className="chat-avail-img" />
			</div>
			<div className="chat-avail-detail-holder">
				<h3 className="chat-avail-h">{props.groupName}</h3>
				<p className="chat-avail-p">{props.created}</p>
			</div>
		</div>
	);
}

export default ChatsAvailableCard;
