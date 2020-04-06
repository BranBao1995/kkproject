import React, { Component } from 'react';


import classes from './form.css';
import Div from '../../hoc/div/div';



class Form extends Component {
    
    state = {
        
        controls: {
            
            name: {
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            
            comments: {
                
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
                
            },
            
             email: {
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
            
        }
        
    }
    
    checkValidity = (value, rules) => {
        
        
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
        
    }
    
    inputChangedHandler = ( event, controlName ) => {
        
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );

    }
    
    
    
    render(){
        
        let nameInputStyle = null;
        let emailInputStyle = null;
        let commentInputStyle = null;
        
        if (!this.state.controls.name.valid && this.state.controls.name.touched) {
            
            nameInputStyle = {
                
                border: ".1rem solid red"
                
            }
            
        } else {
            
            nameInputStyle = null;
            
        }
        
       if (!this.state.controls.email.valid && this.state.controls.email.touched) {
            
            emailInputStyle = {
                
                border: ".1rem solid red"
                
            }
            
        } else {
            
            emailInputStyle = null;
            
        }
        
        
        if (!this.state.controls.comments.valid && this.state.controls.comments.touched) {
            
            commentInputStyle = {
                
                border: ".1rem solid red"
                
            }
            
        } else {
            
            commentInputStyle = null;
            
        }
        
        
        return (
            
            <form className={classes.form}>
            
                <div className={classes.formField}>
                
                    <div className={classes.nameInputs}>
                    
                        <div className={classes.firstName}>
                            <label className={classes.label} id="firstName">First Name</label>
                            <input type="text" placeholder="First Name" required onChange={(event) => this.inputChangedHandler(event, "name")} style={nameInputStyle}/>
                        </div>
                        <div className={classes.lastName}>
                            <label className={classes.label} id="lastName">Last Name</label>
                            <input type="text" placeholder="Last Name" required onChange={(event) => this.inputChangedHandler(event, "name")} style={nameInputStyle}/>
                        </div>
                        
                    </div>
                    
                    <div className={classes.emailInput}>
                        <label className={classes.label} id="email">Email</label>
                        <input type="email" placeholder="Email Address" required onChange={(event) => this.inputChangedHandler(event, "email")} style={emailInputStyle}/>
                    </div>
                    
                    <div className={classes.commentInput}>
                        <label className={classes.label} id="comments">Comments</label>
                        <textarea required onChange={(event) => this.inputChangedHandler(event, "comments")} style={commentInputStyle}/>
                    </div>
                
                </div>
                
                <button className={classes.button}>Submit</button>
            
            </form>
            
            );
        
    }
    
    
    
}

export default Form;