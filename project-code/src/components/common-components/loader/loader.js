import React from 'react';

const Loader = ()=> {
    return (
        <div style={{height: 800 }} className="ui segment">
            <div className="ui active dimmer">
            <div className="ui massive text loader">Loading...</div>
            </div>  
      </div>
    )
}

export default Loader;