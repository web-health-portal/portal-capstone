import React from "react";
import {Container, Image, Row, Col} from "react-bootstrap";
import elizabethprofilepicture from "../images/elizabeth-profile-picture.png"
import kylemayerprofilepicture from "../images/kyle-mayer-profile-picture.jpg"
import ramonprofilepicture from "../images/ramon-profile-picture.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import './style.css'


export const AboutUs = () => {
    return (
        <>
            {/*DEVELOPERS TITLE*/}
            <Container className="text-center mt-4 mb-5">
                <h1>Developers</h1>
                <p className="description"> SaluDuo está comprometido a proporcionar información y recursos equitativos mediante la entrega de artículos y servicios con el objetivo de apoyar a nuestras diversas comunidades. Gracias a la ayuda de una fuente confiable llamada "My Health Finder" pudimos recopilar una base de datos que nos ayudara a mostrar información útil en ingles y en español con el fin de ayudar a nuestros usuarios. Nuestro equipo tiene como objetivo brindar esta información bilingüe a la población de habla hispana de manera rápida con la ayuda de un solo botón. </p>
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
                        <p className="description">Estudiar hospitalidad me ayudó a valorar y comprender el mundo que me rodea. Varios años trabajando en la industria de la hospitalidad me ayudo a incrementar mi conocimiento en resolver problemas y la importancia de....En esta nueva etapa de mi carrera de programadora espero poder mejorarme a mi misma con el fin de poder ayudar a la comunidad en un futuro.</p>

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
                        <p className="description">Solucionador de problemas apasionado y con gran dedicación a expandir mi conocimiento de habilidades tanto como sea posible todos los días. Mi carrera anterior como chef profesional me enseñó a ser organizado, metódico y a trabajar en equipo para entregar productos de calidad de manera eficaz y oportuna.</p>

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
                        <p className="description">Soy un emprendedor motivado con una aptitud para el aprendizaje continuo, con la habilidad de realizar múltiples tareas, lo que garantiza que los proyectos se completen de manera eficaz y oportuna. Habilidad de trabajar en equipo con éxito en varios entornos desafiantes y de ritmo rápido.</p>

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