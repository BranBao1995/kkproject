import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import axios from '../../axios-post';

import Div from '../../hoc/div/div';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import Form from '../../components/form/form';
import classes from './home.css';

import pic_1 from '../../assets/images/Home Carousel/1.jpg';
import pic_2 from '../../assets/images/Home Carousel/2.jpg';
import pic_3 from '../../assets/images/Home Carousel/3.jpg';
import pic_4 from '../../assets/images/Home Carousel/4.jpg';
import pic_5 from '../../assets/images/Home Carousel/5.jpg';
import countertop from '../../assets/images/countertop.jpg';
import cabinet from '../../assets/images/cabinet.jpg';
import certified from '../../assets/images/intro_logo.jpg';
import Carousel from 'react-bootstrap/Carousel';


class Home extends Component {
    
        
    render(){
        
        const style = {
            
                height: '35rem',
                objectFit: 'cover'
            
        }
        
        return (
            
            <Div classes={classes.container}>
            
                <Nav />
                
                <div className={classes.slideShow}>
                
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          style={style}
                          src={pic_1}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3></h3>
                          <p></p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          style={style}
                          src={pic_2}
                          alt="Second slide"
                        />
                    
                        <Carousel.Caption>
                          <h3></h3>
                          <p></p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          style={style}
                          src={pic_3}
                          alt="Third slide"
                        />
                    
                        <Carousel.Caption>
                          <h3></h3>
                          <p></p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      
                       <Carousel.Item>
                        <img
                          className="d-block w-100"
                          style={style}
                          src={pic_4}
                          alt="Fourth Slide"
                        />
                    
                        <Carousel.Caption>
                          <h3></h3>
                          <p></p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          style={style}
                          src={pic_5}
                          alt="Fifth slide"
                        />
                    
                        <Carousel.Caption>
                          <h3></h3>
                          <p></p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      
                    </Carousel>
                
                </div>
                
                <div className={classes.intro}>
                
                    <div className={classes.intro_row1}>
                    
                        <div className={classes.intro_paragraph}>
                            <p>
                                K&K is a full custom cabinet design studio and shop located in Kitchener Waterloo, Ontario. 
                                Whether you are renovating, building or looking to add some new built in cabinetry or vanities to your space, 
                                K&K is your answer to making custom affordable.
                            </p>
                        </div>
                        
                        <div className={classes.intro_image} id="image_1">
                        
                            <img src={countertop} alt="countertop" />
                            <div className={classes.intro_backdrop} id="backdrop_1">
                                <NavLink to="/countertops">Countertops</NavLink>
                            </div>
                        
                        </div>
                    
                    </div>
                    
                    <div className={classes.intro_row2}>
                    
                        <div className={classes.intro_image} id="image_2">
                        
                            <img src={cabinet} alt="cabinet"/>
                            <div className={classes.intro_backdrop} id="backdrop_2">
                                <NavLink to="/gallery">Gallery</NavLink>
                            </div>
                        
                        </div>
                        
                        <div className={classes.intro_logo}>
                        
                            <img src={certified} alt="certified logo" />
                        
                        </div>
                    
                    </div>
                
                </div>
                
                <div className={classes.formSection}>
                
                    <div className={classes.text}>
                    
                        <h1>Questions?</h1>
                        <p className={classes.second_line}>Fill out the form and one of our designers will get back to you!</p>
                        
                        <p className={classes.third_line}>You may also call 519-578-9123 or come into the showroom today for a FREE estimate!</p>
                    
                    </div>
                
                    <Form />
                    
                
                </div>
                
                <Footer />
            
            </Div>
            
            );
        
    }
    
    
}


export default Home;