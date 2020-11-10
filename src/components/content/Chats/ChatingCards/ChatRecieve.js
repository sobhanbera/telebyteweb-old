import React from "react";

function ChatRecieve(props) {
	return (
		<div className="chat-recieve">
			<h3 className="chat-username">{props.username}</h3>
			<p className="chat-message">{props.message}</p>
		</div>
	);
}

export default ChatRecieve;
