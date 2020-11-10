import React from "react";

function Info() {
	return (
		<div className="infoSec">
			<h2 className="infoHead">About Developer</h2>
			<div className="devSec">
				<img
					alt="A simple GIF of mine (Sobhan Bera)."
					className="firstimginfo"
					src="https://raw.githubusercontent.com/SobhanBera/SobhanBera/master/open_source_contribution.gif"
				></img>
				<p className="infoPara">
					I am <strong>Sobhan Bera</strong>. I consider myself a smart
					worker and a fast learner.
					<br />
					<br />
					I am also a competitive programmer from one year. I am also
					an Android Developer from two years and a Web Developer from
					a year.
					<br />
					<br />
					<strong>
						I am very experienced in the following technologies:-
					</strong>
					<br />
					C++, Java, HTML, CSS, SASS, Javascript including Frameworks
					like React JS, Android Development, Web Development,
					Frontend Development. And other topics like SEO Basics, Web
					APIs, Modern CSS, Bootstrap.
					<br />
					<br />
					And intermediate in C#, Python and Django Framework. I have
					also tried GameDev for six months, but I realised that
					GameDev is not for me.
					<br />
					<br />
					My future goal is to become a Full-Stack Web/Android
					Developer and to contribute to <strong>
						Open-Source
					</strong>{" "}
					much more than the previous year.
					<br />
					<br />
					Besides, I also enjoy riding cycle, solving Rubix Cube and
					Listening to Music a lot.
				</p>
				<img
					className="secimginfo"
					alt="This is a image of a Person doing programming."
					src="https://raw.githubusercontent.com/SobhanBera/SobhanBera/master/programming_all_day_gif.gif"
				></img>
			</div>
		</div>
	);
}

export default Info;
