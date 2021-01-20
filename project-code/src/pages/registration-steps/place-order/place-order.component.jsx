import React from 'react';
import {withRouter} from 'react-router-dom';

import PROGRESS_STEP_DATA from './progress-step-data';

import CustomButton from '../../../components/common-components/custom-button/custom-button.component'
import RouteButton from '../../../components/common-components/route-button/route-button.component';
import ContentContainer from '../../../components/common-components/content-container/content-container.component';

import ProgressStep from '../../../components/progress-step/progress.component';

import './place-order.styles.css';


class PlaceOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:PROGRESS_STEP_DATA
        }
    }
    handleClick(){
        alert("WELCOME to the world of TWM")
        this.props.history.push('/login')
    }
    render(){
        const {data} = this.state.data;
        return (
            <div className='place-order-container'>
                    <ProgressStep data={data} />
                    <h1 className='registration-title'>Place Order</h1>
                <ContentContainer>
                    
                    
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <RouteButton path='/registration/payment' title='Back' />

                        <CustomButton onClick={()=>this.handleClick()}>
                                    Continue
                        </CustomButton>
                    </div>

                </ContentContainer>


                

            </div>
        );

    }

    
}

export default withRouter(PlaceOrder);