import React, { useState } from 'react';
// import  { auth,test }  from "./firebaseAuth.js"
import firebase from "./firebaseAuth.js"
import { toast } from 'react-toastify'


const Register=() =>{ 
    const [email, setEmail] = useState("");

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log("ENV-->> ", process.env.REACT_APP_REGISTER_REDIRECT_URL)
        const config={
            url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        };
        await firebase.auth().sendSignInLinkToEmail(email,config)
        window.localStorage.setItem('emailForRegistration',email)
        toast.success(`Email is sent to ${email}. Click the link to complete your registration.`)
        setEmail("")
        };
    const registerForm=()=>{
        return(
            <form onSubmit={handleSubmit}>
            <h2>I am here</h2>
            <input 
                type ="email"
                className="form-control" 
                value={email} 
                onChange = {(e) => setEmail(e.target.value)}
                autoFocus   
            />
            <button type="submit" className="btn btn-primary">Register</button>
            </form>
        )

    }
    return(
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                        <h4>Register with gmail</h4>
                        
                        { registerForm() }

                </div>   
            </div>
        </div>

    )

}
export default Register;