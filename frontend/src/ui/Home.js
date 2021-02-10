import React from "react"
import {NavigationBar} from "./shared/components/NavigationBar";

const navLinks = [
    {name: "Sign Up", linkTo: "/sign-up"},
    {name: "Log In", linkTo: "/log-in"},
    ];

export const Home = () => {
    return (
        <>
            <NavigationBar links={navLinks}/>
            <h1>Home</h1>
        </>
    )
}