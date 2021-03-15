import React, {useEffect} from "react"
import {LanguageToggle} from "../LanguageToggle";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../../../store/auth";
import toggle from "../../../../store/toggle";
import {NavigationBarSpanish} from "./NavigationBarSpanish";
import {NavigationBarEnglish} from "./NavigationBarEnglish";

export const NavigationBar = () => {
    const auth = useSelector(state => state.auth);
    const toggle = useSelector((state) => state.toggle ? state.toggle : false);
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    return (
        <>
            {
                toggle === true && <NavigationBarSpanish/>
                ||
                toggle === false && <NavigationBarEnglish/>
            }
            <LanguageToggle/>
        </>
    )
}