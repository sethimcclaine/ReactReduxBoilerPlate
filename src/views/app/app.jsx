import '../../common/styles/bootstrap.css';
import './app.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Redirect, Route, Switch } from 'react-router-dom';

import { PATH } from 'src/constants';
import { history } from 'src/utils/history';

import NavBar from 'src/components/nav-bar';
import HomeContainer from 'src/views/home';
import SampleContainer from 'src/views/sample';
import ProfileContainer from 'src/views/profile';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Router history={ history } >
                    <div className="router">
                        <NavBar history={ history } userName={ this.props.userName }/>
                        <Switch>
                            <Route path={ PATH.home } component={ HomeContainer }></Route>
                            <Route path={ PATH.sample } component={ SampleContainer }></Route>
                            <Route path={ PATH.profile } component={ ProfileContainer }></Route>
                            <Redirect from={ PATH.base } to={ PATH.home }/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

App.propTypes = {
    userName: PropTypes.string,
};

export default App;
