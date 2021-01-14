import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Home from "../pages/Home/Home";
import * as ROUTES from "../static/routes";

const Router = () => {
    return (
        <>
             <Switch>
                 <Route path={ROUTES.HOME} component={Home}/>
             </Switch>
        </>
    );
};

export default Router;