import React, {Component} from 'react';
import './balance.css'
import Button from '@material-ui/core/Button';


export default class Balance extends Component {
    render (){
        return (
            <div className="dashboard">
                <section className="controls">
                    <input type="number"/>
                    <Button variant="contained" color="primary">Deposit</Button>
                    <Button variant="contained" color="primary">Withdraw</Button>
                </section>

                <section className="balance">
                    <span>⬆️2000$</span>
                    <span>⬇️1000$</span>
                    <span>Balance: 5000$</span>
                </section>

                <table className="history">
                    <thead>
                    <tr>
                        <th>Transaction</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Deposit</td>
                        <td>200$</td>
                        <td>4/17/2019, 12:45:17</td>
                    </tr>
                    <tr>
                        <td>Withdrawal</td>
                        <td>100$</td>
                        <td>4/18/2019, 14:15:23</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}