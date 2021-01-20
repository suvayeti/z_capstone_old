import React from 'react';

import {withRouter} from 'react-router-dom';

import PROGRESS_STEP_DATA from './progress-step-data';

import CustomButton from '../../../components/common-components/custom-button/custom-button.component'
import RouteButton from '../../../components/common-components/route-button/route-button.component';
import ContentContainer from '../../../components/common-components/content-container/content-container.component';

import ProgressStep from '../../../components/progress-step/progress.component';

import './payment.styles.css';


class PaymentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:PROGRESS_STEP_DATA
        }
    }
    render(){
        const {data} = this.state.data;
        return (
            <div className='payment-container'>
                    <ProgressStep data={data} />
                    <h1 className='registration-title'>Payment Details</h1>
                <ContentContainer>
                    
                    
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <RouteButton path='/registration/services' title='Back' />

                        <CustomButton type='submit' onClick={()=>this.props.history.push('/registration/order')}>
                                    Continue
                        </CustomButton>
                    </div>

                </ContentContainer>


                

            </div>
        );

    }

    
}

export default withRouter(PaymentPage);