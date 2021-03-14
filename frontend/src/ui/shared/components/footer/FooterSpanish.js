import React from "react"
import {Col,Row} from "react-bootstrap";
import "../../component.css"


export const FooterSpanish = () => {
    return (
        <>
            <section>
                <div className="modal-footer  my-3 border-0 justify-content-lg-center flex-column">
                    <Row className="justify-content-center align-content-center">
                        <Col xs={10} md={9} lg={5}>
                            <p className="PF">La estructura del sitio fue diseñada por<a className="logo ml-2" href="http://localhost:3000/about-us">SaluDuo</a></p>
                        </Col>

                        <Col xs={10} md={9} lg={8} >
                            <p className="PF">Toda la información y los artículos de salud fueron proporcionados por<a className="logo ml-2" href="https://health.gov/myhealthfinder">
                                <img width="200px" src="https://health.gov/themes/custom/healthfinder/images/MyHF.svg" alt="Health Finder Logo"/></a>
                            </p>
                        </Col>

                    </Row>
                </div>
            </section>

        </>
    )
}