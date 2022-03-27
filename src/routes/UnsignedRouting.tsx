import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from '../pages/LandingPage';
import SignUp from '../pages/SignUpPage';

const UnsignedRouting = () => {
    return (
        <Router>
            <Switch>¿
                <Route path={'/'} exact>
                    <LandingPage setRefreshLogin={() => console.log()}/>
                </Route>
                <Route path={'/signup'} exact>
                    <SignUp setRefreshLogin={() => console.log()}/>
                </Route>
                <Route path={'*'} exact>
                    <LandingPage setRefreshLogin={() => console.log()}/>
                </Route>
            </Switch>
        </Router>
    );
};

export default UnsignedRouting;