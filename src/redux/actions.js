import {database} from '../database/config'

//action creators
export const startAddingAccount = (acc_details) => {
    return (dispatch) => {
        return database.ref('accounts')
                    .update({[acc_details.id]: acc_details})
                        .then(() => {
                        dispatch(onSaveAccountDetails(acc_details))
                        })
    }
}

export const onSaveAccountDetails = (acc_details) => {
    return {
        type: 'SAVE_ACCOUNT_DETAILS', 
        value: acc_details
    }
}

export const  onSaveAccount = (result) => {
    return {
        type: 'SAVE_ACCOUNT_NAME', 
        value: result 
    }
}     

export const onSavePin = (pin) => {
    return {
        type: 'SAVE_ACCOUNT_PIN',
        value: pin 
    }
}


export const ChangePin = (new_pin) => {
    return {
        type: 'SAVE_NEW_PIN', 
        value: new_pin
    }
}

export const onDeductOneK = () => {
    return {
        type: 'ONE_K_CLICKED', 
        value: 1000 
    }
}

export const onDeductFiveK = () => {
     return {
         type: 'FIVE_K_CLICKED', 
         value: 5000
         }
}

export const onDeductTenK = () => {
    return { 
        type: 'TEN_K_CLICKED', 
        value: 10000 
    }
}

export const onDeductTwentyK = () => {
     return {
         type: 'TWENTY_K_CLICKED',
         value: 20000
         }

        }
export const onDeductFortyK = () => {
    return {
        type: 'FORTY_K_CLICKED',
        value: 40000
     }
}

