import React, { Component } from "react";
import firebase from "../../../firebase/Firebase";
import Spinner from "../Loader/Spinner";

class Login extends Component {
	emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			showProgress: false,
		};
		this.loginUser = this.loginUser.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	loginUser() {
		let dataIsValid = true;
		if (this.state.email === "") {
			dataIsValid = false;
			alert("Email is required. Please Provide All Fields.");
		} else if (this.state.password === "") {
			dataIsValid = false;
			alert("Password is required. Please Provide All Fields.");
		}

		if (!this.state.email.match(this.emailValidator)) {
			dataIsValid = false;
			alert("Please enter a valid email address.");
		}

		if (dataIsValid) {
			this.setState({
				showProgress: true,
			});
			firebase
				.firestore()
				.collection("Users")
				.where("email", "==", this.state.email)
				.get()
				.then((response) => {
					if (!response.empty) {
						//login this user since credentials found.
						firebase
							.auth()
							.signInWithEmailAndPassword(
								this.state.email,
								this.state.password
							)
							.then((response) => {
								//RESPONSE OBTAINED
								this.setState({
									showProgress: true,
								});
								this.props.reloadFuntion();
							})
							.catch((error) => {
								if (error.code === "auth/wrong-password") {
									alert(
										"Entered Password is wrong. Please input correct password."
									);
								}
								this.setState({
									showProgress: false,
								});
							});
					} else {
						this.setState({
							showProgress: false,
						});
						alert(
							"User Not Found. Email doesn't exist in the database. Please Try Again"
						);
					}
				});
		}
	}

	handleChange(event) {
		if (event.target.name === "email") {
			this.setState({
				email: `${event.target.value}`.trim(),
			});
			console.log(this.state.email);
		}
		if (event.target.name === "password") {
			this.setState({
				password: event.target.value,
			});
			console.log(this.state.password);
		}
	}

	render() {
		return (
			<div className="login">
				<h3 className="heading-auth">Sign In</h3>
				<input
					onChange={this.handleChange}
					type="email"
					name="email"
					placeholder="Email*"
					className="login-email-input login-input"
				/>
				<input
					onChange={this.handleChange}
					type="password"
					name="password"
					placeholder="Password*"
					className="login-pass-input login-input"
				/>
				<br />
				<button
					onClick={this.loginUser}
					name="loginBtn"
					className="login-btn"
				>
					Sign In
				</button>
				<h2>Forgot Password?</h2>

				{this.state.showProgress ? (
					<Spinner borderTopColor="10px solid #4040ef" />
				) : (
					""
				)}
			</div>
		);
	}
}

export default Login;
