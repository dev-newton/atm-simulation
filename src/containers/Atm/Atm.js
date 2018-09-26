import React, { Component } from 'react'
import Title from '../../components/Title/Title'
import Pin from '../../components/Pin/Pin'
import Name from '../../components/Name/Name'
import Operation from '../../components/Operation/Operation'
import Withdrawal from '../../components/Operation/Withdrawal/Withdrawal'
import WithdrawSuccess from '../../components/Operation/Withdrawal/WithdrawSuccess'
import CheckBalance from '../../components/Operation/CheckBalance/CheckBalance'
import ChangePin from '../../components/Operation/ChangePin/ChangePin'
import CreateAccount from '../../components/CreateAccount/CreateAccount'
import { Route, Link } from 'react-router-dom'
import './Atm.css'

class Atm extends Component {
    render () {
        console.log(this.props)
        return (
            <div className="">
            <div className="bgImage"></div>
                <Link to="/">
                    <Title title={'Diamond Bank'} />
                </Link>
                <Route path="/" exact render={({history}) => (
                    <div>
                        <Name {...this.props} onHistory={history} />
                    </div>         
                    )} 
                />
                
                <Route path="/enterPin" render={() => (
                    <div>
                        <Pin {...this.props} />
                    </div>  
                )}
                 />
                <Route path="/operation" render={() => (
                    <div>
                        <Operation />
                    </div>  
                    )}
                />

                <Route path="/Withdrawal" render={() => (
                    <div>
                        <Withdrawal {...this.props} />
                    </div>  
                )}
                 />
                
                <Route path="/CheckBalance" render={() => (
                    <div>
                        <CheckBalance {...this.props} />
                    </div>  
                )}
                 />

                <Route path="/ChangePin" render={() => (
                    <div>
                        <ChangePin {...this.props} />
                    </div>  
                )}
                 />

                <Route path="/WithdrawSuccess" render={() => (
                    <div>
                        <WithdrawSuccess {...this.props} />
                    </div>  
                )}
                 />
                <Route path="/CreateAccount" render={() => (
                    <div>
                        <CreateAccount {...this.props} />
                    </div>  
                )}
                 />
            </div>
        )
    }
}

export default Atm