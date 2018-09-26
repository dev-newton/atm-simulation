const initialState = {
    acc_names: {},
    acc_details: {},
    acc_bal: 50000,
    pin: {},
    one_k: 1000,
    five_k: 5000,
    ten_k: 10000,
    twenty_k: 20000,
    forty_k: 40000
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SAVE_ACCOUNT_NAME':
            return {
                ...state,
                acc_names: state.acc_names.value= action.value,     
            }

        case 'SAVE_ACCOUNT_PIN':
            return {
                ...state,
                pin: state.pin.value= action.value,     
            }

        case 'SAVE_NEW_PIN':
            return {
                ...state,
                pin: state.pin= action.value,    
            }

        case 'SAVE_ACCOUNT_DETAILS':
            return {
                ...state,
                acc_details: state.acc_details= action.value,    
            }

        case 'ONE_K_CLICKED':
            return {
                acc_bal: state.acc_bal - action.value,    
            }

        case 'FIVE_K_CLICKED':
            return {
                acc_bal: state.acc_bal - action.value,    
            }
         
        case 'TEN_K_CLICKED':
            return {
                acc_bal: state.acc_bal - action.value,    
            }

        case 'TWENTY_K_CLICKED':
            return {
                acc_bal: state.acc_bal - action.value,    
            }

        case 'FORTY_K_CLICKED':
            return {
                acc_bal: state.acc_bal - action.value,    
            }

        case 'OTHERS_CLICKED':
            return {
                acc_bal: state.acc_bal - action.value,    
            }
        default:
            return state
    }

}

export default reducer