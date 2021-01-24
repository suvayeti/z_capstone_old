import React, { useEffect } from 'react';
import {Route, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
import MainPage from './pages/mainpage/mainpage.component';
import BookTour from './pages/book-tour/book-tour.component';
import AboutUs from './pages/about-us/about-us.component';
import ContactForm from './pages/contact-us/contact-us-form.component';
// import RegistrationPage from './pages/registrationpage/registrationpage.component';
import RentalCollection from './pages/rental-collection/rental-collection.component'
import LogInLogOffPage from './pages/log-in-log-off/log-in-log-off.component';
import Packages from './pages/registration-steps/packages/packages.component';
import RegisterPage from './pages/registration-steps/register/register.component'
import Register from './pages/registration-steps/register/Register.js'
import Services from './pages/registration-steps/services/services.component'
import PaymentPage from './pages/registration-steps/payment/payment.component';
import PlaceOrder from './pages/registration-steps/place-order/place-order.component';
import Header from './components/common-components/header/header.component';
import RegisterComplete from './pages/registration-steps/register/RegisterComplete.js'


// import ProgressSteps from './components/registration-step/registration-steps.component';
import firebase from './pages/registration-steps/register/firebaseAuth'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const unsubcribe = firebase.auth().onAuthStateChanged( async (user)=>{
      if(user){
        const idTokenResult = await user.getIdTokenResult()
        console.log(user)
        dispatch({
          type:'LOGGED_IN_USER',
          payload:{
            email:user.email,
            token:idTokenResult.token
          }
        })


      }
    })
    //clean up
    return () =>unsubcribe();
  },[])

  return (
    <div className='body'>
      <Header />
      <ToastContainer/>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/booktour' component={BookTour} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/contactus' component={ContactForm} />
          <Route path='/rentalcollection' component={RentalCollection} />
          <Route path='/login' component={LogInLogOffPage} />
          
          {/* <ProgressSteps /> */}
          <Route path='/register' component={Register} />
          
            <Route path='/registration/register/register' component={Register} />
            <Route path='/registration/register/complete' component={RegisterComplete} />
            <Route path='/registration/register' component={RegisterPage} />
            <Route path='/registration/packages' component={Packages} />
            <Route path='/registration/services' component={Services} />
            <Route path='/registration/payment' component={PaymentPage} />
            <Route path='/registration/order' component={PlaceOrder} />
          
        </Switch>
      
    </div>
  );
}

export default App;
