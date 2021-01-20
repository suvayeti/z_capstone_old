import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import CustomButton from '../common-components/custom-button/custom-button.component'

import './content-image.styles.css';

const ContentImage = ({description, imageURL, contactForm, layout, btn, history, match, linkURL})=>(
    <>
    
        <div className= "container-frame" >
        
            {layout?
                <>
                    <div className = 'content'>
                        <h3 className="title">{description}</h3>
                        <div className='contact-form-link'>{contactForm?<p><Link to='/contactus'>Have a question?</Link></p>:null}</div>
                        <CustomButton
                            className='override-btn-css'
                            onClick={()=>history.push(`${match.url}${linkURL}`)}>
                            {btn}
                        </CustomButton>
                    </div>
                    <div style={{backgroundImage: `url(${imageURL})`}} 
                        className='image'>   
                    </div>
                    
                </>:
                <>
                    <div style={{
                        backgroundImage: `url(${imageURL})`}}  
                        className={`${layout} image`}>
                    </div>
                    <div className = {`${layout} content `}>
                        <h3 className="title">{description}</h3>
                        
                        
                        
                        
                        <CustomButton
                            className='override-btn-css'  
                            onClick={()=>history.push(`${match.url}${linkURL}`)}>
                            {btn}
                        </CustomButton>
                    </div>
                    
                </>
            }
        </div>
    </>
);

export default withRouter(ContentImage);