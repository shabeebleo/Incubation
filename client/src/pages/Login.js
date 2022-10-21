import React from 'react'
import { Form, Input,Button } from 'antd'
import {Link} from 'react-router-dom'


function Login() {
    const onFinish=(values)=>{
        console.log("recieved values",values );
    }
    return (
        <div className='authentication '>
            <div className='authentication-form card p-3'>
                <h1 className='card-title'>nice to meet you</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    
                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email'/>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password'/>
                    </Form.Item>   
                    <Button className='primary-button mt-3 my-2' htmlType='submit'>Login</Button>  
                    <Link className='anchor ' to='/register'>CLICK HERE TO REGISTER</Link>              
                </Form>
            </div>          
        </div>
    )
}

export default Login 