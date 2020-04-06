import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from '../../axios-post';
import { Transition } from 'react-transition-group';

import Div from '../../hoc/div/div';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import Image from '../../components/image/image';
import classes from './Countertops.css';
import * as actions from '../../store/actions/index';
import errorHandler from '../../hoc/errorHandler/errorHandler';


class Countertops extends Component {
    
    state = {
        
        mounted: false,
        showGallery: false
        
    }
     
    
    componentDidMount () {

        this.props.fetchImages();
        
        this.setState({mounted: true, showGallery: false});

    }
    
    
    // componentWillUnmount () {
        
        
    //     this.setState({mounted: false, showGallery: false});
        
    // }
   
   toggleShowGallery = () => {
       
       this.setState({mounted: true, showGallery: true})
       
   }
    
    render(){
        
        
        let content = null;
        
        if (this.props.images){
            
            content = this.props.images.map(el => {
                
                return (
                    
                    <Image key={el.id} imageUrl={el.image_url} altText={el.image_id}/>
                    
                    )
                
            })
            
        }
        
        // const headerClass = [classes.header, classes.header_invisible];
        const introAnimation = [classes.intro, classes.intro_animation];
        const galleryAnimation = [classes.gallery_countertops, classes.gallery_countertops_animation];
        
        return (
            
            <Div classes={classes.container}>
            
                <Nav />
                
                 <Transition in={this.state.mounted} timeout={1000} onEntered={() => this.toggleShowGallery()}>
                            
                    {state => (
                        
                                
                        <div className={state === 'entering' ? introAnimation.join(' ') : classes.intro}>
                
                   
                    
                            <div className={classes.header}>
                            
                                <h1 className={classes.first}>Our Choice of Material...</h1>
                                <h1 className={classes.second}>for Your Countertops</h1>
                                            
                            </div>
                                            
                                            
                            <div className={classes.paragraph}>
                                
                                <p>
                                    Quartz is our "go to" choice for your counter tops. 
                                    Quartz is harder than granite and thus more durable. 
                                    In fact, Quartz is nearly indestructible, and because it isn't porous like granite, 
                                    it's easy to keep your counter tops relatively bacteria-free.
                                </p>
                                            
                            </div>
                        
                        </div>

                            
                            
                    ) }
                        
                </Transition>
                
                
                
                
                <Transition in={this.state.showGallery} mountOnEnter timeout={2000}>
                            
                    {state => (
                        
                                
                        <div className={state === 'entering' ? galleryAnimation.join(' ') : classes.gallery_countertops}>
                        
                            {content}
                        
                        </div>
                                    
                            
                    ) }
                        
                </Transition>
               
                
                
                <div className={classes.miscInfo}>
                
                    <div className={classes.providers}>
                    
                        <h3>We love partnering with the following quartz suppliers and have their samples on display in our showroom. </h3>
                        
                        <ul>
                        
                            <li>
                                <span>MSI</span>
                                <a href="www.msisurfaces.com">www.msisurfaces.com</a>
                            </li>
                            <li>
                                <span>KSTONE</span>
                                <a href="https://kstonequartz.com/">https://kstonequartz.com/</a>
                            </li>
                            <li>
                                <span>TCE STONE</span>
                                <a href="http://tcestone.com/">http://tcestone.com/</a>
                            </li>
                            <li>
                                <span>LUCENT QUARTZ</span>
                                <a href="www.lucentquartz.ca">www.lucentquartz.ca</a>
                            </li>
                            <li>
                                <span>CAMBRIA </span>
                                <a href="http://www.quartzco.ca/">http://www.quartzco.ca/</a>
                            </li>
                        
                        </ul>
                    
                    </div>
                    
                    <div className={classes.explanation}>
                    
                        <p>
                        
                            A quartz surface is an innovative new product that combines natural quartz, one of nature's hardest materials, 
                            with high quality polymer resin and pigment to produce a durable yet luxurious stone surface. 
                            It comes dramatic colours and vibrant patterns with a more luxurious sheen, greater strength and resilience, 
                            minimal maintenance and solid value. Plus, a quartz surface gives the design flexibility you need to make your vision a reality. 
                            Available in 13 colours and patterns, quartz surfaces let you take advantage of one of the strongest and most durable surface materials on the market, 
                            without sacrificing style.
                        
                        </p>
                    
                    </div>
                
                </div>
                
                <Footer />
            
            </Div>
            
            );
        
        
    }
    
    
}


const mapStateToProps = state => {
    
    
    return {
        
        images: state.countertops.images
        
    }
    
};

const mapDispatchToProps = dispatch => {
    
    return {
        
        fetchImages: () => dispatch(actions.fetch())
        
        
    }
    
    
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(Countertops, axios));