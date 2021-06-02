import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import '../components/SignupCss/styles.css';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            age: null, 
            errormessage: ""
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
     if (this.state.age !== Number) {
        err = <strong>Your  age must be a number!</strong>
    }
    this.setState({errormessage: err});
       console.log("password is" + this.state.password);
       console.log("username is" + this.state.username);
       console.log(this.state);
    }
    
    render() {
    
        return (
              <div className="SignUp">
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
                          <Form.Group size="lg" controlId="email">
                              <Form.Label>Enter your email address:</Form.Label>
                              <Form.Control
                              autoFocus
                              type="text"
                              name="email"
                              value={this.state.email}
                              onChange={this.formValidation}
                              />
                        
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
                          <Form.Group size="lg" controlId="age">
                              <Form.Label>Enter your age:</Form.Label>
                              <Form.Control
                              autoFocus
                              type="age"
                              name="age"
                              value={this.state.age}
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
                          <Button block size="lg" style={{backgroundColor: "black"}}>
                              Create
                          </Button> 
                      </div>
                  </form>
              </div>
        )
    }
}

// export default SignUpForm;