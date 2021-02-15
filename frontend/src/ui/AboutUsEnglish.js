import React from "react";
import {NavigationBar} from "./shared/components/NavigationBar";
import {Container, Image, Row, Col} from "react-bootstrap";
import profileicon from "./profileicon.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fal, faLink} from '@fortawesome/free-solid-svg-icons'

const navLinks = [
    {name: "Home", linkTo: "/Home"},
];

export const AboutUs = () => {
    return (
        <>
            <NavigationBar links={navLinks}/>

            {/*DEVELOPERS TITLE*/}

                <Container className="text-center mt-4 mb-5">
                    <h1>Developers</h1>
                    <p> Tiramisu biscuit cake gingerbread bear claw macaroon gummi bears. Liquorice chocolate I love marzipan. Pudding macaroon chocolate liquorice cake cotton candy caramels chocolate bar marshmallow. Marzipan gingerbread candy danish muffin dessert. I love cookie I love I love. Chocolate bar dragée cotton candy. Ice cream muffin caramels liquorice cupcake biscuit gummi bears. Chocolate marzipan lemon drops soufflé I love.</p>

                </Container>

            {/*DEVELOPERS NAME & DETAILS*/}

            <Container>
                <Row className="justify-content-center align-content-center">

                    {/*Developer #1 IMAGE*/}
                        <Col xs={6} md={4} lg={3}>
                            <Image className="img-fluid" src={profileicon} roundedCircle alt="Profile Picture"/>
                        </Col>

                    {/*Developer #1 TEXT*/}
                        <Col className="mt-4" xs={9} md={6} lg={9}>
                            <h2>Name</h2>
                            <p>Tiramisu biscuit cake gingerbread bear claw macaroon gummi bears. Liquorice chocolate I love marzipan. Pudding macaroon chocolate liquorice cake cotton candy caramels chocolate bar marshmallow. Marzipan gingerbread candy danish muffin dessert. I love cookie I love I love. Chocolate bar dragée cotton candy. Ice cream muffin caramels liquorice cupcake biscuit gummi bears.</p>
                            <FontAwesomeIcon icon={faLink} size="3x"/>
                            <FontAwesomeIcon icon={faLink} size="3x"/>
                        </Col>

                    {/*Developer #2 IMAGE*/}
                        <Col xs={6} md={4} lg={3}>
                            <Image className="img-fluid" src={profileicon} roundedCircle alt="Profile Picture"/>
                        </Col>

                    {/*Developer #2 TEXT*/}
                        <Col className="mt-4" xs={9} md={6} lg={9}>
                            <h2>Name</h2>
                            <p>Tiramisu biscuit cake gingerbread bear claw macaroon gummi bears. Liquorice chocolate I love marzipan. Pudding macaroon chocolate liquorice cake cotton candy caramels chocolate bar marshmallow. Marzipan gingerbread candy danish muffin dessert. I love cookie I love I love. Chocolate bar dragée cotton candy. Ice cream muffin caramels liquorice cupcake biscuit gummi bears.</p>
                            <FontAwesomeIcon icon={faLink} size="3x"/>
                            <FontAwesomeIcon icon={faLink} size="3x"/>
                        </Col>

                    {/*Developer #3 IMAGE*/}
                        <Col className="mt-4" xs={6} md={4} lg={3}>
                            <Image className="img-fluid" src={profileicon} roundedCircle alt="Profile Picture"/>
                        </Col>

                    {/*Developer #3 TEXT*/}
                        <Col xs={9} md={10} lg={9}>
                            <h2>Name</h2>
                            <p>Tiramisu biscuit cake gingerbread bear claw macaroon gummi bears. Liquorice chocolate I love marzipan. Pudding macaroon chocolate liquorice cake cotton candy caramels chocolate bar marshmallow. Marzipan gingerbread candy danish muffin dessert. I love cookie I love I love. Chocolate bar dragée cotton candy. Ice cream muffin caramels liquorice cupcake biscuit gummi bears.</p>
                            <FontAwesomeIcon icon={faLink} size="3x"/>
                            <FontAwesomeIcon icon={faLink} size="3x"/>
                        </Col>
                </Row>
            </Container>



        </>
    )
}