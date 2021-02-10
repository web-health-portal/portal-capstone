import React from "react"
import {Nav, Navbar} from "react-bootstrap";
import {LanguageToggle} from "./LanguageToggle";
import {Link} from "react-router-dom";

export const NavigationBar = (props) => {

    // const linkConstructionCallback = (link) => {
    //     return (
    //         `
    //             <Nav.Link href="${link.link}">${link.name}</Nav.Link>
    //         `
    //     )
    // }

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">SaluDuo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to={"/"} className={"nav-link"}>Home</Link>
                        {/*{props.links.forEach(link => `${link.name}`)}*/}
                        {props.links.forEach(link => "<Link to={`${link.linkTo}`} className={'nav-link'}>`${link.name}`</Link>")}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LanguageToggle/>
        </>
    )
}