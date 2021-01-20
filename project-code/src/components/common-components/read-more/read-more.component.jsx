import React from 'react';
import ReadMoreReact from 'read-more-react';
 
const ReadMore = (props)=> {
console.log(props)
        return (
            <ReadMoreReact 
                text={props.text}
                min={props.min}
                ideal={props.ideal}
                max={props.max}
                readMoreText={props.readMoreText} 
            />
        ) 
}

export default ReadMore;