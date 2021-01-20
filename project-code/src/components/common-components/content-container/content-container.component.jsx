import React from 'react';

import './content-container.styles.css'

const ContentContainer = ({children, ...otherProps})=>(
    <div className = "content-container" {...otherProps}>
        {children}
    </div>
)

export default ContentContainer;