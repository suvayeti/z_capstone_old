import React from 'react';
import {withRouter } from "react-router-dom";

import RouteButton from '../../components/common-components/route-button/route-button.component'
import ReadMore from '../../components/common-components/read-more/read-more.component'
import {Media} from 'react-bootstrap'
import './about-us.styles.css'
// import ContentContainer from '../../components/common-components/content-container/content-container.component';




class AboutUs extends React.Component{
    constructor(props){
        super(props)
        this.state={
           
            readMore:false,
            items:[
                {
                    id:1,
                    title:'about us',
                    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                    isBackgroundColor :true,
                },
                {
                    id:2,
                    title:'contact us',
                    linkToContactForm:'Have a question?',
                    description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose',
                    imageURL:'https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap.jpg',
                    isBackgroundColor:true,
                    linkURL: 'contactus',
                }
            ]
        }
        
    }
   
    render(){
        const linkName=this.state.readMore?'Read Less << ':'Read More >> ';
        // this.setState({readMore:true})
       

        return(
<>  
            
            <div className = 'container-about-page'>
                
                {
                    
                    this.state.items.map(item=>{
                        return (

                            <div>
                            <Media > 
                            <Media.Body 
                            className = {item.isBackgroundColor?'background-color':null} 
                            >

                               
                                
                                
                                <h5>{item.title}</h5>
                                <h5 
                                onClick={()=>item.linkURL?this.props.history.push(`${item.linkURL}`):null}
                                className = {item.linkToContactForm? 'btn-style-div':null}>{item.linkToContactForm}
                                
                                </h5>
                                <p >
                                <ReadMore 
                                
                   
                                text={item.description}
                                min={100}
                                ideal={150}
                                max={400}
                                readMoreText={linkName}
                                
                                // {item.description}
                                />
                               
                                </p> 

                                
                            </Media.Body>
                            {item.imageURL?<img
                                width={200}
                                height={200}
                                className="ml-3"
                                src={item.imageURL}
                                alt="Generic placeholder"
                            />:null}
                            </Media>
                            <div className='break-component-color'>.</div>
                        </div>
                        )
                    })
                   
                }
                
                <RouteButton path="/" title="Go to Main Page" />
          
            </div>
            
            </>
        )
    }
}
    
export default withRouter(AboutUs);