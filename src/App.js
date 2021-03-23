import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import BetrayalCards from "./containers/BetrayalCards/BetrayalCards";
import DeathCounter from "./containers/DeathCounter/DeathCounter";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route path="/About" component={About} />
                        <Route
                            path="/Projects/DeathCounter"
                            component={DeathCounter}
                        />
                        <Route
                            path="/Projects/BetrayalTracker"
                            component={BetrayalCards}
                        />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
