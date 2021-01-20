import React from 'react';
import {Route, Switch} from 'react-router-dom';

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
import Services from './pages/registration-steps/services/services.component'
import PaymentPage from './pages/registration-steps/payment/payment.component';
import PlaceOrder from './pages/registration-steps/place-order/place-order.component';


import Header from './components/common-components/header/header.component';
// import ProgressSteps from './components/registration-step/registration-steps.component';


function App() {
  return (
    <div className='body'>
      <Header />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/booktour' component={BookTour} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/contactus' component={ContactForm} />
          <Route path='/rentalcollection' component={RentalCollection} />
          <Route path='/login' component={LogInLogOffPage} />
          
          {/* <ProgressSteps /> */}
        
          
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
