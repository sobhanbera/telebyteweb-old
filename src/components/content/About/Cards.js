import React, { useEffect, useState } from "react";
import firebase from "../../../firebase/Firebase";
import Spinner from "../Loader/Spinner";

function Cards() {
	const emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	const [email, setEmail] = useState("");
	const [topic, setTopic] = useState("");
	const [feature, setFeature] = useState("");
	const [featureLength, setFeatureLength] = useState(0);
	const [user, setUser] = useState("");
	const [loading, setLoding] = useState(false);

	const reloadFuntion = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser("");
			}
		});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === "email") {
			setEmail(value);
		} else if (name === "feature") {
			setFeature(value);
			setFeatureLength(value.length);
		} else if (name === "topic") {
			setTopic(value);
		}
	};

	useEffect(() => {
		reloadFuntion();
	}, []);

	const addFeatureRequest = () => {
		reloadFuntion();
		if (user) {
			setLoding(true);
			if (email === "" || feature === "") {
				setLoding(false);
				alert(
					"If you want to recommend any feature please fill all fields."
				);
				return;
			}

			if (!email.match(emailValidator)) {
				setLoding(false);
				alert("Please enter a valid email address.");
				return;
			}

			if (featureLength < 200) {
				setLoding(false);
				alert("Feature must contain 200-350 characters.");
				return;
			}

			let spaces = 0;
			let spacesIndex = [];
			for (let i = 0; i < featureLength; ++i) {
				if (feature.charAt(i) === " ") {
					spaces++;
					spacesIndex.push(i);
				}
			}

			if (spaces < 32) {
				setLoding(false);
				alert(
					"Please enter a feature which contains atleast 33 words."
				);
				return;
			}

			for (let i = 1; i < spaces; ++i) {
				if (spacesIndex[i] === spacesIndex[i - 1] + 1) {
					setLoding(false);
					alert(
						"Extra spaces between words are not allowed. Please Try Again!"
					);
					return;
				}
			}

			const db = firebase.firestore();

			db.settings({
				timestampsInSnapshots: true,
			});

			//adding feature request
			db.collection("FeatureReq").add({
				email: email,
				topic: topic,
				feature: feature,
			});
			setEmail("");
			setTopic("");
			setFeature("");
			setLoding(false);
			setFeatureLength(0);
		} else {
			alert("You should be logged in to provide a feature request.");
		}
	};

	return (
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="card card-1">
						<h3>Current Features</h3>
						<p>
							You can chat with anybody in the server in only in a
							public group available. This version does not
							contains any custom room creation or private room
							creation.{" "}
							<p style={{ color: "#f44" }}>
								Note: Please don't refresh any page for better
								expreience since exact routing is not available
								yet.
							</p>
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card card-2">
						<h3>Features Details</h3>
						<p>
							This feature includes Material Design, Awesome UI/UX
							feature, Optimized and Efficient Workflow, Chating
							in public rooms, profile options, account creation,
							etc. You can find the source code here{" "}
							<a
								className="ahref"
								href="https://github.com/SobhanBera/telebyteweb"
								target="_blank"
							>
								GitHub Repo.
							</a>
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card card-3">
						<h3>Upcoming Updates</h3>
						<p>
							Update on forgot password layout and feature, Dark
							Theme as you all may like it, logging out option ,
							user searching, email verification, phone login,
							google login. And Many more updated Comming Soon.
							Stay tuned with me in{" "}
							<a
								className="ahref"
								href="https://github.com/SobhanBera/telebyteweb"
								target="_blank"
							>
								GitHub Repo
							</a>{" "}
							of this project.
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card card-3">
						<h3>Recommend Feature</h3>
						<div class="buttonSubmit" onClick={addFeatureRequest}>
							<span>submit</span>
						</div>
						<input
							onChange={handleChange}
							className="recommend-email"
							type="Email"
							value={email}
							name="email"
							placeholder="Enter your email*"
							autoComplete="off"
						/>
						<input
							onChange={handleChange}
							className="recommend-email"
							type="text"
							value={topic}
							name="topic"
							placeholder="Feature Topic*"
							autoComplete="off"
						/>
						<textarea
							onChange={handleChange}
							className="recommend"
							type="text"
							name="feature"
							value={feature}
							placeholder="Enter Feature In Detail*"
							maxLength="350"
							minLength="200"
							autoComplete="off"
						/>
						<span
							className={`feature-span ${
								featureLength >= 200 ? "green-span" : "red-span"
							} ${
								featureLength > 224 && featureLength < 250
									? "green-span-medium"
									: featureLength > 249 && featureLength < 275
									? "green-span-medium-bold"
									: featureLength > 274 && featureLength < 300
									? "green-span-medium-extra"
									: featureLength > 299 && featureLength < 325
									? "green-span-bold"
									: featureLength > 324 && featureLength < 350
									? "green-span-mega-bold"
									: featureLength === 350
									? "blue-span"
									: ""
							}`}
						>
							{featureLength}
						</span>
						<span className="feature-span">/350</span>
					</div>
				</div>
			</div>
			{loading ? <Spinner borderTopColor="10px solid #4040ef" /> : ""}
		</div>
	);
}

export default Cards;
