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
        const username = event.target.firstElementChild.children[3].value;
        const password = event.target.firstElementChild.children[5].value;
        
        //server side user creation
        fetch("/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, email: email, password: password })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                // document.getElementById("ContactUsForm").reset();
                // return this.setState({email: [...res]})
            });


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