import React, { Component } from "react";
import ChatRecieve from "./ChatRecieve";
import ChatSend from "./ChatSend";
import firebase from "../../../../firebase/Firebase";
import Spinner from "../../Loader/Spinner";

class FullChatList extends Component {
	constructor() {
		super();
		this.state = {
			messages: [],
			messagesAvailable: false,
			username: "",
		};
	}
	componentDidMount() {
		const userTimer = setInterval(() => {
			const user = firebase.auth().currentUser;
			if (user) {
				this.setState({
					username: user.displayName,
				});
				// clearInterval(userTimer);
				// return;
			}
			// console.log(this.state.username);
		}, 2000);

		const allMessages = firebase
			.database()
			.ref("Groups")
			.child(`${this.props.groupName}`);
		allMessages.on("value", (snapshot) => {
			const messageListIs = snapshot.val();
			const mess = [];
			for (let id in messageListIs) {
				mess.push(messageListIs[id]);
			}
			if (mess.length > 200) {
				for (let i = 0; i < 5; ++i) {
					mess.shift();
					console.log(mess);
				}
			}
			this.setState({
				messages: mess,
				messagesAvailable: true,
			});
			// console.log(this.state.messages);
			// console.log(this.props.username);
		});
	}

	convertToString(value) {
		return `${value}`.toString();
	}

	render() {
		return (
			<div>
				{this.state.messagesAvailable ? (
					<div className="chat-list-here">
						{this.state.messages.map((chat) => {
							if (chat.username === this.state.username) {
								// console.log("yes");
								return (
									<ChatSend
										username={chat.username}
										message={chat.message}
									/>
								);
							} else {
								// console.log("no");
								return (
									<ChatRecieve
										username={chat.username}
										message={chat.message}
									/>
								);
							}
						})}
					</div>
				) : (
					<div>
						<ChatRecieve
							message="Servers are busy or may be your internet connection is not stable. Please check your internet connectivity and try again later. Thanks :)"
							username="message from db"
						/>

						<Spinner />
					</div>
				)}
			</div>
		);
	}
}

export default FullChatList;
