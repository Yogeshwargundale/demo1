import React from 'react';
import { Form,Input, Button } from 'antd';
import "antd/dist/antd.css";
import "../login.css";
class Login extends React.Component{
    render(){
        return(
            <div>
                <h3>Login page</h3>
                <Form layout="vertical">
                <div class="input-custom">
                    <Input placeholder="email_id"></Input><br />
                    <Input placeholder="password"></Input><br />
                </div>
                
                <Button type="primary">sign in</Button>
                </Form>
            </div>
        )
    }
}

export default Login;