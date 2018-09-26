import React from 'react'
import { Link } from 'react-router-dom'

const WithdrawSuccess = (props) => {
    return <div className="CheckBalance">
                <h2 style={{color:'grey'}} >You have successfully made a withdrawal, your new Account Balance is: </h2>
                <br/>
                <h1>N {props.account_balance}</h1>
                <Link to="/operation">
                <button className="Button1">
                    Continue
                </button>
            </Link>
            <Link to="/">
                <button className="exitButton1">
                    Exit
                </button>
            </Link>
            </div>
}

export default WithdrawSuccess