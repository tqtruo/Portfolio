import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Theodore Truong</h2>
						<img
							src="ProfilePic.png"
							alt="avatar"
							style={{ height: "250px" }}
						/>
						<p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
							A Full stack software engineer experienced in developing front and
							back-end web applications. A detail-oriented individual that can
							effectively communicate and work well in a team-based environment
							as well as independently. Eager to step into the industry and
							apply what I've learned and acquire more experience.{" "}
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />

						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent
										style={{ fontSize: "30px", fontFamily: "Anton" }}
									>
										<i className="fa fa-phone-square" aria-hidden="true" />1
										(224) 616-7970
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{ fontSize: "30px", fontFamily: "Anton" }}
									>
										<i
											className="fa fa-envelope "
											style={{ fontSize: "56px" }}
											aria-hidden="true"
										/>
										tqtruo@gmail.com
									</ListItemContent>
								</ListItem>

								<ListItem>
									<ListItemContent
										style={{ fontSize: "30px", fontFamily: "Anton" }}
									>
										<i className="fa fa-linkedin-square" aria-hidden="true" />
										linkedin.com/in/theodoretruong
									</ListItemContent>
								</ListItem>

								{/*   <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-fax" aria-hidden="true"/>
                  (123) 456-7890
                  </ListItemContent>
                </ListItem> */}

								{/* <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem> */}
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
