import React from 'react'
import './Pin.css'
import { Link } from 'react-router-dom';

const Pin = (props) => {

        const onContinue = (event) => {
         event.preventDefault();
         const acc_pin = event.target.elements.acc_pin.value
         if (acc_pin) {
             props.onSavePin(acc_pin)
             props.history.push('/operation')
         }
        }

    return <form onSubmit={onContinue} className="Pin" >
            <label style={{fontSize: '24px'}}>Welcome, {props.account_names}</label>
            <br/>
             <label className="Label">Enter your Pin:</label>
             <br />
             <input className="Input" type="password" name="acc_pin" />
             <br/>
                <button className="Button1">
                    Continue
                </button>
            <Link to="/">
                <button className="exitButton1">
                    Exit
                </button>
            </Link>
            </form>
}

export default Pin