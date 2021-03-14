import React from "react";
import './style.css'
import {AboutUsSpanish} from "./AboutUsSpanish";
import toggle from "../../store/toggle";
import {AboutUsEnglish} from "./AboutUsEnglish";
import {useSelector} from "react-redux";

export const AboutUs = () => {
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);

    return (
        <>
            {
                toggle === true && <AboutUsSpanish/>
                ||
                toggle === false && <AboutUsEnglish/>
            }
        </>
    )
}