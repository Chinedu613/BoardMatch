import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Users from '../utils/Users'
import '../components/SignupCss/styles.css';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            skill: 0, 
            errormessage: "",
            created: false
        };
    }

    formValidation = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
              
        this.setState({[nam]: val});
        console.log(this.state.username);
    }


    handleSubmit = (event) => {
       event.preventDefault();
       let err = "";
       if (this.state.username === "") {
        err = <strong>Your username cannot be blank!</strong>
    }
     if (this.state.email === "") {
        err = <strong>Your email cannot be blank!</strong>
    } if (this.state.password === "") {
        err = <strong>Your password cannot be blank!</strong>
    }
     if (this.state.skill !== Number) {
        err = <strong>Your skill level must be a number!</strong>
    }
    this.setState({errormessage: err});
       console.log("password is" + this.state.password);
       console.log("username is" + this.state.username);
       console.log(this.state);
        Users.saveUser({
            username:this.state.username,
            password:this.state.password,
            skillLevel:this.state.skill,
            favoriteGame:"Catan"
        });
     this.setState({created:true});   
    }
    
    render() {
    
        return (
              <div className="SignUp">
                  {this.state.created && <Redirect to="/search"/>}
                  <h1>Sign Up</h1>
                  <form onSubmit={this.handleSubmit}>
                      <div>
                          <Form.Group size="lg" controlId='userName'>
                              <Form.Label>Enter your user name:</Form.Label>
                              <Form.Control
                              autoFocus
                              type="text"
                              name="username"
                              value={this.state.username}
                              onChange={this.formValidation}
                              />
                              {this.state.errormessage}
                          </Form.Group>
                           <Form.Group size="lg" controlId="password">
                              <Form.Label>Enter your password:</Form.Label>
                              <Form.Control
                              autoFocus
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.formValidation}
                              />
                             {this.state.errormessage}
                          </Form.Group>
                          <Form.Group size="lg" controlId="skill">
                              <Form.Label>Enter your skill level:</Form.Label>
                              <Form.Control
                              autoFocus
                              type="skill"
                              name="skill"
                              value={this.state.skill}
                              onChange={this.formValidation}
                              />
                              {this.state.errormessage}
                              </Form.Group>
                      </div>
                      <div style={{ 
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          paddingTop: "3%"
                      }}>
                          <Button block size="lg" style={{backgroundColor: "black"}} onClick={this.handleSubmit}>
                              Create
                          </Button> 
                      </div>
                  </form>
              </div>
        )
    }
}

// export default SignUpForm;