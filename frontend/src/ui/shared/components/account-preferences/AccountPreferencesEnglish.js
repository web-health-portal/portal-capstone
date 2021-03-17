import React from "react";
import * as Yup from "yup";
import {Formik} from "formik";
import {AccountPrefFormContent} from "./AccountPrefFormContent";
import {httpConfig} from "../../../../utils/httpConfig";


export const AccountPreferencesEnglish = (props) => {
    const {profile} = props

    const validator = Yup.object().shape({
        profileFirstName: "",
        profileLastName: "",
        profileEmailAddress: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
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
            {AccountPrefFormContent}
        </Formik>
    )
}


