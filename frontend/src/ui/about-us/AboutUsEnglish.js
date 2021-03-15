import React from "react";
import {Container, Image, Row, Col} from "react-bootstrap";
import elizabethprofilepicture from "../images/elizabeth-profile-picture.png"
import kylemayerprofilepicture from "../images/kyle-mayer-profile-picture.jpg"
import ramonprofilepicture from "../images/ramon-profile-picture.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import './style.css'


export const AboutUsEnglish = () => {
    return (
        <>
            {/*DEVELOPERS TITLE*/}
                <Container className="text-center mt-4 mb-5">
                    <h1>Developers</h1>
                    <p className="description"> SaluDuo is committed to providing equitable information and resources by delivering high quality articles and support services to our diverse communities. Our team is driven to aid the spanish speaking-population by compiling a data base extracted from a reputable source named My Health Finder. We are committed to display bilingual information and give quick access to our users to translate helpful information with a click of a button. </p>
                </Container>

            {/*DEVELOPERS NAME & DETAILS*/}
            <Container>
                <Row className="justify-content-center align-content-center">

                    {/*Developer #1*/}
                        <Col className="mb-4" xs={8} md={4} lg={3}>
                            <Image className="img-fluid" src={elizabethprofilepicture} roundedCircle alt="Profile Picture"/>
                        </Col>

                    {/*TEXT #1*/}
                        <Col className="mb-4" xs={10} md={6} lg={9}>
                            <h2 className="name mt-4">Elizabeth Hines</h2>
                            <p className="description">Studying in the humanities helped me understand the world around me. Several years in the hospitality industry has taught me skills in problem-solving and the importance of coaction. In learning to code I look forward to bettering my community through bettering myself.</p>

                            {/*Link to LinkedIn*/}
                            <a href="https://www.linkedin.com/in/elizabethhines2140/" className="linkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                            </a>

                            {/*Link to GitHub*/}
                            <a href="https://github.com/LizzyHines" className="GitHub">
                                <FontAwesomeIcon icon={faGithub} size="3x"/>
                            </a>
                        </Col>

                    {/*Developer #2*/}
                        <Col className="mb-4" xs={8} md={4} lg={3}>
                            <Image className="img-fluid" src={kylemayerprofilepicture} roundedCircle alt="Profile Picture"/>
                        </Col>

                    {/*TEXT #2*/}
                    <Col className="mb-4" xs={10} md={6} lg={9}>
                            <h2 className="name mt-4">Kyle Mayer</h2>
                            <p className="description">Passionate and creative problem solver working to expand my skill set as much as possible every single day. My previous career as a professional chef taught me how to be organized, methodical, and a team player in order to deliver quality products in a timely manner.</p>

                            {/*Link to LinkedIn*/}
                            <a href="https://www.linkedin.com/in/kyle-mayer-fullstack/" className="linkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                            </a>

                            {/*Link to GitHub*/}
                            <a href="https://github.com/kmayer5120" className="GitHub">
                                <FontAwesomeIcon icon={faGithub} size="3x"/>
                            </a>
                        </Col>

                    {/*Developer #3*/}
                        <Col className="mb-4" xs={8} md={4} lg={3}>
                            <Image className="img-fluid" src={ramonprofilepicture} roundedCircle alt="Profile Picture"/>
                        </Col>

                    {/*TEXT #3*/}
                    <Col className="mb-4" xs={10} md={6} lg={9}>
                            <h2 className="name mt-4">Ramon Pantoja</h2>
                            <p className="description">I am seeking a Junior Web Developer position where I can enhance my skillset in different web technologies. I am a motivated self-starter with an aptitude for continuous learning and an ability to multi-task, ensuring projects completed efficiently and in a timely manner. Great team player with success in several fast-paced and challenging environments</p>

                            {/*Link to LinkedIn*/}
                            <a href="https://www.linkedin.com/in/ramon-pantoja/" className="linkedIn">
                                <FontAwesomeIcon icon={faLinkedinIn} size="3x"/>
                            </a>

                            {/*Link to GitHub*/}
                            <a href="https://github.com/RamonPantoja12" className="GitHub">
                                <FontAwesomeIcon icon={faGithub} size="3x"/>
                            </a>
                        </Col>
                </Row>
            </Container>
        </>
    )
}