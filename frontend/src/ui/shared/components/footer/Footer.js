import React from "react"
import "../../component.css"
import toggle from "../../../../store/toggle";
import {FooterSpanish} from "./FooterSpanish";
import {FooterEnglish} from "./FooterEnglish";


export const Footer = () => {
    return (
        <>
            {
                toggle === true && <FooterSpanish/>
                ||
                toggle === false && <FooterEnglish/>
            }
            <FooterEnglish/>
        </>
    )
}
