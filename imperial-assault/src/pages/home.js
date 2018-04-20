import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import Header from '../components/header';
import Welcome from '../components/welcome';
import SignUpForm from '../components/signUpForm';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            signUp: false
        }
    };

    handleSignUpClick = () => {
        this.setState({signUp: true});
    }

    handleClick = () => {
        this.setState({signUp: false});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        
        const email = event.target.firstElementChild.children[1].value;
        const username = event.target.firstElementChild.children[1].value;
        const password = event.target.firstElementChild.children[1].value;
        
        //server side user creation

    }

    render() {
        return (
            <div>
        <Header handleClick={this.handleClick}/>
        <Grid>
        {(this.state.signUp) ? <SignUpForm handleSubmit={this.handleSubmit}/> : 
        <Welcome handleSignUpClick={this.handleSignUpClick}/>}
        </Grid>
        </div>
        )
    };
};

export default Home;