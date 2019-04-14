import React, { Component } from "react";
import "./Video.css"
import Bet from '../Bet/Bet'
import DashboardBet from '../DashboardBet/DashboardBet'

export default class Video extends Component {
    state={
        betAmount: 0
    }

    changeBet = (bet) => {
        const newBet = this.state.betAmount + bet
        this.setState({
            betAmount: newBet
        })
    }

  render() {
    return (
      <div className="video__main-container">

        <div className="active__bets">
          <DashboardBet newBet={this.state.betAmount} />
        </div>


        <div className="video__video-container">
          <iframe
            title="Video"
            src="https://player.twitch.tv/?channel=riotgames"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
            height="700px"
            width="100%"
          />
          <Bet changeBet={this.changeBet} />
        </div>
        <div className="video__chat">
          <iframe
            title="Chat"
            src="https://www.twitch.tv/embed/riotgames/chat"
            frameBorder="0"
            scrolling="no"
            height="100%"
            width="100%"
          />
        </div>

      </div>

    );
  }
}
