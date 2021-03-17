import React from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {AccountPrefFormContentSpanish} from "./AccountPrefFormContentSpanish";

export const AccountPreferencesSpanish = () => {
    const validator = Yup.object().shape({
        profileFirstName: "",
        profileLastName: "",
        profileEmailAddress: Yup.string()
            .email("el correo electrónico debe ser un correo electrónico válido")
            .required('correo electronico es requerido'),
    };
return (
    <Formik
        initialValues={save}
        onSubmit={savePreferences}
        validationSchema={validator}
    >
        {AccountPrefFormContentSpanish}
    </Formik>
)