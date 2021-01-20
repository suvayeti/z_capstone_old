import React from 'react';
import Code from './title-code.component';
import Steps from 'react-steps';

const ProgressStep=({data}) =>(
    <div style={{fontSize: '20px', fontFamily: "Montserrat"}}>
        <Code title='Registration Steps'/>
        <Steps items={data} type={'point'} styles={{main: {fontFamily: "Montserrat"}}}/>
    </div>
    );

export default ProgressStep;