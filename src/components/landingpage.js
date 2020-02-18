import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
	render() {
		return (
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img src="ProfilePic.png" alt="avatar" className="avatar-img" />

						<div className="banner-text">
							<h1>Full Stack Software Engineer</h1>

							<hr />

							<p>
								{" "}
								NodeJS | JavaScript | React | Redux | Express | HTML/CSS |
								PostgreSQL{" "}
							</p>

							<div className="social-links">
								{/* LinkedIn */}
								<a
									href="https://www.linkedin.com/in/theodoretruong"
									rel="noopener noreferrer"
									target="_blank"
								>
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>

								{/* Github */}
								<a
									href="https://github.com/tqtruo"
									rel="noopener noreferrer"
									target="_blank"
								>
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>

								{/* Freecodecamp */}
								{/*  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a> */}

								{/* Youtube */}
								{/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a> */}
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Landing;
