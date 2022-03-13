import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignInPage';

const UnsignedRouting = () => {
    return (
        <Router>
            <Switch>¿
                <Route path={'/'} exact>
                    <LandingPage setRefreshLogin={() => console.log()}/>
                </Route>
                <Route path={'/signin'} exact>
                    <SignIn setRefreshLogin={() => console.log()}/>
                </Route>
                <Route path={'*'} exact>
                    <LandingPage setRefreshLogin={() => console.log()}/>
                </Route>
            </Switch>
        </Router>
    );
};

export default UnsignedRouting;