import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
// import Skills from './skills';

class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					{/* <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://tinyurl.com/ttprofilepic"
                alt="avatar"
                style={{height: '250px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Theodore Truong</h2>
            <h4 style={{color: 'grey'}}>Full Stack Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>A Full stack software engineer experienced in developing front and back-end web applications. A detail-oriented individual that can effectively communicate and work well in a team-based environment as well as independently. Eager to step into the industry and apply what I've learned and acquire more experience.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Morton Grove, IL, 60053</p>
            <h5>Phone</h5>
            <p>1 (224) 616-7970</p>
            <h5>Email</h5>
            <p>tqtruo@gmail.com</p> */}
					{/* <h5>Web</h5>
            <p>mywebsite.com</p> */}
					{/*  <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell> */}
					<Cell className="resume-right-col" col={12}>
						<h2>Education</h2>

						<Education
							startYear={2019}
							endYear={2019}
							schoolName="Fullstack Academy"
							schoolDescription="A rigorous software development school teaching professional level practices in front and back end web development. Its curriculum is a pragmatic mix of computer science theory, algorithms and data structures, and practical usage of industry standard tools and libraries"
						/>

						<Education
							startYear={2013}
							endYear={2017}
							schoolName="Northwestern University"
							schoolDescription="Acquired a Bachelor of Science in Chemical Engineering at NU"
						/>
						<hr style={{ borderTop: '3px solid #833ab4' }} />

						<h2>Experience</h2>

						<Experience
							startYear={2017}
							endYear={2019}
							company="Cardinal Intellectual Property"
							jobName="Patent Analyst"
							jobDescription="Utilized technical background to understand and review each invention or patent disclosure. Delivered written analytical reports on the patentability of the applications to the USPTO"
						/>

						<Experience
							startYear={2016}
							endYear={2016}
							company="Underwriters Laboratories"
							jobName="Sustainable Products Research Intern"
							jobDescription="Researched aspects of the life cycle environmental impact of cleaning products. Revised and consolidated criteria into a comprehensive product safety standard document"
						/>
						<Experience
							startYear={2015}
							endYear={2015}
							company="Underwriters Laboratories"
							jobName="Laboratory Technician Intern"
							jobDescription="Examined blueprints, schematics, and wiring diagrams to build industrial scale concrete samples. Executed flammability tests and compiled test data for quality feedback reports"
						/>
						<Experience
							startYear={2011}
							endYear={2017}
							company="Kumon"
							jobName="Primary Instructor"
							jobDescription="Administered individual instruction to each student in math and reading subjects. Developed lesson plans, study materials, and goals for each student"
						/>
						<hr style={{ borderTop: '3px solid #833ab4' }} />
						<h2>Skills</h2>

						<div className="logo">
							<a
								href="https://en.wikipedia.org/wiki/JavaScript"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="JavaScript.png" alt="" />
							</a>
							<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
								<img src="Node.png" alt="" />
							</a>
							<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
								<img src="React.png" alt="" />
							</a>
							<a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
								<img src="Redux.png" alt="" />
							</a>
							<a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noopener noreferrer">
								<img src="HTML.png" alt="" />
							</a>
							<a
								href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="CSS.png" alt="" />
							</a>
							<a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
								<img src="PostgreSQL.png" alt="" />
							</a>
							<a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
								<img src="Unity1.png" alt="" />
							</a>
							<a
								href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src="CSharp.png" alt="" />
							</a>
						</div>
						{/* <Skills
                skill="JavaScript"
                progress={100}
                />
                  <Skills
                    skill="ReactJS"
                    progress={60}
                          />
                <Skills
                  skill="NodeJS"
                  progress={50}
                  />
                <Skills
                skill="ReduxJS"
                progress={50}
                />
              <Skills
                skill="HTML/CSS"
                  progress={45}
                  />
                   <Skills
                    skill="C#"
                    progress={20}
                    />
                    <Skills
                    skill="Java"
                    progress={10}
                    />
                    
                    <Skills
                    skill="Unity"
                    progress={10}
                    />
                    <Skills
                    skill="SQL"
                    progress={10}
                    /> */}
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
