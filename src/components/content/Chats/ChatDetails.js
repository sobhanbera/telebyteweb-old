import React, { Component, useEffect, useState } from "react";
import firebase from "../../../firebase/Firebase";
import FullChatList from "./ChatingCards/FullChatList";

class ChatDetails extends Component {
	constructor() {
		super();
		this.state = {
			message: "",
			username: "",
			chatList: {},
		};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		const userTimer = setInterval(() => {
			const user = firebase.auth().currentUser;
			if (user) {
				this.setState({
					username: user.displayName,
				});
				clearInterval(userTimer);
				// return;
			}
			// console.log(user);
		}, 2000);
	}

	handleChange = (event) => {
		this.setState({
			message: event.target.value,
		});
		console.log(this.state.message);
	};

	handleSendMessage = () => {
		if (this.state.message.length <= 0) {
			return;
		}

		if (this.state.message.length > 100) {
			alert("message length should be less than 101 characters.");
		} else {
			firebase
				.database()
				.ref("Groups")
				.child(`${this.props.groupName}`)
				.push({
					message: this.state.message,
					username: this.state.username,
				});
			console.table(
				`'${this.state.message}' message is sent and will be update in sometime. (this message is only shown in computer users)`
			);
			this.setState({
				message: "",
			});
		}
	};

	render() {
		return (
			<div className="chats-details">
				<div className="chats-available-name">
					<div className="chats-avail-img-holder">
						<img
							src={this.props.image}
							className="chats-avail-img"
						/>
					</div>
					<div className="chats-avail-detail-holder">
						<h3 className="chats-avail-h">
							{this.props.groupName}
						</h3>
						<p className="chats-avail-p">{this.props.creator}</p>
					</div>
				</div>
				<div className="real-chats">
					<FullChatList
						// username={this.state.username}
						groupName={`${this.props.groupName}`}
					/>
				</div>
				<div className="type-message">
					<input
						onChange={this.handleChange}
						value={this.state.message}
						className="message-input"
						type="text"
						name="message"
						autoComplete="off"
						placeholder="Type a message"
						maxLength="100"
					/>
					<div className="send-btn" onClick={this.handleSendMessage}>
						Send
					</div>
				</div>
			</div>
		);
	}
}

export default ChatDetails;
