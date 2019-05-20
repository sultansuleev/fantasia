import React, {Component} from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import Home from './Home/home';

class Main extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" render={() => <Home/>}/>
            </Switch>
        );
    }
}

export default withRouter(Main);