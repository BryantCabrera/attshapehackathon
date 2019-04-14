import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Video from "./Components/Video/Video";
import Login from "./Components/Auth/Login/Login"
import Register from "./Components/Auth/Login/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Bet from './Components/Bet/Bet';
import Wallet from './Components/Wallet/Wallet';
import Nav from "./Components/Nav/Nav"

class App extends Component {
    state = {
        loggedUser: {}
    };

    doLoginUser = async user => {
        try {
            const loginResponse = await fetch(
                `${process.env.REACT_APP_API_URL}/auth/login`,
                {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json",
                },
                },
            );

            if (!loginResponse.ok) {
                throw Error(loginResponse.statusText);
            }

            const parsedResponse = await loginResponse.json();
            if (parsedResponse.message === "login successful") {
                //Resets this component's state if a use was successfully logged in
                this.setState({
                loggedUser: parsedResponse.data,
                });

                this.props.history.push(`/`);
            } else {
                this.setState({
                loginError: parsedResponse.message,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    doLogoutUser = async user => {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/auth/logout`,
            );

            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                console.log(response);
            }

            const deletedSession = await response.json();

            this.setState({
                loggedUser: deletedSession.user || {},
            });

            this.props.history.push("/login");
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div>
              <Nav doLogoutUser={this.doLogoutUser} loggedUser={this.state.loggedUser}/>
                <Switch>
                    <Route exact path="/login" component={() => <Login doLoginUser={this.doLoginUser}/>}/>
                    <Route exact path="/register" component={() => <Register />} />
                    <Route exact path="/" component={() => <Dashboard newBet={this.state.betAmount} />} />
                    <Route exact path="/bet" component={(props) => <Bet {...props} history={this.props.history} />} />
                    <Route exact path="/:id/wallet" component={() => <Wallet />} />
                    <Route exact path="/live-match" component={() => <Video />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);