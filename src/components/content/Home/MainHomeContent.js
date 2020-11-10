import React, { Component } from "react";
import firebase from "../../../firebase/Firebase";
import { BubbleAnimation } from "../Anim/Bubbles";

class MainHomeContent extends Component {
	constructor() {
		super();
		this.state = {
			fulltime: 10000,
		};
	}

	componentDidMount() {
		const mainHeadingContainer = document.querySelector(
			".main-heading-container"
		);
		const bannerP = document.querySelector(".banner-p");
		const bannerH2 = document.querySelector(".banner-h2");
		const bannerbuttonanext = document.querySelector(".banner-button-a");

		this.imgInterval = setInterval(() => {
			mainHeadingContainer.classList.toggle(
				"main-heading-container-second"
			);
			bannerbuttonanext.classList.toggle("banner-button-a-next");
			bannerP.style.color = "#000000";
			bannerH2.style.color = "#000000";

			setTimeout(() => {
				mainHeadingContainer.classList.toggle(
					"main-heading-container-second"
				);
				bannerbuttonanext.classList.toggle("banner-button-a-next");
				bannerP.style.color = "#ffffff";
				bannerH2.style.color = "#ffffff";
			}, this.state.fulltime / 2);
		}, this.state.fulltime);
	}

	componentWillUnmount() {
		clearInterval(this.imgInterval);
	}

	logoutUser = () => {
		firebase.auth().signOut();
		window.location.reload(false);
	};

	render() {
		return (
			<div className="main-heading-container">
				<div className="heading-con main-context">
					<nav className="main-nav">
						<div className="main-logo">
							<h2>
								<a href="/">
									<h1>T</h1>elebyte
								</a>
							</h2>
						</div>

						<div className="main-menu">
							<ul>
								<li>
									<a
										className="main-a"
										href="/telebyteweb/home"
									>
										Home
									</a>
								</li>
								<li>
									<a
										className="main-a"
										href="/telebyteweb/chats"
									>
										Chats
									</a>
								</li>
								<li>
									<a
										className="main-a"
										href=""
										onClick={this.logoutUser}
									>
										Logout
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<header>
						<div className="banner-area">
							<div className="single-banner">
								{/* <div className="banner-img">
									<img src={background} alt="" />
								</div> */}
								<div className="banner-text">
									<h2 className="banner-h2">
										Chat With Anyone
									</h2>
									<p className="banner-p">
										Chat with anybody is the server may be
										publicly or privately. At anytime from
										anywhere you like.
									</p>
									<p className="banner-button">
										<a
											href="/telebyteweb/chats"
											className="banner-button-a"
										>
											Start Chating
										</a>
									</p>
								</div>
							</div>
						</div>
					</header>
				</div>
				<BubbleAnimation />
			</div>
		);
	}
}

export default MainHomeContent;
