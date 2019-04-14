import React, { Component } from 'react'
import "./DashboardBet.css"

class DashboardBet extends Component {
    render() {
        return (
            <div>
                <div className="dashboardbet_yourbets">
                    <h1 className="dashboardbet__header">Your bets!</h1>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="csgo" src="/img/csgo.jpg" />
                        <p className="dashboardbet__box--title" >Counter-Strike: GO<br />Shooter vs Dust2</p>
                        <h2 className="dashboardbet__box--money">$20</h2>
                    </div>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="leagueoflegends" src="/img/leagueoflegends.jpeg" />
                        <p className="dashboardbet__box--title" >League of Legends<br />ATT vs IBM</p>
                        <h2 className="dashboardbet__box--money">$20</h2>
                    </div>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="overwatch" src="/img/Overwatch.jpg" />
                        <p className="dashboardbet__box--title" >Overwatch<br></br>INTEL vs Microsoft</p>
                        <h2 className="dashboardbet__box--money">$20</h2>
                    </div>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="hearthstone" src="/img/hearthstone.jpg" />
                        <p className="dashboardbet__box--title" >Hearthstone<br></br>Toast vs Bagel</p>
                        <h2 className="dashboardbet__box--money">$20</h2>
                    </div>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="fortnite" src="/img/Fortnite.jpg" />
                        <p className="dashboardbet__box--title" >Fortnite<br></br>Camper vs Ninja</p>
                        <h2 className="dashboardbet__box--money">$20</h2>
                    </div>
                </div>

                <div className="dashboardbet_yourbets">
                    <h1 className="dashboardbet__header">Biggest Pool</h1>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="csgo" src="/img/csgo.jpg" />
                        <p className="dashboardbet__box--title" >Counter-Strike: GO<br />Shooter vs Dust2</p>
                        <h2 className="dashboardbet__box--money">$192,123</h2>
                    </div>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="leagueoflegends" src="/img/leagueoflegends.jpeg" />
                        <p className="dashboardbet__box--title" >League of Legends<br />ATT vs IBM</p>
                        <h2 className="dashboardbet__box--money">$90,222</h2>
                    </div>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="overwatch" src="/img/Overwatch.jpg" />
                        <p className="dashboardbet__box--title" >Overwatch<br></br>INTEL vs Microsoft</p>
                        <h2 className="dashboardbet__box--money">$2,012</h2>
                    </div>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="hearthstone" src="/img/hearthstone.jpg" />
                        <p className="dashboardbet__box--title" >Hearthstone<br></br>Toast vs Bagel</p>
                        <h2 className="dashboardbet__box--money">$91</h2>
                    </div>
                    <div className="dashboardbet__box">
                        <img className="dashboardbet__box--logo" alt="fortnite" src="/img/Fortnite.jpg" />
                        <p className="dashboardbet__box--title" >Fortnite<br></br>Camper vs Ninja</p>
                        <h2 className="dashboardbet__box--money">$301,201</h2>
                    </div>
                </div>
            </div >
        )
    }
}

export default DashboardBet;
