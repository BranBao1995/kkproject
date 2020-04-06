import React from 'react';


import classes from './imageContainer.css';


const imageContainer = (props) => {
    
    
    return(
        
            <div className={classes.container} onClick={props.onShow}>
                
                <img src={props.imageUrl} alt={props.altText} />
                
            </div>
        
        )
    
    
};


export default imageContainer;