import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button}/* CardMenu, IconButton */ from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
            <CardTitle style={{justifyContent: 'center', color: '#fff', height: '176px', background: 'url(TrainerTD.PNG) center / cover'}} >Trainer TD</CardTitle>
            <CardText>
            A desktop strategy game inspired by Nintendo’s Pokémon and the tower defense genre. Built in Unity using C#. Contact me for the access code for the live demo.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/Trainer-TD/Trainer-TD" target="_blank">GitHub</Button>
              <Button colored href="http://www.trainertd.com/" target="_blank">Live Demo</Button>
              <Button colored href="https://www.youtube.com/watch?v=qxX6N64qoO4" target="_blank">Video</Button>
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
            <CardTitle style={{justifyContent: 'center', color: '#000', height: '176px', background: 'url(BeerHopper.PNG) center / cover'}} >Grace Shopper</CardTitle>
            <CardText>
            A Node.js interactive e-commerce web application selling beverages. Utilized React/Redux to create front-end components connecting to Sequelize models in a PostgreSQL database through Express
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/Team-ForLoops/beerHopper" target="_blank">GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored href="https://beerhopperfullstack.herokuapp.com/" target="_blank">Live Demo</Button>
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
            <CardTitle style={{justifyContent: 'center', color: '#fff', height: '176px', background: 'url(FakeSpaceInvaders.PNG) center / cover'}} >Fake Space Invaders</CardTitle>
            <CardText>
            A space invadersesque 2D HTML game made with the Phaser.js game framework and Node.js
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/tqtruo/SpaceInvaders" target="_blank">GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              <Button colored href = "https://www.youtube.com/watch?v=eQmMPtOqXsw" target="_blank">Video</Button>
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
            <CardTitle style={{justifyContent: 'center', color: '#000', height: '176px', background: 'url(WeatherForecaster.PNG) center / cover'}} >Weather Forecaster</CardTitle>
            <CardText>
            A chrome extension displaying a 7-day weather forecast in a user’s current location. Utilized JavaScript and manipulated the DOM to implement the Dark Sky API for weather data
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/tqtruo/weather-extension" target="_blank">GitHub</Button>
              {/* <Button colored>CodePen</Button> */}
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>

          {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
            <CardTitle style={{justifyContent: 'center', color: '#fff', height: '176px', textShadow: "1px 1px black", background: 'url(RecipeRummager.PNG) center / cover'}} >Recipe Rummager</CardTitle>
            <CardText>
            A web application for finding recipes and viewing their nutritional info and ingredients. Built using JavaScript, React, HTML, CSS, and the Edamam recipe API
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/tqtruo/RecipeRummager" target="_blank">GitHub</Button>
              {<Button colored href="https://reciperummager.herokuapp.com" target="_blank">Live Demo</Button>}
            </CardActions>
            {/* <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu> */}
          </Card>
        </div>


      )
    } /* else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    } */

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>My Projects</Tab>
{/*           <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
