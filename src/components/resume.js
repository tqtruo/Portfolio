import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
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
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Patent Analyst"
              jobDescription="Utilized technical background to understand and review each invention or patent disclosure. Delivered written analytical reports on the patentability of the applications to the USPTO"
              />

              <Experience
                startYear={2016}
                endYear={2016}
                jobName="Sustainable Products Research Intern"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <Experience
                startYear={2015}
                endYear={2015}
                jobName="Laboratory Technician Intern"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <Experience
                startYear={2011}
                endYear={2017}
                jobName="Primary Instructor"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                      skill="React"
                      progress={60}
                      />
                <Skills
                  skill="HTML/CSS"
                  progress={50}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
