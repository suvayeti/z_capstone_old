import React from 'react';

import './form-input.styles.css';

const FormInput = ({handleChange, label, ...otherProps})=>(
  
        <div className='group'>
                <div className='label'>{label}</div>
                <input
                    className = 'form-input' 
                    onChange={handleChange}
                    {...otherProps}
                />
        </div>
)

export default FormInput;