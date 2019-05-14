import React, { Component } from 'react';
import './dashboard.css'
import Balance from './Balance';
import Controls from './Controls';
import TransactionHistory from './TransactionHistory';
import shortid from 'shortid'

export default class MoviePage extends Component {

    state = {
        history: [
            {id: 123123123, type: 'Deposit', amount: '200.00$', date: '4/15/2019, 17:40:55'},
            {id: 123543123, type: 'Withdrawal', amount: '150.00$', date: '4/18/2019, 11:20:37'}
        ],
        balance: 5000
    };

    setHistory = (flag, value) => {
        if (value) {
            let type = '',
                date = new Date(Date.now()).toLocaleString();
            date = date.substring(0, date.length - 3);

            if (flag) {
                type = 'Deposit'
                this.setState({balance: this.state.balance + parseInt(value)})
            } else {
                type = 'Withdrawal';
                if (this.state.balance - parseInt(value) < 0) {
                    alert('На счету недостаточно средств для проведения операции!');
                } else {
                    this.setState({balance: this.state.balance - parseInt(value)});
                }
            }
            value = value + '.00$';

            let newAction = {
                id: shortid.generate(),
                type: type,
                amount: value,
                date: date
            };

            this.setState({
                history: [...this.state.history, newAction],
            })
        }
    };

    render () {
        return (
            <div className="dashboard" >
                <Controls option = {this.setHistory}/>
                <Balance balance = {this.state.balance}/>
                <TransactionHistory history = {this.state.history}/>
            </div>
        )
    }
}