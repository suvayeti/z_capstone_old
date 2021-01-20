import React from 'react';

import RouteButton from '../../components/common-components/route-button/route-button.component'

import './contact-us-form.styles.css'
import ContentContainer from '../../components/common-components/content-container/content-container.component';


class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }
    
    render(){
        
        return(
<>  
            
            <div className = 'container-about-page'>
              <ContentContainer>

                <h1>Contact Form</h1>
              </ContentContainer>
             
                
                <RouteButton path="/" title="Go to Main Page" />
          
            </div>
            
            </>
        )
    }
}
    
export default ContactForm;