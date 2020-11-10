import React from "react";

function ChatSend(props) {
	return (
		<div className="chat-send">
			<h3 className="chat-username">{props.username}</h3>
			<p className="chat-message">{props.message}</p>
		</div>
	);
}

export default ChatSend;
