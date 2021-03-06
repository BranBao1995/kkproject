import React from 'react';
import { NavLink } from 'react-router-dom';


import classes from './footer.css';


const footer = (props) => {
    
    return (
        
            <div className={classes.container}>
            
                <div className={classes.footerNav}>
                
                    <ul>
                        
                       <li>
                            <NavLink to="/">Home</NavLink>
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
                        
                        
                    </ul>
                
                </div>
                
                
                <div className={classes.socialMedia}>
                
                    <span>© K&K Cabinets & Countertops. All rights reserved</span>
                    <div className={classes.logos}>
                    
                        <a href="http://facebook.com/KKcabinetskw">
                            <svg height="80pt" width="80pt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0"/>
                                <path d="m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0"/>
                                <path d="m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0"/>
                                <path d="m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0"/>
                                <path d="m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0"/>
                                <path d="m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0"/>
                                <path d="m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0"/>
                                <path d="m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0"/>
                                <path d="m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0"/>
                                <path d="m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0"/>
                                <path d="m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0"/>
                                <path d="m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0"/>
                            </svg>
                        </a>
                        
                        
                       <a href="mailto:kkcabinets2000@gmail.com">
                        
                            <svg height="80pt" viewBox="0 0 448 448" width="80pt" xmlns="http://www.w3.org/2000/svg">
                                <path d="m314.375 144h-180.75l90.375 77.464844zm0 0"/>
                                <path d="m224 240c-1.910156 0-3.757812-.683594-5.207031-1.929688l-98.792969-84.679687v150.609375h208v-150.609375l-98.792969 84.679687c-1.449219 1.246094-3.296875 1.929688-5.207031 1.929688zm0 0"/>
                                <path d="m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.140625-123.652344-100.347656-223.859375-224-224zm120 312c0 4.417969-3.582031 8-8 8h-224c-4.417969 0-8-3.582031-8-8v-176c0-4.417969 3.582031-8 8-8h224c4.417969 0 8 3.582031 8 8zm0 0"/>
                            </svg>
                        
                       </a>
                        
                    </div>
                
                </div>
            
            </div>
        
        )
    
    
};


export default footer;