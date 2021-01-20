import React from 'react';

import ContentImage from '../mainpage-content-image/content-image.component'

import './preview-section.styles.css';


class Preview extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            sections:[{
                id:1,
                description:'you will love your new workspace',
                imageURL:'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
                btn:"Book Tour",
                linkURL: 'booktour'
            },
            {
                id:2,
                description:'something about register',
                imageURL:'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
                layout:'reverse',
                btn:"Register",
                linkURL: 'registration/register'
            },
            {
                id:3,
                description:'something about packages',
                imageURL:'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
                btn:"Collection List",
                linkURL: 'rentalcollection'
            },
            {
                id:4,
                description:'something about About Us',
                imageURL:'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
                layout:'reverse',
                btn:"About Us",
                linkURL: 'aboutus',
                contactForm: true
            }]
        }
    }

    render(){
        return(
            <div className="preview-section">
                {
                this.state.sections.map(({id, ...otherSectionsProps}) =>(
                    <ContentImage key={id} {...otherSectionsProps} />
                ))
                }
            </div>
        )
    }

}

export default Preview;