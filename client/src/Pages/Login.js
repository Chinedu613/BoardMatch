import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import Users from "../utils/Users";
import '../components/loginCss/styles.css';

function LoginForm() {
    const validEmailRegex =   RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});         


 const handleSubmit = (event) => {
     event.preventDefault();
     setUserData({username: userName, password: password})
     console.log(userData);
     Users.login(userData)
     .then(res=>{
         console.log(res)
         if(res.data===true){

         }
     }).catch(err=>{
         console.log(err)
     });

 }

 return (
    
     <div className="Login">
         <h1>Login</h1>
         <Form>
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
             <Form.Group size="lg" controlId="password">
                 <Form.Label>Password</Form.Label>
                 <Form.Control
                 type="password"
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
             <Button block size="lg" style={{backgroundColor: "black"}} onClick={handleSubmit}>
                 Login
             </Button>
             </div>
         </Form>
     </div>
 )
}
export default LoginForm;