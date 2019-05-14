import {Component} from 'react';
import './transaction-history.css'
import React from "react";

export default class TransactionHistory extends Component {
    render() {
        const {history} = this.props;

        return (

            <table className="history">
                <thead>
                <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    history.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.type}</td>
                                <td>{item.amount}</td>
                                <td>{item.date}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}