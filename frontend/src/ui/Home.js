import React from "react"
import {NavigationBar} from "./shared/components/NavigationBar";

const navLinks = [
    {name: "Sign Up", linkTo: "#link-to-sign-up"},
    {name: "Log In", linkTo: "#link-to-login"}
    ];

export const Home = () => {
    return (
        <>
            <NavigationBar links={navLinks}/>
            <h1>Home</h1>
        </>
    )
}