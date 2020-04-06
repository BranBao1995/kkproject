import React from 'react';


import classes from './backdrop.css';


const backdrop = (props) => {
    
    let showImage = null;
        
        if(props.show){
            
            showImage = {
                
                visibility: 'visible',
                opacity: '1',
                zIndex: '50'
                
            }
            
        } else {
            
            showImage = {
                
                visibility: 'hidden',
                opacity: '0',
                zIndex: '-10'
                
            }
            
        }
    
    
    return (
        
        <div className={classes.backdrop} style={showImage} onClick={props.onHide}>
                
            <img src={props.imageUrl} alt={props.altText} />
                
        </div>
        
        )
    
};


export default backdrop;