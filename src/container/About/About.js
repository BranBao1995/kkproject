import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import axios from '../../axios-post';
import { Transition } from 'react-transition-group';

import Div from '../../hoc/div/div';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import Form from '../../components/form/form';
import classes from './About.css';

import designer from '../../assets/images/designer.jpg';
import pic_1 from '../../assets/images/About Carousel/1.jpg';
import pic_2 from '../../assets/images/About Carousel/2.jpg';
import pic_3 from '../../assets/images/About Carousel/3.jpg';
import pic_4 from '../../assets/images/About Carousel/4.jpg';
import pic_5 from '../../assets/images/About Carousel/5.jpg';


import Carousel from 'react-bootstrap/Carousel';


class About extends Component {
  
  state = {
    
    first: false,
    second: false,
    third: false,
    fourth: false
    
  }
  
  componentDidMount () {
    
    this.setState({first: true});
    
  }
  
  toggleShow_2 = () => {
    
    
      this.setState({second: true});
    
  }
  
  toggleShow_3 = () => {
    
    this.setState({third: true});
    
    
  }
    
  toggleShow_4 = () => {
    
    this.setState({fourth: true});
    
    
  }
    
    render(){
      
      // const textStyle = {
        
      //   fontFamily: 'Old Standard TT, serif' 
        
      // }
      
        console.log(this.state);
        
        const style = {
            
                height: '35rem',
                objectFit: 'cover'
            
        }
        
        const animationStyle = [classes.highlight, classes.highlight_animation];
        
        return (
            
            <Div classes={classes.container}>
            
                <Nav />
                
                
                <div className={classes.intro}>
                
                  <div className={classes.intro_text}>
                    
                    <h1>Custom Shop Because Local Matters</h1>
                    
                    <div className={classes.paragraph}>
                        <p>
                            Our custom shop has a group of skilled craftspeople hand crafting the cabinetry for your home. 
                            With our own CNC machine and spray booth we are able to control our quality and lead times which benefits our clients. 
                            We also source our material locally wherever possible investing into our community where we live, work and play.
                            We love being part of our community and seeing your dreams come true! 
                        </p>
                        
                    </div>
                  
                  </div>
                  
                  <div className={classes.flowchart}>
                  
                    <Transition in={this.state.first} timeout={1000} onEntered={()=>this.toggleShow_2()}>
                    
                      {state => (
                      
                        <div className={state === 'entering' ? animationStyle.join(' ') : classes.highlight}>
                    
                          <div className={classes.title}>
                              <span>
                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                	 viewBox="0 0 59 59" xmlSpace="preserve">
                                <g>
                                	<path d="M52,21c-0.553,0-1,0.447-1,1v32H2V5h49v1c0,0.553,0.447,1,1,1s1-0.447,1-1V3H0v53h53V22C53,21.447,52.553,21,52,21z"/>
                                	<path d="M58.707,7.293c-0.391-0.391-1.023-0.391-1.414,0L27,37.586l-13.07-13.07c-0.391-0.391-1.023-0.391-1.414,0
                                		s-0.391,1.023,0,1.414l13.777,13.777C26.488,39.902,26.744,40,27,40s0.512-0.098,0.707-0.293l31-31
                                		C59.098,8.316,59.098,7.684,58.707,7.293z"/>
                                </g>
                                </svg>
                              </span>
                              
                              <p>
                                One on One
                              </p>
                            </div>
                            
                            <p>
                              You get to meet with one of our designers and tell us what you really want.
                            </p>
                          
                        </div>  
                      
                      )}
                    
                    
                    </Transition>
                  
                    <Transition in={this.state.second} timeout={1000} mountOnEnter onEntered={()=>this.toggleShow_3()}>
                    
                      {state => (
                      
                        <div className={state === 'entering' ? animationStyle.join(' ') : classes.highlight}>
                    
                          <div className={classes.title}>
                              <span>
                              
                                 <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                	 viewBox="0 0 59 59" xmlSpace="preserve">
                                <g>
                                	<path d="M52,21c-0.553,0-1,0.447-1,1v32H2V5h49v1c0,0.553,0.447,1,1,1s1-0.447,1-1V3H0v53h53V22C53,21.447,52.553,21,52,21z"/>
                                	<path d="M58.707,7.293c-0.391-0.391-1.023-0.391-1.414,0L27,37.586l-13.07-13.07c-0.391-0.391-1.023-0.391-1.414,0
                                		s-0.391,1.023,0,1.414l13.777,13.777C26.488,39.902,26.744,40,27,40s0.512-0.098,0.707-0.293l31-31
                                		C59.098,8.316,59.098,7.684,58.707,7.293z"/>
                                </g>
                                </svg>
                              
                              </span>
                              
                              <p>
                                Consistency
                              </p>
                              
                            </div>
                            
                            <p>
                              Measurements, manufacturing, installation. The same technician follows up with you throughout the process to avoid confusion.
                            </p>
                        
                        </div>
                      
                      )}
                    
                    </Transition>
                    
                   
                    <Transition in={this.state.third} timeout={1000} mountOnEnter onEntered={()=>this.toggleShow_4()}>
                    
                      {state => (
                      
                        <div className={state === 'entering' ? animationStyle.join(' ') : classes.highlight}>
                    
                          <div className={classes.title}>
                            <span>
                            
                              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              	 viewBox="0 0 59 59" xmlSpace="preserve">
                              <g>
                              	<path d="M52,21c-0.553,0-1,0.447-1,1v32H2V5h49v1c0,0.553,0.447,1,1,1s1-0.447,1-1V3H0v53h53V22C53,21.447,52.553,21,52,21z"/>
                              	<path d="M58.707,7.293c-0.391-0.391-1.023-0.391-1.414,0L27,37.586l-13.07-13.07c-0.391-0.391-1.023-0.391-1.414,0
                              		s-0.391,1.023,0,1.414l13.777,13.777C26.488,39.902,26.744,40,27,40s0.512-0.098,0.707-0.293l31-31
                              		C59.098,8.316,59.098,7.684,58.707,7.293z"/>
                              </g>
                              </svg>
                            
                            </span>
                            
                            <p>
                              Delivery Flexibility
                            </p>
                          </div>
                          
                          <p>
                            We make our own doors and have our own spray booth, we control much of the process for our clients to have flexible delivery dates.
                          </p>
                    
                        
                        </div>
                      
                      )}
                    
                    </Transition>
                    
                
                    <Transition in={this.state.fourth} timeout={1000} mountOnEnter>
                    
                      {state => (
                      
                        <div className={state === 'entering' ? animationStyle.join(' ') : classes.highlight}>
                    
                          <div className={classes.title}>
                            <span>
                              
                              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                	 viewBox="0 0 59 59" xmlSpace="preserve">
                                <g>
                                	<path d="M52,21c-0.553,0-1,0.447-1,1v32H2V5h49v1c0,0.553,0.447,1,1,1s1-0.447,1-1V3H0v53h53V22C53,21.447,52.553,21,52,21z"/>
                                	<path d="M58.707,7.293c-0.391-0.391-1.023-0.391-1.414,0L27,37.586l-13.07-13.07c-0.391-0.391-1.023-0.391-1.414,0
                                		s-0.391,1.023,0,1.414l13.777,13.777C26.488,39.902,26.744,40,27,40s0.512-0.098,0.707-0.293l31-31
                                		C59.098,8.316,59.098,7.684,58.707,7.293z"/>
                                </g>
                              </svg>
                              
                            </span>
                            
                            <p>
                              Proudly Canadian
                            </p>
                          </div>
                          
                          <p>
                            Every purchase helps contribute to the Canadian economy, employ local people, and support local businesses. 
                          </p>
                    
                    
                        
                        </div>
                      
                      )}
                    
                    </Transition>
                  
                  </div>
                    
                
                </div>
                
                
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
                          alt="Fourth slide"
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
                
        
                
                <div className={classes.designer}>
                
                    <div className={classes.designer_photo}>
                        <img src={designer} alt="designer Zenia Horton"/>
                    </div>
                    
                    <div className={classes.designer_intro}>
                        
                        <h1>About Us - Meet Led Designer</h1>
                        
                        <p>
                            Zenia Horton has been designing award-winning kitchens, baths, and custom built ins for residential and commercial clients throughout Ontario for the past 20 years. 
                            Zenia is a real designer- an artist..which is really just a nice way of saying she's kind of quirky!  Working with Zen is entertaining, enlightening and engaging. 
                            Her passion and artistry is captured in every design and exceeding your expectations is her mission. 
                            Her goal as your designer is to maximize the functionality, beauty and enjoyment of your space; she has a reputation for thinking outside-the-box and consistently 
                            delivers best in class solutions and "wow-factor" design.  
                            "Being able to work alongside the skilled craftsmen and installers at K&K to help deliver your vision has been a dream come true."  
                            So isn't it about time that you brought balance, simplicity and some "zen" into your space?  
                        </p>
                        
                    </div>
                
                </div>
                
                <div className={classes.testimonials}>
                
                    <h1>
                      Our Clients' Appreciation
                    </h1>
                
                    <blockquote>
                      "Very happy with the customer service I received from K&K cabinets. They answered all my questions quick and accurate. Thanks for helping with my project"
                    </blockquote>
                    
                    <blockquote>
                      "The job was done well and quickly. Very professional workers who were conscious of cleaning up afterwards."   
                    </blockquote>
                    
                    <blockquote>
                      "We are very impressed with the quality and efficiency of the work completed on our granite kitchen countertop. 
                      All of the staff was very friendly. 
                      They went above and beyond to ensure we were satisfied. 
                      We would highly recommend K&K cabinet and stone to anyone who is looking for quality professional work with a personal touch and a company who cares about their clients satisfaction. 
                      Thank you K&K cabinet and stone, we are very happy with our beautiful countertops!"
                    </blockquote>
                    
                    <blockquote>
                      "K&K cabinet has a wonderful staff. I would recommend my best friends and people I know. 
                      Their friendly business approach makes a project look good and easy. 
                      They did our basement kitchen and laundry top in a professional manner and we are very satisfied with their work. 
                      Jason, the store manager, Chrystal at the store and Tony the installer were wonderful"
                    </blockquote>
                    
                    <blockquote>
                      "Thanks again for all your hard work helping us on our basement project and was nice doing business with you"
                    </blockquote>
                    
                    <blockquote>
                      "I am very pleased with the service that i have received at K&K cabinet and store. Jason and Tony were friendly and accommodated my requests. 
                      The countertop was professionally installed and looks fabulous. I will be recommending this company to my friends."
                    </blockquote>
                    
                    <blockquote>
                      "Polite, efficient installation team. Were very careful to check faucets to make sure holes in right place, Good price and excellent quality. 
                      Would deal with these people again."
                    </blockquote>
                    
                    <blockquote>
                      "K&K cabinet store supplied a countertop which is good. They have done a good job on time."
                    </blockquote>
                    
                    <blockquote>
                      "Did a great job renovating my kitchen. My kitchen looks like it belongs in a model home! They were very hard working and made sure everything was finished properly. 
                      If you need a kitchen reno, I would definitely recommend them:
                    </blockquote>
                    
                    <blockquote>
                      "Jason and Sophia have been very accommodating. They have excellent service and will make sure they deliver a quality product. 
                      If there are any issues they ensure they are taken care of. 
                      The remove their shoes when they come into your home and clean up their work area. I would recommend them to my friends."
                    </blockquote>
                    
                    <blockquote>
                      "We discovered K&K cabinets and countertops through a recommendation from a friend. We were not disappointed. Quality, customer service, and price was excellent. 
                      Jason Han was a pleasure to work with and we are grateful that he was able to address all of our concerns promptly. 
                      If in the market for a new kitchen, give them a try."
                    </blockquote>
                    
                    <blockquote>
                      "We love our new countertop. They did awesome job. Jason was very kind and sincerely worked for us. 
                      I really appreciate their work. I strongly recommend K&K cabinet and stone. Thank you very much."
                    </blockquote>
                    
                    <blockquote>
                      "Exceptional service, high quality product! Jason helped us and explained each step fully the whole way. Highly recommended."
                    </blockquote>
                    
                    <blockquote>
                      "Good service. We would recommend you to other people."
                    </blockquote>
                
                </div>
                
                <div className={classes.reachout}>
                
                    <div className={classes.question}>
                        Want to Reach Out for More Details? 
                    </div>
                    
                    <div className={classes.button}>
                        <NavLink to="contact">Contact Us</NavLink>
                    </div>
                
                </div>
                
                <Footer />
            
            </Div>
            
            )
        
    }
    
    
}


export default About;