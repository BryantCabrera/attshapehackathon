import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './Bet.css';

class Bet extends Component {
    state = {
        chosenTeam: 'draw',
        input: 0,
        teamA: {name: 'FNC', odds: 1.25},
        teamACheckbox: '',
        teamBCheckbox: '',
        drawCheckbox: 'checked',
        teamB: {name: 'IG', odds: 2.25},
        draw: {name: 'draw', odds: 3.25},
        estimate: 0
    }

    handleChange = (e) => {
        const newValue = parseInt(e.target.value);
        this.setState({
            [e.target.name]: newValue
        });
    }

    identifyTeam = (e) => {
        this.setState({
            chosenTeam: e.target.name
        })
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
                <div className="bet__teams">
                    <img className="bet__teams--FNC" src="http://logos-download.com/wp-content/uploads/2016/06/Fnatic_logo_wordmark.png"></img>
                    
                    vs. 

                    <img className="bet__teams--FNC" src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/e/e4/Invictus_Gaminglogo_square.png/220px-Invictus_Gaminglogo_square.png?version=b7849081deee2282ea8d89d3d6b1b0a9"></img>

                    
                </div>

                <div className="bet__odds">
                    <input type="checkbox" className="bet__odds__checkboxA bet__odds__checkbox" id="bet__odds__teamA" onClick={this.identifyTeam}></input>
                    <div className="bet__odds__teamA bet__odds__team">
                        <label htmlFor="bet__odds__teamA" className="bet__odds__label" name="A" onClick={this.identifyTeam}>{this.state.teamA.name}</label>

                        <h3 className="bet__odds__team-odds">{this.state.teamA.odds}</h3>
                    </div>

                    <input type="checkbox"  className="bet__odds__checkbox-draw bet__odds__checkbox" id="bet__odds__draw" onClick={this.identifyTeam}></input>
                    <div className="bet__odds__draw bet__odds__team">
                        <label htmlFor="bet__odds__draw" className="bet__odds__label" name="draw" onClick={this.identifyTeam}>{this.state.draw.name}</label>

                        <h3 className="bet__odds__team-odds">{this.state.draw.odds}</h3>
                    </div>

                    <input type="checkbox" className="bet__odds__checkboxB bet__odds__checkbox" id="bet__odds__teamB" onClick={this.identifyTeam}></input>
                    <div className="bet__odds__teamB bet__odds__team">
                        <label htmlFor="bet__odds__teamB" className="bet__odds__label" name="B" onClick={this.identifyTeam}>{this.state.teamB.name}</label>

                        <h3 className="bet__odds__team-odds">{this.state.teamB.odds}</h3>
                    </div>
                </div>

                <div className="bet__input">
                    <div className="bet__input__payout bet__input--input">Est. payout: ${this.state.estimate}</div>
                    <input type="number" className="bet__input__bet bet__input--input" name="input" value={this.state.input} placeholder="Enter an amount to bet" onChange={this.handleChange}></input>
                    <button className="bet__input__btn bet__input--input" onClick={() => this.props.changeBet(this.state.input)}>Confirm</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Bet);