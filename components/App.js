import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';
import Resume from './Resume';

class App extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <Route path = '*' component = {Navbar}></Route>
                    <Route exact path = "/projects" component = {Projects}></Route>
                    <Route exact path = "/contact" component = {Contact}></Route>
                    <Route exact path = "/resume" component = {Resume}></Route>
                </div>
            </Router>
        )
    }
}

export default App;