import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from '../../axios-post';
import { Transition } from 'react-transition-group';

import Div from '../../hoc/div/div';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import SelectionButton from '../../components/Buttons/selectionButton';
import Countertops from './countertops/countertops';
import Cabinets from './cabinets/cabinets';
import classes from './gallery.css';

import * as actions from '../../store/actions/index';
import errorHandler from '../../hoc/errorHandler/errorHandler';


class Gallery extends Component {
    
    
    componentDidMount () {

        this.props.fetch('countertops', 'all');
        
        // this.setState({showGallery: true});
        

    }
    
    
    fetchCountertops = (parentNode, childNode) => {
        
        this.setState({Countertops: true, Cabinets: false});
        
        this.props.fetch(parentNode, childNode);
        
        
    }
    
    fetchCabinets = (parentNode, childNode) => {
        
        this.setState({Countertops: false, Cabinets: true});
        
        this.props.fetch(parentNode, childNode);
        
    
    }
    
    render(){
        
        let content = null;
        let countertopsButton = true;
        let cabinetsButton = false;
        
        if(this.props.parentButton == 'countertops') {
            
            countertopsButton = true;
            cabinetsButton = false;
            
            content = <Countertops imageList={this.props.images} />
            
            
        } else if (this.props.parentButton == 'cabinets') {
            
            countertopsButton = false;
            cabinetsButton = true;
            
            content = <Cabinets imageList={this.props.images} />
            
        }
        
        return (
            
            <Div classes={classes.container}>
                
                <Nav />
                <div className={classes.select}>
                    
                    <SelectionButton name="Countertops" activeStyle={countertopsButton} clicked={() => this.fetchCountertops('countertops', 'all')} />
                    <SelectionButton name="Cabinets" activeStyle={cabinetsButton} clicked={() => this.fetchCountertops('cabinets', 'all')} />
                    
                </div>
                
                
                {content}
                
                
                <Footer />
            
            </Div>
            
            )
        
        
    }
    
    
}


const mapStateToProps = state => {
    
    return {
        
        images: state.gallery.gallery,
        parentButton: state.gallery.parentButton
        
    }
    
    
};


const mapDispatchToProps = dispatch => {
    
    return {
        
        fetch: (parentNode, childNode) => dispatch(actions.fetchGallery(parentNode, childNode))
        
    }
    
};


export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Gallery, axios));