import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import RouteButton from '../common-components/route-button/route-button.component'
import CustomButton from '../common-components/custom-button/custom-button.component';
import './collection-preview.styles.css'
import CardLayout from '../common-components/collection-card-layout/card-layout.component';


const CollectionPreview = ({title, items})=>{
    const [count, setCount] = useState(3);
    // console.log(items.length)
    return(
    
    <div>
        
        <div className='collection-title'>{title.toUpperCase()}</div>
            <div ><CardLayout className = 'card-container' items={items} count={count} /></div>
            <div className='layout-position'>
                {items.length>count?
                    <CustomButton
                        className = 'modified-btn-style' 
                        onClick={()=>{setCount(items.length+1)}}>
                        Load More...             
                    </CustomButton>
                                    :null}

            </div>
           

            <div className="link-div-style">
                <RouteButton path="/" title="Go to Main Page" />
            
                <div><Link to='/registration/register' style={{textDecoration:'underline'}}>No Account?  </Link>   
                    or<Link to='/login' style={{textDecoration:'underline'}}>  Already Have Account?</Link>
                </div>
            </div> 
        </div>
     

)}
export default CollectionPreview;