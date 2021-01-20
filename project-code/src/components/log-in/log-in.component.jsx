import React from 'react';

import {Link} from 'react-router-dom'
import ContentContainer from '../common-components/content-container/content-container.component';

import CustomButton from '../common-components/custom-button/custom-button.component';

import FormInput from '../common-components/form-input/form-input.component';

import './log-in.styles.css';

class LogIn extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password:''
        }
    }
    handleSubmit = event=>{
        alert("Logged In")
        event.preventDefault();
        
        this.setState({
            
            email:'',
            password:''
        })
        
    }

    handleChange = event=>{
        const {value, name} = event.target;
        
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div>
                <h2 className='login-title'>LogIn</h2>
                <div className='login-container'>
                <ContentContainer>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput
                        label='User Id'
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange}
                        value = {this.state.email}
                        placeholder = 'email address' 
                        required 
                    />
                    
                    <FormInput 
                        label='Password'
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange}
                        value = {this.state.password} 
                        placeholder = 'password'
                        required 
                    />
                    <div className='btn-link-style'>
                        <p ><Link className='link'>Forgot Password?</Link></p>
                        <CustomButton type='submit'>Login</CustomButton>
                    </div>
                </form>
                </ContentContainer>
                </div>
            </div>
        )
    }
    
}

export default LogIn;