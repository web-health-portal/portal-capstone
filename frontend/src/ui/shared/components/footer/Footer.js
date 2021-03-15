import React from "react"
import "../../component.css"
import toggle from "../../../../store/toggle";
import {FooterSpanish} from "./FooterSpanish";
import {FooterEnglish} from "./FooterEnglish";
import {useSelector} from "react-redux";


export const Footer = () => {
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    return (
        <>
            {
                toggle === true && <FooterSpanish/>
                ||
                toggle === false && <FooterEnglish/>
            }
        </>
    )
}
