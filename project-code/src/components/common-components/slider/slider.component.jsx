import React from 'react';
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './slider.styles.css';


const SlidesSlider = ({items,bgcolor, ...settings})=>{
    
    return (
    <Slider {...settings} > 
        {items.map((item)=>{
            return(
                <div className='testimonial-card-frame'>
                    <img className="testimonial-image" src={item.imageURL} alt="" />
                    <div className= 'testimonial-content'>
                        <h5 className="testimonial-description">{item.description}</h5>
                        <p className="testimonial-person">{item.clientName}</p>
                        <p className="testimonial-person">{item.companyName}</p>
                    </div>
                </div>
            )
        })}
    </Slider> 
)}

export default SlidesSlider;