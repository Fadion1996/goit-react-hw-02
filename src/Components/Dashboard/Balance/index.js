import React, {Component} from 'react';
import './balance.css';

export default class Balance extends Component {

    render (){

        const { balance, deposit, withdraw } = this.props;
        return (
            <section className="balance">
                <span>⬆️{deposit}$</span>
                <span>⬇️{withdraw}$</span>
                <span>Balance: {balance}$</span>
            </section>
        )
    }

}