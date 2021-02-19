import React from "react"
import {Col, Row} from "react-bootstrap";
import "./component.css"


export const Footer = () => {
    return (
        <>
            <section>
                <div className="modal-footer justify-content-center align-content-center my-3 border-0">
                    <Row className="justify-content-center align-content-center ml-5">

                        <Col xs={12}  lg={8}>
                            <p className="PF">Toda la información y artículos de salud fueron proporcionados por<a className="logo ml-2" href="https://health.gov/myhealthfinder">
                                <img width="200px" src="https://health.gov/themes/custom/healthfinder/images/MyHF.svg" alt="Health Finder Logo"/></a>
                            </p>
                        </Col>

                        <Col xs={12}  lg={5}>
                            <p className="PF">Estructura del sitio fue diseñada por<a className="logo ml-2" href="http://localhost:3000/about-us">SaluDuo</a></p>
                        </Col>

                    </Row>
                </div>
            </section>

        </>
    )
}