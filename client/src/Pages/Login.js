import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import '../components/loginCss/styles.css';

function LoginForm() {
    const validEmailRegex =   RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const validateForm = () => {
        // if (userName.length < 5) {
        //     return 'Your User Name must be at least 5 characters long!';
        // } 
        //  if (email === validEmailRegex) {
        //     return 'Email is not valid!';
        // } if (password.length < 8 ) {
        //     return 'Password must be at least 8 characters long!';
        // } 
        // return "";
        return userName.length > 0 && password.length > 0;
    }          


 const handleSubmit = (event) => {
     event.preventDefault();
     setUserData({username: userName, password: password})
 }

 return (
    
     <div className="Login">
         <h1>Login</h1>
         <Form onSubmit={handleSubmit}>
             <div>
             <Form.Group size="lg" controlId="userName">
                 <Form.Label>User Name</Form.Label>
                 <Form.Control
                 autoFocus
                 type="text"
                 value={userName}
                 onChange={(e) => setUserName(e.target.value)}
                 />
             </Form.Group>
             {/* <Form.Group size="lg" controId="email">
             <Form.Label>Email</Form.Label>
             <Form.Control
             autoFocus
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
             </Form.Group> */}
             <Form.Group size="lg" controlId="password">
                 <Form.Label>Password</Form.Label>
                 <Form.Control
                 type="password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
             </Form.Group>
             </div>
             <div style={{ 
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 paddingTop: "3%"                
             }}>
             <Button block size="lg" style={{backgroundColor: "black"}} disabled={(validateForm())}>
                 Login
             </Button>
             </div>
         </Form>
     </div>
 )
}
export default LoginForm;