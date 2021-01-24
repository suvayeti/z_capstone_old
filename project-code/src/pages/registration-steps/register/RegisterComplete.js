import React, { useState, useEffect } from 'react';
// import  { auth,test }  from "./firebaseAuth.js"
import firebase from "./firebaseAuth.js"
import { toast } from 'react-toastify'


const RegisterComplete =({history}) =>{ 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    useEffect(() =>{
        setEmail(window.localStorage.getItem("emailForRegistration"))        
    },[])

    const handleSubmit= async (e)=>{
        e.preventDefault();
        // validate password
        if(!email || !password){
            toast.error('Email and password is required')
            return
        }
        if(password.length<2){
            toast.error('Password must be at least 6 ')
            return
        }

        try{
            const result=await firebase.auth().signInWithEmailLink(email,window.location.href)           
            if(result.user.emailVerified){
                //remove user email from local storageBucket
                window.localStorage.removeItem("emailForRegistration");
                //get user id tokens
                let user =firebase.auth().currentUser
                await user.updatePassword(password)
                const idTokenResult= await user.getIdTokenResult()      
                // console.log('User ', user, " Token ", idTokenResult)          
                //redux stored
                //redirect
                history.push('/')
            }
        }catch(err){
            console.log(err)
            toast.error(err.message)
        }
        
       
        };
    const completeRegistrationForm=()=>{
        return(
            <form onSubmit={handleSubmit}>
           
            <input 
                type ="email"
                className="form-control" 
                value={email}                
                disabled   
            />
            <input 
                type ="password"
                className="form-control" 
                value={password} 
                onChange= {e=>setPassword(e.target.value)}   
                placeholder="Enter the password"           
                autoFocus  
            />
            <br/>
            <button type="submit" className="btn btn-primary">Complete Registration</button>
            </form>
        )

    }
    return(
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                        <h4>Register Complete form goes here</h4>
                        
                        { completeRegistrationForm() }

                </div>   
            </div>
        </div>

    )

}
export default RegisterComplete;