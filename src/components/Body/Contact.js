import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'

export class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel',
            message: ''
        }
    }

    render() {
        return (
            <div className="row row-content" >
                <div className="col-12">
                    <h3>Send us your feedback</h3>
                </div>
                <div className="col-12">
                    <Form>
                        <FormGroup row>
                            <Label htmlFor='firstName' md={2}> FirstName </Label>
                            <Col md={10}>
                                <Input
                                    type='text'
                                    name="firstName"
                                    placeholder='First Name'
                                    value={this.state.firstName}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='lastName' md={2}> Last Name </Label>
                            <Col md={10}>
                                <Input
                                    type='text'
                                    name="lastName"
                                    placeholder='Last Name'
                                    value={this.state.lastName}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='telnum' md={2}> Tel. Num </Label>
                            <Col md={10}>
                                <Input
                                    type='number'
                                    name="telnum"
                                    placeholder='+88 01****'
                                    value={this.state.telnum}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='email' md={2}> Tel. Num </Label>
                            <Col md={10}>
                                <Input
                                    type='email'
                                    name="email"
                                    placeholder='jhon@domain.com'
                                    value={this.state.email}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row  >

                            <Col className="d-flex align-items-center" md={{ size: 6, offset: 2 }}>
                                <Input
                                    className="m-0"
                                    type='checkbox'
                                    name="agree"
                                    checked={this.state.agree}
                                />
                                <Label className="ms-3" htmlFor='agree' md={10}> May we contact you </Label>
                            </Col>
                            <Col md={{ size: 4, offset: 2 }}>
                                <Input
                                    type='select'
                                    name='contactType'
                                    value={this.state.contactType}
                                >
                                    <option  > Tel. </option>
                                    <option > Email </option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='message' md={2}> Your Feedback </Label>
                            <Col md={10}>
                                <Input
                                    type='textarea'
                                    name="message"
                                    placeholder='Very tasty'
                                    value={this.state.message}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col md={{ size: 10, offset: 2 }}>
                                <Button type='submit' className="btn-success" >
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Contact