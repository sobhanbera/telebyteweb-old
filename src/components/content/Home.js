import React, { Component, useEffect, useState } from "react";
import Authentication from "./Authentication/Authentication";
import Footer from "./About/Footer";
import firebase from "../../firebase/Firebase";
import MainHomeContent from "./Home/MainHomeContent";
import Heading from "./About/Heading";

function Home() {
	const [user, setUser] = useState("");

	const logOut = () => {
		firebase.auth().signOut();
		window.location.reload(false);
	};

	const reloadFuntion = () => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser("");
			}
		});
	};

	useEffect(() => {
		reloadFuntion();
	}, []);

	return (
		<div className={`home-tab`}>
			{user ? (
				""
			) : (
				<Heading
					classCustomName="home-heading"
					customText="Telebyte"
					anchor="true"
					linkToSend="https://github.com/SobhanBera"
				/>
			)}

			{/* <button onClick={logOut}>
				This Is Temparory Logout Button Don't MisUse This Component
			</button> */}

			{user ? (
				<MainHomeContent />
			) : (
				<Authentication reloadFuntion={reloadFuntion} />
			)}

			<Footer />
		</div>
	);
}

export default Home;
