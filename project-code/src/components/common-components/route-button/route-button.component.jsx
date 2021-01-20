import React from 'react';
import { useHistory } from "react-router-dom";

import CustomButton from '../custom-button/custom-button.component';


const RouteButton=(props)=> {
  //  console.log( props)
  const history = useHistory();
  const routeTo = () => history.push(`${props.path}`);

  return (
   <div>
     
   <CustomButton onClick={routeTo}>{props.title}</CustomButton>
   </div>
  );
}

export default RouteButton;