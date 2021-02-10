import React from "react"
import {NavigationBar} from "./shared/components/NavigationBar";
import {Container} from "react-bootstrap";

const navLinks = [
    {name: "Home", linkTo: "/"},
    {name: "Log Out", linkTo: "/log-out"},
];

export const Account = () => {
   return (
       <>
           <NavigationBar links={navLinks}/>
           <h1>Account</h1>
           <Container fluid>

           </Container>
       </>
   )
}