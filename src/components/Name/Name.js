import React from 'react'
import './Name.css'


const Name = (props) => {

   const onContinue = (event) => {
        event.preventDefault();
        const acc_name = event.target.elements.acc_name.value
        if (acc_name) {
            props.onSaveAccount(acc_name)
            props.history.push('/enterPin')
        }
    }
        return <form onSubmit={onContinue} className="Name" >
                <label className="Label">Enter your Name:</label>
                <br />
                <input className="Input" type="text" name="acc_name" />
                <br/>
                    <button className="ButtonH">
                        Continue
                    </button>
                </form>
}

export default Name