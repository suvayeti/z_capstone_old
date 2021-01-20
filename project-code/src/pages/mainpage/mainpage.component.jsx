import React from 'react';

import Preview from '../../components/mainpage-preview-section/preview-section.component'
import Testimonial from '../../components/testimonial-preview/testimonial.component'
import ContentContainer from '../../components/common-components/content-container/content-container.component'

import './mainpage.styles.css'

const MainPage = ()=>(

    <div className='mainpage'>
        <Preview />
        <ContentContainer>
            <Testimonial />
        </ContentContainer>
       
        <h3>hello footer</h3>
        
    </div>
)

export default MainPage