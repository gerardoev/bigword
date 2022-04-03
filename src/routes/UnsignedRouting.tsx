import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import SignUp from '../pages/SignUpPage';
import SignIn from '../pages/SignInPage';

const UnsignedRouting = () => {
    return (
        <Router>
            <Switch>¿
                <Route path={'/'} exact>
                    <LandingPage/>
                </Route>
                <Route path={'/signup'} exact>
                    <SignUp/>
                </Route>
                <Route path={'/signin'} exact>
                    <SignIn/>
                </Route>
                <Route path={'*'} exact>
                    <LandingPage/>
                </Route>
            </Switch>
        </Router>
    );
};

export default UnsignedRouting;