import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import MovieDetails from "./movie/MovieDetails";

export class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/movie/:id" component={MovieDetails} />
                <Route path="/" component={Home} />
            </Switch>
            );
    }
}

// export default Routes;