import React from 'react'
import { Link } from 'react-router-dom'
import './Withdrawal.css'

const Withdrawal = (props) => {
    return <div className="Withdrawal">
                <h2 style={{color: 'grey'}} >How much do you want to withdraw ?</h2>
                <div style={{ display: 'inline-flex'}}>
                <Link to="/WithdrawSuccess">
                    <button value="N1,000" onClick={props.onDeductOneK} className="buttonLeft">
                        N1,000
                    </button>
                </Link>
                <Link to="/WithdrawSuccess">
                    <button onClick={props.onDeductTwentyK} className="buttonRight">
                        N20,0000
                    </button>
                </Link>
                </div>
                <div style={{ display: 'inline-flex'}}>
                <Link to="/WithdrawSuccess">
                    <button onClick={props.onDeductFiveK} className="buttonLeft">
                        N5,000
                    </button>
                    </Link>
                    <Link to="/WithdrawSuccess">
                        <button onClick={props.onDeductFortyK} className="buttonRight">
                            N40,000
                        </button>
                    </Link>
                </div>
                <div style={{ display: 'inline-flex'}}>
                <Link to="/WithdrawSuccess">
                    <button onClick={props.onDeductTenK} className="buttonLeft">
                        N10,000
                    </button>
                </Link>
                <Link to="/other_amount">
                    <button className="buttonOthers">
                       Others
                    </button>
                </Link>
                </div>
            </div>
}

export default Withdrawal