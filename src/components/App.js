import Atm from '../containers/Atm/Atm'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../redux/actions'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
    return {
        account_names: state.acc_names,
        account_balance: state.acc_bal,
        pin: state.pin,
        one_k: state.one_k,
        five_k: state.five_k,
        ten_k: state.ten_k,
        twenty_k: state.twenty_k,
        forty_k: state.forty_k,
        account_details: state.acc_details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Atm))

export default App 