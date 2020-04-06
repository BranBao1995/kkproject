import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './nav.css';
import Div from '../../hoc/div/div';

import logo from '../../assets/images/kk_logo.png';


class Nav extends Component {
    
    
        render(){
            
            return (
                
                <Div classes={classes.container}>
                
                    <a href="/" className={classes.nav_logo}>
                        <img src={logo} alt="kk logo" className={classes.logo} />
                    </a>
                    
                    <ul>
                    
                        
                        <li>
                            <NavLink to="/countertops">Countertops</NavLink>
                        </li>
                        
                        
                        <li>
                            <NavLink to="/gallery">Gallery</NavLink>
                        </li>
                    
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                    
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                        
                        <li>
                            TEL: 519 578 9123
                        </li>
                    
                    </ul>
                
                </Div>
                
                    
                )
            
        }
        
    
}


export default Nav;