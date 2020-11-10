import React, { Component } from "react";
import ChatPanel from "./Chats/ChatPanel";
import firebase from "../../firebase/Firebase";
import Footer from "./About/Footer";

class Chats extends Component {
	constructor() {
		super();
		this.state = {
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
				clearInterval(userTimer);
				// return;
			}
			// console.log(user);
		}, 1000);
	}

	render() {
		return (
			<div>
				<ChatPanel username={this.state.username} />
				<Footer />
			</div>
		);
	}
}

export default Chats;
