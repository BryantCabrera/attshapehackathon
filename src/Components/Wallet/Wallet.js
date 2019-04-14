import React, { Component } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Wallet.css';
import ModalSection from '../Modal/ModalSection'

export default class Wallet extends Component {
    state = {
        earningsTotal: 3922.23,
        betsTotal: 1829.21,
        graphData: [{ name: 'date1', earnings: 400, bets: 2400, amt: 2400 }, { name: 'date2', earnings: 200, bets: 1200, amt: 2000 }]
    }

    render() {
        return (
            <div className="earnings">
                <div className="earnings__earnings totals-box">
                    <h3 className="totals-box__title">Earnings:</h3>

                    <ul className="totals-box__toggle">
                        <li><a href="#">Week</a></li>
                        <li><a href="#">Month</a></li>
                        <li><a href="#">Total</a></li>
                    </ul>

                    <div className="totals-box__total">
                        <h2>${this.state.earningsTotal}</h2>
                    </div>
                    
                    <ModalSection />
                    <button className="totals-box__btn">Cash Out</button>
                </div>

                <div className="earnings__bets totals-box">
                    <h3 className="totals-box__title">Bets:</h3>

                    <ul className="totals-box__toggle">
                        <li><a href="#">Week</a></li>
                        <li><a href="#">Month</a></li>
                        <li><a href="#">Total</a></li>
                    </ul>

                    <div className="totals-box__total">
                        <h2>${this.state.betsTotal}</h2>
                    </div>


                    <ModalSection />
                    <button className="totals-box__btn">Cash Out</button>


                </div>

                <div className="earnings__graph">
                    <ul className="earnings__graph__toggle totals-box__toggle">
                        <li><a href="#">Week</a></li>
                        <li><a href="#">Month</a></li>
                        <li><a href="#">Total</a></li>
                    </ul>
                    <ResponsiveContainer maxWidth={400} maxHeight={400} minHeight={100}>
                        <LineChart width={725} height={300} data={this.state.graphData}>
                            <XAxis dataKey='name' />
                            <CartesianGrid stroke="#ccc" strokeDasharray='5 5' />
                            <Tooltip />
                            <Line type='monotone' dataKey='earnings' stroke='#0000ff' />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}
