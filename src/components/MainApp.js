import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./header/Header";

import "./Main.css";
import AboutSection from "./content/About";
import Home from "./content/Home";
import Search from "./content/Search";
import Profile from "./content/Profile";
import ChatTab from "./content/Chats";

class MainApp extends Component {
	render() {
		return (
			<div>
				<Header />
				<main className="mainContent">
					<Route
						exact
						path="/telebyteweb/about"
						component={AboutSection}
					/>

					<Route
						exact
						path="/telebyteweb/search"
						component={Search}
					/>

					<Route
						exact
						path="/telebyteweb/profile"
						component={Profile}
					/>

					<Route
						exact
						path="/telebyteweb/chats"
						component={ChatTab}
					/>

					<Route exact path="/telebyteweb/home" component={Home} />

					<Route exact path="/telebyteweb" component={Home} />

					<Route exact path="/" component={Home} />
				</main>
			</div>
		);
	}
}

export default MainApp;
