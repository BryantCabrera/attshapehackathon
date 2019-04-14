import React, { Component } from 'react'
import './Dashboard.css'
import Games from '../Games/Games';
import DashboardBet from '../DashboardBet/DashboardBet';

class Dashboard extends Component {

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div className="dashboard__maincontainer">
                <div className="dashboard__betting">
                    <DashboardBet newBet={this.props.betAmount} />
                </div>
                <div className="dashboard__game">
                    <Games />
                </div>
            </div >
        )
    }
}

export default Dashboard;