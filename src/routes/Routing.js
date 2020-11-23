import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import configRouting from "./configRouting"; 

const Routing = () => {
    return (
        <Router>
            <Switch>
                {configRouting.map((route, index) => (
                    <Route key={index} path={route.route} exact={route.exact}>
                        {route.component}
                    </Route>
                ))}
            </Switch>
        </Router>
    );
};

export default Routing;