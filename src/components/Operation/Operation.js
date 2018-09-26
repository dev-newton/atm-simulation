import React from 'react'
import './Operation.css'
import { Link } from 'react-router-dom';

const Operation = () => {
    return <div>
                <h2 className="Operation" >Which Operation do you want to perform ?</h2>
                <div style={{ display: 'inline-flex'}}>
                <Link to="/Withdrawal">
                    <button className="buttonWithdraw">
                        Withdrawal
                    </button>
                </Link>
                <Link to="/ChangePin">
                    <button className="buttonChange">
                        Change Pin
                    </button>
                </Link>
                </div>
                <div style={{ display: 'inline-flex'}}>
                <Link to="/CheckBalance">
                    <button className="buttonCheck">
                        Check Balance
                    </button>
                </Link>
                    <Link to="/">
                        <button className="exitdButton">
                            Exit
                        </button>
                    </Link>
                </div>
            </div>
}

export default Operation