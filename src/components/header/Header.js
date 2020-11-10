import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	// const themeMap = {
	// 	dark: "light",
	// 	light: "solar",
	// 	solar: "dark",
	// };

	// const theme =
	// 	localStorage.getItem("theme") ||
	// 	((tmp = Object.keys(themeMap)[0]),
	// 	localStorage.setItem("theme", tmp),
	// 	tmp);
	// const bodyClass = document.body.classList;
	// bodyClass.add(theme);

	// function toggleTheme() {
	// 	const current = localStorage.getItem("theme");
	// 	const next = themeMap[current];

	// 	bodyClass.replace(current, next);
	// 	localStorage.setItem("theme", next);
	// }

	// document.getElementById("themeButton").onclick = toggleTheme;

	return (
		<nav className="navbar">
			<ul className="navbar-nav">
				<li class="logo">
					<a
						href="https://sobhanbera.github.io/telebyteweb"
						class="nav-link"
					>
						<span class="link-text logo-text">Telebyte</span>
						{/* <svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fad"
							data-icon="angle-double-right"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
							class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
						>
							<g class="fa-group">
								<path
									fill="currentColor"
									d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
									class="fa-secondary"
								></path>
								<path
									fill="currentColor"
									d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
									class="fa-primary"
								></path>
							</g>
						</svg> */}
					</a>
				</li>
				<li className="nav-item">
					<Link to="/telebyteweb/home" className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="home"
							class="svg-inline--fa fa-home fa-w-18"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
						>
							<path
								fill="currentColor"
								d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
								className="fa-primary"
							></path>
						</svg>
						<span className="link-text">Home</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/telebyteweb/profile" className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="user-circle"
							class="svg-inline--fa fa-user-circle fa-w-16"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 496 512"
						>
							<path
								fill="currentColor"
								d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
								className="fa-primary"
							></path>
						</svg>
						<span className="link-text">Profile</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/telebyteweb/search" className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="search"
							class="svg-inline--fa fa-search fa-w-16"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
								className="fa-primary"
							></path>
						</svg>
						<span className="link-text">Search</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/telebyteweb/chats" className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="comment-dots"
							class="svg-inline--fa fa-comment-dots fa-w-16"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
								className="fa-primary"
							></path>
						</svg>
						<span className="link-text">Chats</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/telebyteweb/about" className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="question"
							class="svg-inline--fa fa-question fa-w-12"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 384 512"
						>
							<path
								fill="currentColor"
								d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z"
								className="fa-primary"
							></path>
						</svg>
						<span className="link-text">About</span>
					</Link>
				</li>
				{/* <li className="nav-item">
					<Link to="/logout" className="nav-link">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="sign-out-alt"
							class="svg-inline--fa fa-sign-out-alt fa-w-16"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								fill="currentColor"
								d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
								className="fa-primary"
							></path>
						</svg>
						<span className="link-text">Logout</span>
					</Link>
				</li> */}
			</ul>
		</nav>
	);
};

export default Header;
