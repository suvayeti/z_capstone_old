import React, { Component } from 'react';
// import TestimonialLayout from '../testimonial-content/layout.component'

import SlidesSlider from '../common-components/slider/slider.component'
// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";


import './testimonial.styles.css'

class Testimonial extends Component {
    constructor(props){
        super(props)
        this.state = {
            items:[{
                id:1,
                description:'you will love your new workspace',
                imageURL:'https://i.pinimg.com/564x/b9/4a/6e/b94a6e8a6353d98fa5bb695f8e0ab28f.jpg',
                clientName: 'james',
                companyName:'abc',
            },
            {
                id:2,
                description:'something about registersomething about register',
                imageURL:'https://i.pinimg.com/564x/b9/4a/6e/b94a6e8a6353d98fa5bb695f8e0ab28f.jpg',
                clientName: 'james',
                companyName:'abc',
                layout:'bgclear',
            },
            {
                id:3,
                description:'something about contactpage',
                imageURL:'https://i.pinimg.com/564x/b9/4a/6e/b94a6e8a6353d98fa5bb695f8e0ab28f.jpg',
                clientName: 'james',
                companyName:'abc',
            },
            {
                id:4,
                description:'something about contactpage',
                imageURL:'https://i.pinimg.com/564x/b9/4a/6e/b94a6e8a6353d98fa5bb695f8e0ab28f.jpg',
                clientName: 'james',
                companyName:'abc'
            },
            {
                id:5,
                description:'something about contactpage',
                imageURL:'https://i.pinimg.com/564x/b9/4a/6e/b94a6e8a6353d98fa5bb695f8e0ab28f.jpg',
                clientName: 'james',
                companyName:'abc',
            },
            {
                id:6,
                description:'something about contactpage',
                imageURL:'https://i.pinimg.com/564x/b9/4a/6e/b94a6e8a6353d98fa5bb695f8e0ab28f.jpg',
                clientName: 'james',
                companyName:'abc'
            },
        ]
        }
    }
    

  render () {
    const settings = {
        dots: true,
        infinite: true,
        pauseOnHover: true,
        speed: 3000,
        autoplay: true,
        playDirection:'forward',
        slidesToShow: 3,
        slidesToScroll: 2,
        className:'slides',
        arrows:false
      };
    const {items}=this.state
    return (
        <div className='testimonial-container'>
        
        <div className='testimonial-title'>
                <h3>User Experience</h3>
        </div>
        
        <SlidesSlider items={items} {...settings} />

     </div>
    )
  }
}

export default Testimonial 
