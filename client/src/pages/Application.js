import React from 'react'
import Layout from '../components/Layout'
import { Form, Row, Input, Col, Button, TimePicker } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'
import { useDispatch } from "react-redux"
import { hideLoading, showLoading } from '../redux/alertSlice'

function Application() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const onFinish = async (values) => {
        try {
            dispatch(showLoading() )
            const response = await axios.post('/user/application', values, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            dispatch(hideLoading() )
            console.log(response, "responseresponseapplication");
            if (response.data.success) {
                toast.success(response.data.message)
                navigate('/')
                console.log(response, "responsefffresponse");
            } else {
                toast.error("application not submitted")
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <Layout>
            <h1 className='card-title'>application form</h1>
            <hr />
            <Form layout='vertical' onFinish={onFinish}>
                <h1 className='page-title'>company details</h1>
                <Row gutter={20}>
                    <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='name' name="name" rules={[{ required: true }]}>
                            <input className='width-input' placeholder='Name' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='city' name="city" rules={[{ required: true }]}>
                            <input placeholder='City' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='email' name="email" rules={[{ required: true }]}>
                            <input placeholder='Email' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='companyName' name="companyName" rules={[{ required: true }]}>
                            <input placeholder='CompanyName' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='address' name="address" rules={[{ required: true }]}>
                            <input placeholder='Address' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='state' name="state" rules={[{ required: true }]}>
                            <input placeholder='State' />
                        </Form.Item>
                    </Col>
                    <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='phoneNumber' name="phoneNumber" rules={[{ required: true }]}>
                            <input placeholder='PhoneNumber' />
                        </Form.Item>
                    </Col>

                    <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='companyLogo' name="companyLogo" rules={[{ required: true }]}>
                            <input placeholder='CompanyLogo' />
                        </Form.Item>
                    </Col>
                    {/* <Col span={8} xs={8} xm={8} lg={8}>
                        <Form.Item required label='Timings' name="timings" rules={[{ required: true }]}>
                            <TimePicker.RangePicker />
                        </Form.Item>
                    </Col> */}

                </Row>
                <div className="d-flex justify-content-end ">
                    <Button className='primary-button' htmlType='submit'>SUBMIT</Button>
                </div>
            </Form>
        </Layout>
    )
}

export default Application