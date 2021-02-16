import React from "react"
import {NavigationBar} from "./shared/components/NavigationBar";
import {Button, Container, Image, Row, Col, Form} from "react-bootstrap";


const navLinks = [
    {name: "Sign Up", linkTo: "/sign-up"},
    {name: "Log In", linkTo: "/log-in"},
    ];

export const Home = () => {
    return (
        <>
            <NavigationBar links={navLinks}/>
            <h1 className={mx-3}>Welcome</h1>
    )
}