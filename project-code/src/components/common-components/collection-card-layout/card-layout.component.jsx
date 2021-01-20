import React from 'react';


import './card-layout.styles.css'

const CardLayout = ({children, items, count, ...otherProps})=>{
    return(
        <div className="card-deck-container">
                <div className="card-body text-center card-deck-container">
                {items
                    .filter((item,idx)=>idx<count)
                    .map(item=>(
                    <div {...otherProps} >
                    <img className="card-img-top d-block mx-auto img-fluid img-layout" src={item.imageURL} alt="" />
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <p className="card-text">{item.description}</p>
                    {children}
                </div>
                ))} 
               
                </div>
               
            </div>
    )
}
export default CardLayout;