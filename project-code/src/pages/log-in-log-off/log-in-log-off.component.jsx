import React from 'react';

import LogIn from '../../components/log-in/log-in.component'

import './log-in-log-off.styles.css';

// const LogInLogOffPage = ()=>(
//     <LogIn />
// )

// export default LogInLogOffPage;

export default class LogInLogOffPage extends React.Component{
    render(){
        return(
            <div>
                <LogIn { ...this.props} />
            </div>

        )
    }
}