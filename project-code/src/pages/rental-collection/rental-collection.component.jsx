import React from 'react';
// import {Link} from 'react-router-dom'

// import BackButton from '../../components/common-components/back-button/back-button.component'
import CollectionPreview from'../../components/rental-collection-preview/collection-preview.component'
import SERVICE_PACKAGE_LIST from './service-package.data'
import './rental-collection.styles.css'


class RentalCollection extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            collections:SERVICE_PACKAGE_LIST
        }
    }

    render(){
        const {collections} = this.state
        // console.log(collections)
        return (
       
        <>
        
           <div className='display-package-frame'>
                {
                collections.map(({id, ...otherCollectionsProps}) =>(
                    
                    <CollectionPreview key={id} {...otherCollectionsProps} />
                    
                ))
                }
            </div>
            



            

            {/* <div className="link-div-style">
                <BackButton path="/" title="Go to Main Page" />

                <div><Link to='/register'>No Account?</Link> 
                    or <Link to='#'>Already Have Account?</Link>
                </div>
            </div> */}
            
        </>
        )
    }
}

export default RentalCollection;