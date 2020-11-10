import React, { Component } from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import firebase from "../../../firebase/Firebase";
import zxcvbn from "zxcvbn";
import Spinner from "../Loader/Spinner";

class Register extends Component {
	emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	constructor() {
		super();
		this.state = {
			fullname: "",
			username: "",
			email: "",
			password: "",
			showLoading: false,
		};
		this.registerUser = this.registerUser.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	registerUser() {
		let dataIsValid = true;

		if (
			this.state.email === "" ||
			this.state.password === "" ||
			this.state.fullname === "" ||
			this.state.username === ""
		) {
			dataIsValid = false;
			alert("All Fields Are Required!");
			return;
		}

		if (
			this.state.username.length > 15 ||
			this.state.fullname.length > 15
		) {
			alert("username and fullname may contain atmost 15 characters.");
			dataIsValid = false;
			return;
		}

		let username = this.state.username;
		for (let i = 0; i < username; ++i) {
			if (
				(username.charAt(i) >= 65 && username.charAt(i) <= 90) ||
				(username.charAt(i) >= 97 && username.charAt(i) <= 122) ||
				username.charAt(i) === "_" ||
				username.charAt(i) === "."
			) {
				continue;
			} else {
				alert("username should only contain ['.', '_', a-z, A-Z].");
				dataIsValid = false;
				return;
			}
		}

		if (!this.state.email.match(this.emailValidator)) {
			dataIsValid = false;
			alert("Please enter a valid email address.");
			return;
		}

		const testedResult = zxcvbn(this.state.password);
		if (testedResult.score <= 3) {
			alert("Please enter a strong password.");
			dataIsValid = false;
			return;
		}

		if (dataIsValid) {
			//start loading...
			this.setState({
				showLoading: true,
			});
			//Register User...
			//checking if user is already present in database...
			firebase
				.firestore()
				.collection("Users")
				.where("email", "==", this.state.email)
				.get()
				.then((response) => {
					if (response.empty) {
						//no such email found...
						firebase
							.firestore()
							.collection("Users")
							.where("username", "==", this.state.username)
							.get()
							.then((response) => {
								if (response.empty) {
									//register the user finally...
									console.log("User Registered Successfully");
									firebase
										.auth()
										.createUserWithEmailAndPassword(
											this.state.email,
											this.state.password
										)
										.then((response) => {
											//collect user data...
											//and also adding data here...
											const db = firebase.firestore();
											db.settings({
												timestampsInSnapshots: true,
											});
											db.collection("Users").add({
												email: this.state.email,
												fullname: this.state.fullname,
												username: this.state.username,
												profileImg: "",
												coverImg: "",
												phoneNo: "",
												status: "",
												public: "",
												info: "",
												social: {
													github: "",
													linkedin: "",
													facebook: "",
													instagram: "",
												},
											});
											firebase
												.auth()
												.currentUser.updateProfile({
													displayName: this.state
														.username,
												});
											this.setState({
												fullname: "",
												username: "",
												email: "",
												password: "",
												showLoading: false,
											});
										})
										.catch((error) => {
											var errorCode = error.code;
											var errorMsg = error.message;
											console.log(errorCode, errorMsg);
											this.setState({
												showLoading: false,
											});
										});
								} else {
									//same username found...
									alert(
										"Username not available! Username is already taken."
									);
									this.setState({
										showLoading: false,
									});
								}
							});
					} else {
						alert(
							"Another user with this email is found! Please try again."
						);
						this.setState({
							showLoading: false,
						});
					}
				});
		}
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}

	render() {
		return (
			<div className="register">
				<h3 className="heading-auth">Sign Up</h3>
				<input
					name="fullname"
					onChange={this.handleChange}
					type="text"
					autoComplete="off"
					placeholder="Full Name*"
					className="login-email-input login-input"
				/>
				<input
					name="username"
					onChange={this.handleChange}
					type="text"
					autoComplete="off"
					placeholder="Username*"
					className="login-pass-input login-input"
				/>
				<input
					name="email"
					onChange={this.handleChange}
					type="email"
					autoComplete="off"
					placeholder="Email*"
					className="login-email-input login-input"
				/>
				<br />
				<input
					name="password"
					onChange={this.handleChange}
					type="password"
					autoComplete="off"
					placeholder="Password*"
					className="login-pass-input login-input"
				/>
				<br />
				<PasswordStrengthMeter password={this.state.password} />
				<button onClick={this.registerUser} className="register-btn">
					Sign Up
				</button>
				{this.state.showLoading ? (
					<Spinner borderTopColor="10px solid #4040ef" />
				) : (
					""
				)}
			</div>
		);
	}
}

export default Register;
