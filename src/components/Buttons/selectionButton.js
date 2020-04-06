import React from 'react';


import classes from './selectionButton.css';


const selectionButton = (props) => {
    
        let tempStyle = null;
        
        
        if(props.activeStyle){
            
            tempStyle={
                backgroundColor: '#3b3b3b',
                color: 'white'
            }
            
        } else {
            
            tempStyle = null;
            
        }
    
    
        return (
            
                
                <div className={classes.selectionButton} onClick={props.clicked} style={tempStyle}>
                
                    {props.name}
                
                </div>
            
            
            );
    
    
    
};


export default selectionButton;