import React, { Component } from 'react';
import './dashboard.css'
import Balance from './Balance';
import Controls from './Controls';
import TransactionHistory from './TransactionHistory';
import shortid from 'shortid'

export default class MoviePage extends Component {

    state = {
        history: [],
        balance: 0,
        deposit: 0,
        withdraw: 0
    };

    setHistory = (flag, value) => {
        let valid = true;
        if (parseInt(value)) {
            let type = '',
                date = new Date(Date.now()).toLocaleString();
            date = date.substring(0, date.length - 3);

            if (flag) {
                type = 'Deposit';
                this.setState({balance: this.state.balance + parseInt(value)})
                this.setState({deposit: this.state.deposit + parseInt(value)});
            } else {
                type = 'Withdrawal';
                if (this.state.balance - parseInt(value) < 0) {
                    valid = false;
                    alert('На счету недостаточно средств для проведения операции!');
                } else {
                    this.setState({balance: this.state.balance - parseInt(value)});
                    this.setState({withdraw: this.state.withdraw + parseInt(value)});
                }
            }

            if (valid) {
                let newAction = {
                    id: shortid.generate(),
                    type: type,
                    amount: value,
                    date: date
                };

                this.setState({
                    history: [...this.state.history, newAction],
                });
            }
        } else {
            alert('Введите сумму для проведения операции!');
        }
    };

    render () {
        return (
            <div className="dashboard" >
                <Controls option = {this.setHistory}/>
                <Balance balance = {this.state.balance} withdraw = {this.state.withdraw} deposit = {this.state.deposit}/>
                <TransactionHistory history = {this.state.history}/>
            </div>
        )
    }
}