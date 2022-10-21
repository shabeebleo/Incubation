import React from 'react'
import { Form, Input,Button } from 'antd'
import {Link} from 'react-router-dom'


function Register() {
    const onFinish=(values)=>{
        console.log("recieved values",values );
    }
    return (
        <div className='authentication '>
            <div className='authentication-form card p-3'>
                <h1 className='card-title'>nice to meet you</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Name' name='name'>
                        <Input placeholder='Name'/>
                    </Form.Item>
                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email'/>
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password'/>
                    </Form.Item>   
                    <Button className='primary-button mt-3 my-2' htmlType='submit'>Register</Button>  
                    <Link className='anchor ' to='/login'>CLICK HERE TO LOGIN</Link>              
                </Form>
            </div>          
        </div>
    )
}

export default Register 