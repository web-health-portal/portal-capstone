import React from "react"
import {ModalFooter, Col, Row, Container, ListGroup, ListGroupItem, Button, ToggleButton, Toggle} from "react-bootstrap";
import "./component.css"


export const Footer = () => {
    return (
        <>
        <section>
            <div id="footer">
                <ModalFooter  className="modal-footer justify-content-center ">
                    <div>
                        <ul className="list-group">
                            <li className="mb-3 mt-3">
                                All health information and articles provided by
                                <a className="logo ml-2" href="https://health.gov/myhealthfinder">
                                    <img width="200px" src="https://health.gov/themes/custom/healthfinder/images/MyHF.svg" alt="Health Finder Logo"/>
                                </a>
                            </li>
                        </ul>

                        <ul>
                            <li className="mb-3">
                                Site structure designed by <a className="logo ml-2" href="http://localhost:3000/about-us">SaluDuo</a>
                            </li>
                        </ul>
                    </div>
                </ModalFooter>
            </div>
        </section>


            {/*<ModalFooter  className="Footer mt-5 justify-content-center align-content-center">*/}
            {/*    <Col xs={6}  lg={5}>*/}
            {/*    <a className="logo" href="https://health.gov/myhealthfinder">*/}
            {/*        <img width="200px" src="https://health.gov/themes/custom/healthfinder/images/MyHF.svg" alt="Health Finder Logo"/>*/}
            {/*    </a>*/}
            {/*    </Col>*/}
            {/*<Col xs={8}  lg={6} className="mr-2">*/}
            {/*    <a href="http://localhost:3000/about-us">*/}
            {/*        <p className="devs">Meet the Developers</p>*/}
            {/*    </a>*/}
            {/*</Col>*/}
            {/*</ModalFooter>*/}

        </>
    )
}

