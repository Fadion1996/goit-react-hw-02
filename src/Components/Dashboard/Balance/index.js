import React, {Component} from 'react';
import './balance.css';

export default class Balance extends Component {
    render (){

        const { balance } = this.props;
        return (
            <section className="balance">
                <span>⬆️2000$</span>
                <span>⬇️1000$</span>
                <span>Balance: {balance}$</span>
            </section>
        )
    }
}