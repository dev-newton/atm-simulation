import React from 'react'
import { Link } from 'react-router-dom'
import './ChangePin.css'

const ChangePin = (props) => {
    const changePin = (event) => {
        event.preventDefault();
        const oldpin = event.target.elements.oldPin.value
        const newpin = event.target.elements.newPin.value
        if (props.pin === oldpin) {
            props.onChangePin(newpin)
            props.history.push('/operation')
        }
       }

    return <form onSubmit={changePin} className="ChangePin" >
             <label style={{textAlign:'center'}} className="Label">Enter your OLD Pin:</label>
             <input className="Input" type="password" name="oldPin" />
             <br/><br/><br/>
             <label className="Label">Enter your NEW Pin:</label>
             <input className="Input" name="newPin" type="password" />
             <br/>
                <button className="Button1">
                    Change Pin
                </button>
            <Link to="/">
                <button className="exitButton1">
                    Exit
                </button>
            </Link>
            </form>
}

export default ChangePin