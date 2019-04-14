import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Wallet.css';
import ModalSection from '../Modal/ModalSection'

export default class Wallet extends Component {
    state = {
        depositTotal: 1105.02,
        netGainTotal: 2817.21,
        balance: 3922.23,
        graphData: [{ name: 'April 1, 2019', earnings: 400 }, { name: 'April 2, 2019', earnings: 200 }, { name: 'April 3, 2019', earnings: 700 }, { name: 'April 4, 2019', earnings: 800 }, { name: 'April 5, 2019', earnings: 1000 }]
    }

    render() {
        return (
            <div className="wallet">
                <div className="wallet__earnings totals-box">
                    <h2 className="totals-box__title">Lifetime Balance</h2>

                    <div className="wallet__deposit totals-box__item">
                        <h3>Deposit:</h3>
                        <h3>${this.state.depositTotal}</h3>
                    </div>

                    <div className="wallet__net-gain totals-box__item">
                        <h3>Net Gain:</h3>
                        <h3>${this.state.netGainTotal}</h3>
                    </div>

                    <div className="wallet__balance totals-box__item">
                        <h2>Balance:</h2>
                        <h2>${this.state.balance}</h2>
                    </div>
                    
                    <ModalSection className="wallet__btn" />
                </div>

                <div className="wallet__graph">
                    <div className="wallet__graph__header">
                        <h2 className="wallet__graph__title">Activity</h2>

                        <ul className="wallet__graph__toggle totals-box__toggle">
                            <li><a href="#">Week</a></li>
                            <li><a href="#">Month</a></li>
                            <li><a href="#">Year</a></li>
                        </ul>
                    </div>
                    <ResponsiveContainer maxWidth={400} maxHeight={400} minHeight={100}>
                        <LineChart width={725} height={300} data={this.state.graphData}>
                            <XAxis dataKey='name' />
                            <YAxis />
                            <CartesianGrid stroke="#ccc" strokeDasharray='5 5' />
                            <Tooltip />
                            <Line type='monotone' dataKey='earnings' stroke='#0000ff' />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            // old prototype //<div className="earnings">
            //     <div className="earnings__earnings totals-box">
            //         <h3 className="totals-box__title">Earnings:</h3>

            //         <ul className="totals-box__toggle">
            //             <li><a href="#">Week</a></li>
            //             <li><a href="#">Month</a></li>
            //             <li><a href="#">Total</a></li>
            //         </ul>

            //         <div className="totals-box__total">
            //             <h2>${this.state.earningsTotal}</h2>
            //         </div>
                    
            //         <ModalSection />
            //         <button className="totals-box__btn">Cash Out</button>
            //     </div>

            //     <div className="earnings__bets totals-box">
            //         <h3 className="totals-box__title">Bets:</h3>

            //         <ul className="totals-box__toggle">
            //             <li><a href="#">Week</a></li>
            //             <li><a href="#">Month</a></li>
            //             <li><a href="#">Total</a></li>
            //         </ul>

            //         <div className="totals-box__total">
            //             <h2>${this.state.betsTotal}</h2>
            //         </div>


            //         <ModalSection />
            //         <button className="totals-box__btn">Cash Out</button>


            //     </div>

            //     <div className="earnings__graph">
            //         <ul className="earnings__graph__toggle totals-box__toggle">
            //             <li><a href="#">Week</a></li>
            //             <li><a href="#">Month</a></li>
            //             <li><a href="#">Total</a></li>
            //         </ul>
            //         <ResponsiveContainer maxWidth={400} maxHeight={400} minHeight={100}>
            //             <LineChart width={725} height={300} data={this.state.graphData}>
            //                 <XAxis dataKey='name' />
            //                 <CartesianGrid stroke="#ccc" strokeDasharray='5 5' />
            //                 <Tooltip />
            //                 <Line type='monotone' dataKey='earnings' stroke='#0000ff' />
            //             </LineChart>
            //         </ResponsiveContainer>
            //     </div>
            // </div>
        );
    }
}
