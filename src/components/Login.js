import React from 'react';
import { Form,Input, Button,Card, Row, Col } from 'antd';
import "antd/dist/antd.css";
import "../login.css";
class Login extends React.Component{
    render(){
        return(

            <div style={{ background: '#ECECEC' }}>
                <br/>
                <br/>
                <br/>

                <Row>

 {/* Login Card  */}

                   
                    <Col lg={24} offset={9} >
                    <Card title="Login Form" style={{width:300 ,height:300,}}>

                            <Form layout="vertical">
                            <div class="input-custom">
                                <Input placeholder="email id"></Input><br />
                                <Input placeholder="password"></Input><br />
                            </div>

                            <Button type="primary" htmlType="submit">sign in</Button>
                            </Form>

                    </Card>
                    </Col>


                </Row>
                
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Login;