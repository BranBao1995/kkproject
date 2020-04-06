import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from '../../axios-post';

import Div from '../../hoc/div/div';
import ImageContainer from './imageContainer';
import Backdrop from './backdrop';
import classes from './image.css';


class Image extends Component {
    
    state = {
        
        show: false
        
        
    }
    
    showBackdrop = () => {
        
        this.setState({show: true});
            
    }
    
    hideBackdrop = () => {
        
        this.setState({show: false});
        
    }
    
    
    render(){
        
        
        
        
        return (
            
            <Div>
            
                <ImageContainer imageUrl={this.props.imageUrl} altText={this.props.altText} onShow={this.showBackdrop} />
                
                <Backdrop imageUrl={this.props.imageUrl} altText={this.props.altText} onHide={this.hideBackdrop} show={this.state.show} />
            
            
            </Div>
            
            
            )
        
        
    }
    
    
};


export default Image;