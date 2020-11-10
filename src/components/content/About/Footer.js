import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-left">
				<h1 className="footerHead">telebyte</h1>
				<p>
					Welcome to Telebyte you can get the free source code of this
					website here -{" "}
					<a className="ahref" href="https://github.com/SobhanBera">
						GitHub Repo
					</a>
					. You can contribute or use the code for your projects.
					Explore the website chat with other in public groups. More
					Updates Comming Soon. Thanks For Visiting.
				</p>
				{/* <div className="social">
					<a href="#">
						<i>
							<img src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png"></img>
						</i>
					</a>
				</div> */}
			</div>
			<ul className="footer-right">
				<li className="developer">
					<h2>Social</h2>
					<ul className="box">
						<li>
							<a href="https://www.instagram.com/sobhanbera_/">
								Instagram
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/sobhan.b.90/">
								Facebook
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/sobhanbera/">
								Linkedin
							</a>
						</li>
						<li>
							<a href="https://twitter.com/BeraSobhan">Twitter</a>
						</li>
						<li>
							<a href="https://github.com/SobhanBera">GitHub</a>
						</li>
					</ul>
				</li>
				<li className="developer">
					<h2>Developer</h2>
					<ul className="box">
						<li>
							<a href="https://github.com/SobhanBera">GitHub</a>
						</li>
						<li>
							<a href="https://github.com/SobhanBera">Project</a>
						</li>
						<li>
							<a href="mailto:sobhanbera258@gmail.com">E-Mail</a>
						</li>
						<li>
							<a href="tel:+917400631560">Mobile</a>
						</li>
					</ul>
				</li>
				<li className="competitive">
					<h2>Competitive</h2>
					<ul className="box">
						<li>
							<a href="https://www.codechef.com/users/sobhanbera">
								CodeChef
							</a>
						</li>
						<li>
							<a href="https://www.hackerearth.com/@Sobhan_Bera">
								HackerEarth
							</a>
						</li>
						<li>
							<a href="https://codeforces.com/profile/sobhanbera">
								CodeForces
							</a>
						</li>
						<li>
							<a href="https://www.hackerrank.com/lastwarrior436">
								HackerRank
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<div className="footer-bottom">
				<p>All Rights reserved by &copy;Telebyte 2020.</p>
			</div>
		</footer>
	);
}

export default Footer;
