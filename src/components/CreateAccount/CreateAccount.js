import React from 'react'
import './CreateAccount.css'


const CreateAccount = (props) => {

   const onContinue = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value
        const deposit = event.target.elements.deposit.value
        const pin = event.target.elements.pin.value
        const c_pin = event.target.elements.c_pin.value

        const account_details = {
            id: Number(new Date()),
            name: name,
            deposit: deposit,
            pin: pin,
            c_pin: c_pin
        }
        
        if (name && deposit && (pin === c_pin)) {
            props.startAddingAccount(account_details)
            props.history.push('/')
        }
    }
    
        return <form onSubmit={onContinue} className="CreateAccount" >
                <h2>Create an Account....</h2>
                <label className="Label1">Full Name: </label>
                <input className="Input1" type="text" name="name" />
                <br/><br/>
                <label className="Label1">Initial Deposit: </label>
                <input className="Input1" type="text" name="deposit" />
                <br/><br/>
                <label className="Label1">PIN: </label>
                <input className="Input1" type="password" name="pin" />
                <br/><br/>
                <label className="Label1">Confirm PIN: </label>
                <input className="Input1" type="password" name="c_pin" />
                    <button className="Button">
                        Continue
                    </button>
                </form>
}

export default CreateAccount