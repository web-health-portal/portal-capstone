import React from 'react';
import {httpConfig} from "../../utils/http-config"
import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContentSpanish} from "./SignUpFormContentSpanish";

export const SignUpFormSpanish = () => {
    const signUp = {
        profileFirstName: "",
        profileLastName: "",
        profileEmailAddress: "",
        profileLanguage: "",
        profilePassword: "",
        profilePasswordConfirm: "",
    };

    const validator = Yup.object().shape({
        profileEmailAddress: Yup.string()
            .email("el correo electrónico debe ser un correo electrónico válido")
            .required('correo electronico es requerido'),
        profilePassword: Yup.string()
            .required("se requiere contraseña")
            .min(8, "La contraseña debe tener al menos ocho caracteres"),
        profilePasswordConfirm: Yup.string()
            .required("Se requiere confirmación de contraseña")
            .min(8, "La contraseña debe tener al menos ocho caracteres"),
    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };


    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {SignUpFormContentSpanish}
        </Formik>

    )
};
