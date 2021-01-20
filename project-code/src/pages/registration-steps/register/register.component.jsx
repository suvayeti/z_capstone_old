import React from 'react';
import {Form, Col} from 'react-bootstrap'

import './register.styles.css';

import PROGRESS_STEP_DATA from './progress-step-data';
import ContentContainer from '../../../components/common-components/content-container/content-container.component';
import RouteButton from '../../../components/common-components/route-button/route-button.component';

import CustomButton from '../../../components/common-components/custom-button/custom-button.component'
import ProgressStep from '../../../components/progress-step/progress.component';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            referralId:'',
            userType:'',
            // userRole:'',
            firstName: '',
            lastName: '',
            address1:'',
            address2:'',
            city:'',
            province:'',
            postalCode:'',
            country:'',
            email:'',
            phone:'',
            mobile:'',
            password:'',
            confirmPassword: '',
            companyName:'',
            contactFirstName:'',
            contactLastName:'',
            contactMobile:'',
            contactEmail:'',
            data:PROGRESS_STEP_DATA
        }
        
    }

    handleSubmit = event=>{

        event.preventDefault();
        const {password,confirmPassword, province, userType} = this.state;
       
        if(password!==confirmPassword){
            alert("passwords don't match");
            return;
        }
        if((province && userType) === ''){
            alert("select option from the dropdown menu");
            return;
        }
    
        
        this.setState({
            
            referralId:'',
            userType:'',
            // userRole:'admin',
            firstName: '',
            lastName: '',
            address1:'',
            address2:'',
            city:'',
            province:'',
            postalCode:'',
            country:'',
            email:'',
            phone:'',
            mobile:'',
            password:'',
            confirmPassword: '',
            showForm: true,
        })
        
        this.props.history.push('/registration/packages')
        alert("form submitted")
    }

    handleChange = event=>{
        const {value, name} = event.target;
        // console.log(value)
        
        value==='Individual'?
        this.setState({[name]:value, showForm:true, disabled:true}):
        this.setState({[name]:value,showForm:true})
        
        value==='Corporate'?
        this.setState({[name]:value, showForm:true, disabled:false}):
        this.setState({[name]:value,showForm:true})
    }
    render(){
        const {showForm, disabled} = this.state;
        const {data} = this.state.data;
    return (
        <>
        <div className='registration-container'>
            <ProgressStep data={data} />
            <h1 className='registration-title'>Clients Details</h1>
            <ContentContainer>
            <div>
                <div className='form-container'>
                <Form onSubmit = {this.handleSubmit}>
                
                {/* INITIAL DISPLAY */}
                    <Form.Row className='form-top-margin'>
                        <Form.Group as={Col} controlId="formGridRefferal">
                            {/* <Form.Label>Referral Id</Form.Label> */}
                            <Form.Control
                                onChange={this.handleChange} 
                                type="text" 
                                name="referralId"
                                placeholder="Refferal Id" 
                                value = {this.state.referralId}
                                disabled = {true}
                                />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridClientType">
                            {/* <Form.Label>Client Type</Form.Label> */}
                            <Form.Control 
                                as="select" 
                                // defaultValue="Individual"
                                name="userType"
                                value = {this.state.userType}
                                onChange={this.handleChange}
                                required ={true}
                                >
                                <option >Client Type</option>
                                <option >Individual</option>
                                <option>Corporate</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                {/* CONDITIONAL DISPLAY */}
                {showForm?
                <div>
                        <Form.Group controlId="formGriCompanyName">
                        {/* <Form.Label>Company Name</Form.Label> */}
                        <Form.Control 
                            type="text" 
                            disabled={disabled}
                            placeholder={!disabled? 'Company Name':'disabled'}
                            onChange={this.handleChange} 
                            name="companyName"
                            value = {this.state.companyName}
                            required ={true}
                            />
                        </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            {/* <Form.Label>First Name</Form.Label> */}
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="text" 
                                name={disabled? "firstName":"contactFirstName"}
                                // disabled={!disabled}
                                placeholder={disabled?'First Name':'Contact Person First Name'}
                                value = {disabled?this.state.firstName:this.state.contactFirstName}
                                required ={true}
                                />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLastName">
                            {/* <Form.Label>Last Name</Form.Label> */}
                            <Form.Control 
                                type="text" 
                                placeholder={disabled?'Last Name':'Contact Person Last Name'} 
                                // disabled={!disabled}
                                onChange={this.handleChange} 
                                name={disabled? "lastName":"contactLastName"}
                                value = {disabled?this.state.lastName:this.state.contactLastName}
                                required ={true}
                                />
                        </Form.Group>
                    </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            {/* <Form.Label>Address 1</Form.Label> */}
                            <Form.Control 
                                type="text" 
                                placeholder="1234 Main St" 
                                onChange={this.handleChange} 
                                name="address1"
                                value = {this.state.address1}
                                required ={true}
                                />
                        </Form.Group>
                        <Form.Group controlId="formGridAddress2">
                            {/* <Form.Label>Address 2</Form.Label> */}
                            <Form.Control 
                                type="text" 
                                placeholder="Apartment, studio or floor" 
                                onChange={this.handleChange} 
                                name="address2"
                                value = {this.state.address2}
                                />
                        </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        {/* <Form.Label>City</Form.Label> */}
                        <Form.Control 
                            type="text" 
                            placeholder="City"
                            onChange={this.handleChange} 
                            name="city"
                            value = {this.state.city}
                            required ={true}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridProvince">
                            {/* <Form.Label>Province</Form.Label> */}
                            <Form.Control 
                                as="select" 
                                // defaultValue="Choose..."
                                name="province"
                                value = {this.state.province}
                                onChange={this.handleChange}
                                required>
                                <option>Province</option>
                                <option>AB</option>
                                <option>BC</option>
                                <option>MB</option>
                                <option>NB</option>
                                <option>NL</option>
                                <option>NT</option>
                                <option>NS</option>
                                <option>NU</option>
                                <option>ON</option>
                                <option>PE</option>
                                <option>QC</option>
                                <option>SK</option>
                                <option>YT</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPostalCode">
                            {/* <Form.Label>Postal Code</Form.Label> */}
                            <Form.Control 
                                type="text" 
                                placeholder="Postal Code"
                                name="postalCode"
                                value = {this.state.postalCode}
                                onChange={this.handleChange}
                                required ={true}
                                >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCountry">
                            {/* <Form.Label>Country</Form.Label> */}
                            <Form.Control 
                            type="text" 
                            placeholder="Country"
                            name="country"
                            value = {this.state.country}
                            onChange={this.handleChange}
                            required ="true"
                            />
                        </Form.Group>
                    </Form.Row>
                
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPhone">
                            {/* <Form.Label>Phone</Form.Label> */}
                            <Form.Control 
                                type="phone" 
                                placeholder="Phone" 
                                name="phone"
                                value = {this.state.phone}
                                onChange={this.handleChange}
                                />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMobile">
                            {/* <Form.Label>Mobile</Form.Label> */}
                            <Form.Control 
                                type="phone" 
                                placeholder="Mobile" 
                                name="mobile"
                                value = {this.state.mobile}
                                onChange={this.handleChange}
                                required ={true}
                                />
                        </Form.Group>
                    </Form.Row>

                {/* USER LOGIN CREDENTIALS */}
                <div className = 'user-login-credentials'>
                        <p className='credential-title-style'>User Login Credentials</p>
                        <Form.Group controlId="formGridEmail">
                            {/* <Form.Label>Email</Form.Label> */}
                            <Form.Control 
                                type="email"  
                                placeholder="Email" 
                                name="email"
                                value = {this.state.email}
                                onChange={this.handleChange}
                                required ={true}
                                />
                        </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control 
                            type="password" 
                            placeholder="Create Password" 
                            name="password"
                            value = {this.state.password}
                            onChange={this.handleChange}
                            required ={true}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridConfirmPassword">
                            {/* <Form.Label>Confirm Password</Form.Label> */}
                            <Form.Control 
                                type="password" 
                                placeholder="Confirm Password" 
                                name="confirmPassword"
                                value = {this.state.confirmPassword}
                                onChange={this.handleChange}
                                required ={true}
                                />
                        </Form.Group>
                    </Form.Row>
                </div>

                {/* CONTACT PERSON INFORMATION */}
                    {/* <Form.Row>
                        <Form.Group as={Col} controlId="formGridContactFirstName">
                           
                            <Form.Control 
                                onChange={this.handleChange} 
                                type="text" 
                                name="contactFirstName"
                                disabled={disabled}
                                placeholder={!disabled? 'Contact Person First Name':'disabled'}
                                value = {this.state.contactFirstName}
                                required
                                />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridContactLastName">
                         
                            <Form.Control 
                                type="text"
                                disabled={disabled} 
                                placeholder={!disabled? 'Contact Person Last Name':'disabled'}
                                onChange={this.handleChange} 
                                name="contactLastName"
                                value = {this.state.contactLastName}
                                required 
                                />
                        </Form.Group>
                    </Form.Row> */}

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridContactEmail">
                            {/* <Form.Label>Contact Person Email</Form.Label> */}
                            <Form.Control 
                            disabled={disabled}
                            type="email" 
                            placeholder={!disabled? 'Contact Person Email':'disabled'}
                            name="contactEmail"
                            value = {this.state.contactEmail}
                            onChange={this.handleChange}
                            required ={true}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridContactMobile">
                            {/* <Form.Label>Contact Person Mobile</Form.Label> */}
                            <Form.Control 
                                type="phone" 
                                disabled={disabled}
                                placeholder={!disabled? 'Contact Person Mobile':'disabled'}
                                name="contactMobile"
                                value = {this.state.contactMobile}
                                onChange={this.handleChange}
                                required ={true}
                                />
                        </Form.Group>
                    </Form.Row>
                    
                        <Form.Group>
                            <Form.Check
                                label="My billing details are same as above"/>
                            <Form.Check
                                required
                                label="By signing up, you agree to TWM's Terms of Service and Private Policy"
                                feedback="You must agree before submitting."/>
                        </Form.Group>

                        <div className='continue-btn-position'>
                        <CustomButton type='submit' onClick={this.handleSubmit}>
                            Continue
                        </CustomButton>
                        {/* <button type='submit' onClick={this.handleSubmit}>continue</button> */}
                       
                        </div>
                    
                </div>:null}  
                </Form>
                </div>
            </div>
                {/* <Register/> */}
            </ContentContainer>
          
        </div>
        <div style={{margin:'0 50px'}}>
            <RouteButton path="/" title="Go to Main Page" /> 
        </div>
        
        </>
        );

    }
}

export default RegisterPage;






