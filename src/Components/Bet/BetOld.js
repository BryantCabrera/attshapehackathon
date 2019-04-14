import React, { Component } from "react";
import './BetOld.css';

export default class BetOld extends Component {
    state = {
        teamAInputDisplay: 'block',
        teamAValue: 0.00,
        teamAPool: 0.00,
        teamAMine: 0.00,
        teamBInputDisplay: 'block',
        teamBValue: 0.00,
        teamBPool: 0.00,
        teamBMine: 0.00,
        winEstimate: 0.00
    }

    handleChange = (e) => {
        const newValue = parseInt(e.target.value);
        this.setState({
            [e.target.name]: newValue
        });
    }

    handleBet = (e) => {
        if (e.target.name === 'A') {
            const teamAPool = this.state.teamAPool + this.state.teamAValue;
            const teamAMine = this.state.teamAMine + this.state.teamAValue;
            //to calculate estimated wins based on 7:3 Odds, multiply Odds (converted to "Decimal Odds" on https://www.pinnacle.com/en/betting-resources/betting-tools/conversion-calculator) by your stake (the amount you bet)
            const winEstimate = (3.333 * teamAMine).toFixed(2);

            this.setState ({
                teamBInputDisplay: 'none',
                teamAValue: 0.00,
                teamAPool: teamAPool,
                teamAMine: teamAMine,
                winEstimate: winEstimate
            });
        } else if (e.target.name === 'B') {
            const teamBPool = this.state.teamBPool + this.state.teamBValue;
            const teamBMine = this.state.teamBMine + this.state.teamBValue;
            //to calculate estimated wins based on 3:7 Odds, multiply Odds (converted to "Decimal Odds" on https://www.pinnacle.com/en/betting-resources/betting-tools/conversion-calculator) by your stake (the amount you bet)
            const winEstimate = (1.429 * teamBMine).toFixed(2);

            this.setState ({
                teamAInputDisplay: 'none',
                teamBValue: 0.00,
                teamBPool: teamBPool,
                teamBMine: teamBMine,
                winEstimate: winEstimate
            });
        }
    }

    render() {
        return (
            <div className="bet">
                <h1 className="bet__title">Current Bets</h1>

                <div className="bet__teamA bet__team">
                    <h2 className="bet__team__title">TeamA</h2>
                    <h3 className="bet__team__pool">Pool: ${this.state.teamAPool}</h3>
                    <h3 className="bet__team__mine" style={{display: `${this.state.teamAInputDisplay}` }}>My Bet: ${this.state.teamAMine}</h3>
                    <div className="bet__team__input" style={{display: `${this.state.teamAInputDisplay}` }}>
                        $<input type="number" name="teamAValue" value={this.state.teamAValue} onChange={this.handleChange} min="0.01" step="0.01" max="100.00"></input>
                    </div>
                    <button class="bet__team__btn" name="A" onClick={this.handleBet} style={{display: `${this.state.teamAInputDisplay}` }}>Bet</button>
                </div>

                <div className="bet__teamB bet__team">
                    <h2 className="bet__team__title">TeamB</h2>
                    <h3 className="bet__team__pool">Pool: ${this.state.teamBPool}</h3>
                    <h3 className="bet__team__mine" style={{display: `${this.state.teamBInputDisplay}` }}>My Bet: ${this.state.teamBMine}</h3>
                    <div className="bet__team__input" style={{display: `${this.state.teamBInputDisplay}` }}>
                        $<input type="number" name="teamBValue" value={this.state.teamBValue} onChange={this.handleChange}min="0.01" step="0.01" max="100.00"></input>
                    </div>
                    <button class="bet__team__btn" name="B" onClick={this.handleBet} style={{display: `${this.state.teamBInputDisplay}` }}>Bet</button>
                </div>

                <div className="bet__stats">
                    <h2 className="bet__stats__spread--title">Spread/Odds</h2>
                    <h3 className="bet__stats__spread--stats">7:3</h3>
                    <h2 className="bet__stats__win--title">Est. Win Amount</h2>
                    <h3 className="bet__stats__win--total">${this.state.winEstimate}</h3>
                </div>
            </div>
        );
    }
}