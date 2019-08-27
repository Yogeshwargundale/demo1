import React from 'react';
import { Form,Input, Button,Card, Row, Col } from 'antd';
import "antd/dist/antd.css";
import "../login.css";
class Login extends React.Component{
    render(){
        return(
            <div style={{align:"center"}}>
            <br /><br /><br />

                <Row justify={"center"}>
                    {/* <Col span={8}></Col> */}

 {/* Login Card  */}

                    <Col span={12} offset={6}>
                    <Card title="Login Form" style={{width:300 ,height:300}}>

<Form layout="vertical">
<div class="input-custom">
    <Input placeholder="email id"></Input><br />
    <Input placeholder="password"></Input><br />
</div>

<Button type="primary">sign in</Button>
</Form>

</Card>
                    </Col>


                    {/* <Col span={8}></Col> */}
                </Row>
                
                
            </div>
        )
    }
}

export default Login;