import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import axios from '../../axios-post';

import Div from '../../hoc/div/div';
import Nav from '../../components/nav/nav';
import Form from '../../components/form/form';
import Footer from '../../components/footer/footer';
import classes from './Contact.css';


class Contact extends Component {
    
    state = {
                showingInfoWindow: false,  //Hides or the shows the infoWindow
                activeMarker: {},          //Shows the active marker upon click
                selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
            };
            
            
    onMarkerClick = (props, marker, e) =>
            this.setState({
            selectedPlace: props,
            activeMarker: marker,
          showingInfoWindow: true
    });

    onClose = props => {
          if (this.state.showingInfoWindow) {
                this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
          }
    };
    
    render(){
        
        const mapStyle = {
            
            width: '50%',
            height: '50%'
            
        }
        
        return (
            
            <Div classes={classes.container}>
            
                <Nav />
                
                <div className={classes.locationInfo}>
                
                    <div className={classes.mapComponent}>
                    
                        <Map
                            google={this.props.google}
                            zoom={14}
                                style={mapStyle}
                                initialCenter={{
                                 lat: 43.464302,
                                 lng: -80.466494
                                }}
                        >
                             
                             <Marker
                                onClick={this.onMarkerClick}
                                name={'K&K Cabinets & Countertops'}
                            />
                            <InfoWindow
                              marker={this.state.activeMarker}
                              visible={this.state.showingInfoWindow}
                              onClose={this.onClose}
                            >
                              <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                              </div>
                            </InfoWindow>
                             
                        </Map>
                    
                    </div>
                
                     
                    
                    <div className={classes.detailedAddress}>
                    
                        <div className={classes.hours}>
                        
                            <h2>Business Hours</h2>
                            <p>Monday to Friday 10 am - 5 pm</p>
                            <p>Saturday               10 am - 2 pm</p>
                            <p>Other times available by appointments</p>
                        
                        </div>
                        
                        <div className={classes.address}>
                            <p>Address: 842 Victoria St. North, Unit 10, Kitchener On N2B 3C1</p>
                            <p>Tel: 519-578-9123</p>
                        </div>
                        
                        <a href="mailto:info@kkcabinets.ca">Email: info@kkcabinets.ca</a>
                    
                    </div>
                
                </div>
                
                
                    
                <div className={classes.form}>
                
                    <h1>Contact Us</h1>
                    
                   <Form />
                
                </div>
                
                <Footer />
            
            
            </Div>
            
            )
        
    }
    
    
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBl3NeZGYsmE3FBdLr-wvWuXHjb75SXqmA'
})(Contact);