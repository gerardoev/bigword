import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignInPage';

const UnsignedRouting = () => {
    return (
        <Router>
            <Switch>¿
                <Route path={'/'} exact={true} component={LandingPage}/>
                <Route path={'/signin'} exact={true} component={SignIn}/>
                <Route path={'*'} exact={true} component={LandingPage}/>
            </Switch>
        </Router>
    );
};

export default UnsignedRouting;