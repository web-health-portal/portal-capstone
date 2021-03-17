import React from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {AccountPrefFormContentSpanish} from "./AccountPrefFormContentSpanish";
import {httpConfig} from "../../../../utils/httpConfig";

export const AccountPreferencesSpanish = (props) => {
    const {profile} = props

    const validator = Yup.object().shape({
        profileFirstName: "",
        profileLastName: "",
        profileEmailAddress: Yup.string()
            .email("el correo electrónico debe ser un correo electrónico válido")
            .required('correo electronico es requerido'),
    });

    function submitEditedProfile(values, updatedProfile, {resetForm, setStatus}) {

            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                    return (reply)
                })
    }

    return (
        <Formik
            initialValues={profile}
            onSubmit={submitEditedProfile}
            validationSchema={validator}
        >
            {AccountPrefFormContentSpanish}
        </Formik>
    )
}