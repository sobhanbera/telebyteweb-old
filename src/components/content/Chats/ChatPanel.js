import React, { Component } from "react";
import firebase from "../../../firebase/Firebase";
import ChatDetails from "./ChatDetails";
import ChatsAvailableCard from "./ChatsAvailableCard";

class ChatPanel extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="main-chat-area">
				<div className="chat-area">
					<div className="chats-name">
						<div className="chat-username-here">
							<h2>
								{this.props.username
									? this.props.username
									: "username not found"}
							</h2>
						</div>
						<div className="chats-available">
							<ChatsAvailableCard
								groupName="Global Chats"
								created="sobhanbera"
								image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7rhdg6r0EWNvId-4A_ZpGF5txKctCJJHSPw&usqp=CAU"
							/>
						</div>
					</div>
					{/* <div className="chats-details">
						<div className="chat-available-name"></div>
						<div className="real-chats"></div>
						<div className="type-message">
							<input
								className="message-input"
								type="text"
								name="message"
								autoComplete="off"
								placeholder="Type a message"
							/>
							<div className="send-btn">Send</div>
						</div>
					</div> */}
					<ChatDetails
						username={this.props.username}
						groupName="Global Chats"
						creator="sobhanbera"
						image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7rhdg6r0EWNvId-4A_ZpGF5txKctCJJHSPw&usqp=CAU"
					/>
				</div>
			</div>
		);
	}
}

export default ChatPanel;
