import React from "react"
import {ModalFooter, Col, Row,} from "react-bootstrap";
import "./style.css"


export const Footer = () => {
    return (
        <>

            <ModalFooter className="Footer mt-5 justify-content-center align-content-center bg-dark">
                <Col xs={6}  lg={5}>
                <a className="logo" href="https://health.gov/myhealthfinder">
                    <img width="200px" src="https://health.gov/themes/custom/healthfinder/images/MyHF.svg" alt="Health Finder Logo"/>
                </a>
                </Col>
            <Col xs={8}  lg={6} className="Devs mt-4 mr-2">
                <a href="http://localhost:3000/about-us">
                    <p>Meet the Developers</p>
                </a>
            </Col>
            </ModalFooter>

        </>
    )
}

