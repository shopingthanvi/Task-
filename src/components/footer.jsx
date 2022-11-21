import React, { useState } from 'react';
import Logo from "./../../src/whiteLog.png"
import Button from "./inputControl/button"
import { Link } from 'react-router-dom';
import {
 Form, Row, Col, Container
} from 'react-bootstrap';
import Input from './inputControl/input';

const Footer = () => {
    const [formState, setFormState] = useState({
        dis: "",
        name: "",
        number: '',
    })
    const [formStateError, setFormStateError] = useState({
        dis: "Please enter discription",
        name: 'Please enter first name',
        number: 'Please enter number',
        show: false
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (formState.dis.length > 0
            && formState.name.length > 0
            && formState.number.length > 0) {
                setFormStateError({ ...formStateError, show: false })
            alert("Form submitted")
        }
        else {
            setFormStateError({ ...formStateError, show: true })
        }

    }
    return (
        <footer className="c-footer">


            <Container>
                <Row>
                    <Col lg="3"> <img src={Logo} /></Col>
                    <Col lg="3"><h6 className="c-footer__heading">QUICK LINKS</h6>
                        <ul>
                            <li><Link to="/about" className="c-footer__link">About</Link>
                            </li>
                            <li><Link to="/COMPANY PROFILE" className="c-footer__link">COMPANY PROFILE</Link> </li>
                            <li><Link to="/PRODUCTS" className="c-footer__link">PRODUCTS</Link></li>
                            <li><Link to="/ CONTACT US" className="c-footer__link"> CONTACT US</Link></li>
                        </ul> </Col>
                    <Col lg="2">
                        <h6 className="c-footer__heading">FOLLOW US ON</h6>
                        <ul>
                            <li><img className="c-footer__icons" src="pin.png" />
                                <img className="c-footer__icons" src="fb.png" />
                                <img src="insta.png" className="c-footer__icons" />
                            </li>
                            <li>+91 85609 25410
                            </li>
                            <li>starsales@gmail.com</li>

                        </ul></Col>
                    <Col lg="4">
                        <h6 className="c-footer__heading">TELL US WHAT YOU ARE LOOKING FOR?</h6>
                        <Form onSubmit={onSubmit}>
                            <Row>
                                <Col md="12">
                                    <textarea
                                        name="discription"
                                        rows="2"
                                        className="c-textarea"
                                        value={formState.dis}
                                        onChange={(e) => {
                                            setFormState({ ...formState, dis: e.target.value });
                                            if (e.target.value.toString().length === 0) {
                                                setFormStateError({ ...formStateError, dis: "Please enter discription" })

                                            } else {
                                                setFormStateError({ ...formStateError, dis: "" })
                                            }
                                        }}
                                    >
                                    </textarea>
                                    <p>{formStateError.show && formStateError.dis}</p>
                                </Col>

                                <Col md="6">
                                    <Input
                                        type="text"
                                        placeholder="First name"
                                        value={formState.name}
                                        onChange={(e) => {
                                            setFormState({ ...formState, name: e.target.value });
                                            if (e.target.value.toString().length === 0) {
                                                setFormStateError({ ...formStateError, name: "Please enter first name" })
                                            } else {
                                                setFormStateError({ ...formStateError, name: "" })
                                            }
                                        }}
                                    />
                                    <p>{formStateError.show && formStateError.name}</p>
                                </Col>
                                <Col md="6">
                                    <Input
                                        type="number"
                                        placeholder="Number"
                                        value={formState.number}
                                        onChange={(e) => {
                                            setFormState({ ...formState, number: e.target.value });
                                            if (e.target.value.toString().length === 0) {
                                                setFormStateError({ ...formStateError, number: "Please enter number" })
                                            } else {
                                                setFormStateError({ ...formStateError, number: "" })
                                            }
                                        }}
                                    />
                                    <p>{formStateError.show && formStateError.number}</p>
                                </Col>
                                <Button
                                    text="Submit"
                                    className="submit-button mt-2"
                                />
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer; 