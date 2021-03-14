import React from 'react';
import {httpConfig} from "../../utils/http-config";
import {Formik} from "formik";
import * as Yup from "yup";
import {LogInFormContentSpanish} from "./LogInformContentSpanish";
import {useDispatch} from "react-redux";
import jwtDecode from 'jwt-decode'
import { getAuth } from '../../../../store/auth'

export const LogInFormSpanish = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmailAddress: Yup.string()
            .email("Introduzca un correo electrónico válido")
            .required('Correo electronico es requerido'),
        profilePassword: Yup.string()
            .required("Se requiere contraseña")
            .min(8, "La contraseña debe tener al menos ocho caracteres")
    });


    //the initial values object defines what the request payload is.
    const logIn = {
        profileEmailAddress: "",
        profilePassword: ""
    };

    const submitLogIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/log-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    resetForm();
                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={logIn}
                onSubmit={submitLogIn}
                validationSchema={validator}
            >
                {LogInFormContentSpanish}
            </Formik>
        </>
    )
};