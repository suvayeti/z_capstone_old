import React from 'react';

import {withRouter} from 'react-router-dom'

import './services.styles.css';
import PROGRESS_STEP_DATA from './progress-step-data';

import CustomButton from '../../../components/common-components/custom-button/custom-button.component';
import RouteButton from '../../../components/common-components/route-button/route-button.component';
// import ContentContainer from '../../../components/common-components/content-container/content-container.component';
import ProgressStep from '../../../components/progress-step/progress.component';
import PACKAGE_SERVICE_LIST from '../../rental-collection/service-package.data';
import CardLayout from '../../../components/common-components/collection-card-layout/card-layout.component';
class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:PROGRESS_STEP_DATA,
            collections:PACKAGE_SERVICE_LIST
        }
    }
    render(){
        const {data} = this.state.data;
        const {items} = this.state.collections[1]
        return (
            <div className='service-container'>
                    <ProgressStep data={data} />
                    <h1 className='registration-title'>Other Services</h1>
                {/* <ContentContainer> */}
                    <div>
                        <CardLayout className = 'card-service-container' items={items} count={items.length}>
                            <div style={{color:'black'}}><h1>Add to Card</h1></div>
                        </CardLayout>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <RouteButton path='/registration/packages' title='Back' />

                        <CustomButton type='submit' onClick={()=>this.props.history.push('/registration/payment')}>
                                    Continue
                        </CustomButton>
                    </div>
                {/* </ContentContainer> */}
            </div>
        );

    }

    
}

export default withRouter(Services);