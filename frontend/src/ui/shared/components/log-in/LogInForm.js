import React from 'react';
import {httpConfig} from "../../utils/http-config";
import {Formik} from "formik";
import * as Yup from "yup";
import {LogInFormContent} from "./LogInFormContent";
import {useDispatch} from "react-redux";
import * as jwtDecode from 'jwt-decode'
import { getAuth } from '../../../../store/auth'

export const LogInForm = () => {

    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters")
    });


    //the initial values object defines what the request payload is.
    const logIn = {
        profileEmail: "",
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
                {LogInFormContent}
            </Formik>
        </>
    )
};