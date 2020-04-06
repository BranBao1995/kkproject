import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from '../../../axios-post';
import { Transition } from 'react-transition-group';

import Div from '../../../hoc/div/div';
import Image from '../../../components/image/image';
import classes from './cabinets.css';

import * as actions from '../../../store/actions/index';
import errorHandler from '../../../hoc/errorHandler/errorHandler';

class Cabinets extends Component {
    
    state = {
        
        showGallery: false
        
    }
    
    componentDidMount () {
        
        this.setState({showGallery: true});
        
    }
    
    fetchAll = () => {
        
        this.props.fetch('cabinets', 'all');
        
    }
    
    
    fetchLivingroom = () => {
        
        
        this.props.fetch('cabinets', 'livingroom');
        
    }
    
    
    fetchBedroom = () => {
        
        
        this.props.fetch('cabinets', 'bedroom');
        
    }
    
    
    fetchKitchen = () => {
        
        
        this.props.fetch('cabinets', 'kitchen');
        
    }
    
    
    render(){
        
        
        let content = null;
        
        const animationStyle = [classes.container, classes.container_animation];
        
        const activeStyle = {
            
            color: 'white',
            backgroundColor: '#9e9e9e',
            borderTop: 'none',
            borderBottom: 'none'
            
        }
        
        
        if(this.props.imageList) {
            
            
            content = this.props.imageList.map(el => {
                
                return (
                    
                    <Image key={el.id} imageUrl={el.image_url} altText={el.image_id} />
                    
                    )
                
            });
            
        } else {
            
            content = null;
            
        }
        
        
        return (
            
            <Transition in={this.state.showGallery} timeout={1500}>
            
                {state => (
                
                    <div className={state === 'entering' ? animationStyle.join(' ') : classes.container}>
            
                        <div className={classes.categories}>
                        
                            <div onClick={this.fetchAll} style={this.props.childButton == 'all' ? activeStyle : null}>
                                All
                            </div>
                        
                            <div onClick={this.fetchLivingroom} style={this.props.childButton == 'livingroom' ? activeStyle : null}>
                                Living Room
                            </div>
                                
                            <div onClick={this.fetchKitchen} style={this.props.childButton == 'kitchen' ? activeStyle : null}>
                                Kitchen
                            </div>
                            
                            <div onClick={this.fetchBedroom} style={this.props.childButton == 'bedroom' ? activeStyle : null}>
                                Bedroom
                            </div>
                        
                        </div>
                        
                        <div className={classes.photos}>
                        
                            {content}
                        
                        </div>
                    
                    </div>
                
                
                )}
            
            </Transition>
            
            
            
            )
        
        
    }
    
    
}

const mapStateToProps = state => {
    
    return {
        
        childButton: state.gallery.childButton
        
    }
    
}



const mapDispatchToProps = dispatch => {
    
    return {
        
        fetch: (parentNode, childNode) => dispatch(actions.fetchGallery(parentNode, childNode))
        
    }
    
}


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Cabinets, axios));